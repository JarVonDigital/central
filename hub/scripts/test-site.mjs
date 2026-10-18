import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import { chromium, webkit } from "playwright";
import AxeBuilder from "@axe-core/playwright";
const base = process.env.TEST_BASE_URL ?? "http://127.0.0.1:4319";
await mkdir("tmp/review", { recursive: true });
let checks = 0;
for (const [name, engine] of Object.entries({ chromium, webkit })) {
  const browser = await engine.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(base);
  await page.locator("h1").waitFor();
  for (const width of [360, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    assert(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      `${name} overflow at ${width}`,
    );
    assert(
      await page
        .locator(".brand img")
        .evaluate((i) => i.complete && i.naturalWidth > 0),
      "logo loads",
    );
    await page.screenshot({
      path: `tmp/review/${name}-${width}.png`,
      fullPage: true,
    });
    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    assert.deepEqual(
      accessibility.violations.map((v) => v.id),
      [],
      `${name} accessibility at ${width}`,
    );
    checks += 3;
  }
  // Every internal fragment points to a real destination.
  for (const href of await page
    .locator('a[href^="#"],a[href^="/#"]')
    .evaluateAll((links) => links.map((a) => a.getAttribute("href")))) {
    const id = href.split("#")[1];
    if (id)
      assert.equal(
        await page.locator(`[id="${id}"]`).count(),
        1,
        `missing ${href}`,
      );
  }
  checks++;
  // Mobile menu, keyboard cancellation and touch-sized control.
  await page.setViewportSize({ width: 390, height: 844 });
  const menu = page.locator(".menu-toggle");
  await menu.click();
  await page.waitForFunction(
    () =>
      document.querySelector(".menu-toggle").getAttribute("aria-expanded") ===
      "true",
  );
  assert.equal(await menu.getAttribute("aria-expanded"), "true");
  await page.keyboard.press("Escape");
  await page.waitForFunction(
    () =>
      document.querySelector(".menu-toggle").getAttribute("aria-expanded") ===
      "false",
  );
  assert.equal(await menu.getAttribute("aria-expanded"), "false");
  assert(await menu.evaluate((el) => el === document.activeElement));
  await menu.click();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Services", exact: true })
    .click();
  await page.waitForFunction(
    () =>
      document.querySelector(".menu-toggle").getAttribute("aria-expanded") ===
      "false",
  );
  assert.equal(await menu.getAttribute("aria-expanded"), "false");
  checks += 3;
  // Package CTA selection, including clicking an already-selected package after manual changes.
  const packageLinks = page.locator("jde-pricing-block .button");
  for (const [i, id] of [
    "business-website",
    "website-improvements",
    "website-care",
  ].entries()) {
    await packageLinks.nth(i).click();
    await page.waitForFunction(
      (expected) => document.querySelector("#offer").value === expected,
      id,
    );
    checks++;
  }
  await page.locator("#offer").selectOption("business-website");
  await packageLinks.nth(2).click();
  await page.waitForFunction(
    () => document.querySelector("#offer").value === "website-care",
  );
  assert.equal(await page.locator("#offer").inputValue(), "website-care");
  checks++;
  // Inline validation and focus of invalid fields.
  await page.getByRole("button", { name: "Request my quote" }).click();
  await page.waitForFunction(
    () =>
      document.querySelector("#name").getAttribute("aria-invalid") === "true",
  );
  assert.equal(
    await page.locator("#name").getAttribute("aria-invalid"),
    "true",
  );
  assert(
    await page.locator("#name").evaluate((el) => el === document.activeElement),
  );
  await page.locator("#email").fill("invalid");
  await page.locator("#email").blur();
  await page.waitForFunction(
    () =>
      document.querySelector("#email").getAttribute("aria-invalid") === "true",
  );
  assert.equal(
    await page.locator("#email").getAttribute("aria-invalid"),
    "true",
  );
  await page.locator("#website").fill("javascript:alert(1)");
  await page.locator("#website").blur();
  await page.waitForFunction(
    () =>
      document.querySelector("#website").getAttribute("aria-invalid") ===
      "true",
  );
  assert.equal(
    await page.locator("#website").getAttribute("aria-invalid"),
    "true",
  );
  checks += 4;
  await page.locator("#name").fill("Test Person");
  await page.locator("#email").fill("test@example.com");
  await page.locator("#business").fill("Test Business");
  await page.locator("#budget").selectOption({ label: "$2,250–$3,499" });
  await page.locator("#website").fill("https://example.com");
  await page
    .locator("#description")
    .fill("A clearly labeled automated test inquiry.");
  // Missing endpoint must be recoverable and must never claim acceptance.
  await page.route("**/site-config.json", (r) =>
    r.fulfill({ json: { inquiryEndpoint: "" } }),
  );
  await page.getByRole("button", { name: "Request my quote" }).click();
  await page
    .getByText("Your inquiry could not be confirmed.", { exact: false })
    .waitFor();
  assert.equal(await page.locator("#name").inputValue(), "Test Person");
  assert.equal(await page.getByText("We’re connected.").count(), 0);
  checks += 2;
  await page.unroute("**/site-config.json");
  await page.route("**/site-config.json", (r) =>
    r.fulfill({
      json: {
        inquiryEndpoint:
          "https://test123.execute-api.us-east-1.amazonaws.com/inquiries",
      },
    }),
  );
  let requests = 0;
  let mode = "failure";
  let release;
  await page.route(
    "https://test123.execute-api.us-east-1.amazonaws.com/inquiries",
    async (r) => {
      requests++;
      assert.equal(r.request().postDataJSON().offer, "website-care");
      if (mode === "pending")
        await new Promise((resolve) => {
          release = resolve;
        });
      await r.fulfill({
        status: mode === "failure" ? 422 : 200,
        json:
          mode === "failure"
            ? { errors: [{ message: "test failure" }] }
            : { ok: true },
      });
    },
  );
  const failedResponse = page.waitForResponse(
    "https://test123.execute-api.us-east-1.amazonaws.com/inquiries",
  );
  await page.getByRole("button", { name: "Request my quote" }).click();
  await failedResponse;
  await page.waitForFunction(
    () => document.querySelector("form").getAttribute("aria-busy") === "false",
  );
  assert.equal(requests, 1);
  checks++;
  // Duplicate submission protection: hold the response and trigger another DOM submit.
  mode = "pending";
  await page.getByRole("button", { name: "Request my quote" }).click();
  await page.waitForFunction(
    () => document.querySelector("form").getAttribute("aria-busy") === "true",
  );
  await page.waitForTimeout(100);
  assert.equal(requests, 2);
  await page
    .locator("form")
    .evaluate((f) =>
      f.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true })),
    );
  assert.equal(requests, 2);
  assert(await page.getByRole("button", { name: "Sending…" }).isDisabled());
  assert.equal(await page.getByText("We’re connected.").count(), 0);
  mode = "success";
  release();
  await page.getByText("We’re connected.").waitFor();
  assert.equal(await page.locator("input").count(), 0);
  checks += 4;
  await packageLinks.nth(0).click();
  await page.locator("#name").waitFor();
  assert.equal(await page.locator("#name").inputValue(), "");
  await page.waitForFunction(
    () => document.querySelector("#offer").value === "business-website",
  );
  checks += 2;
  // Privacy routing and returning home restores canonical metadata.
  await page
    .locator("footer")
    .getByRole("link", { name: "Privacy", exact: true })
    .click();
  await page.getByRole("heading", { name: "Inquiry privacy." }).waitFor();
  assert.equal(
    await page.locator("link[rel=canonical]").getAttribute("href"),
    "https://jarvon.digital/privacy",
  );
  await page.reload();
  await page.getByRole("heading", { name: "Inquiry privacy." }).waitFor();
  await page
    .getByRole("link", { name: "Back to your inquiry", exact: false })
    .click();
  await page.locator("#inquiry").waitFor();
  assert.equal(
    await page.locator("link[rel=canonical]").getAttribute("href"),
    "https://jarvon.digital/",
  );
  checks += 3;
  // Text and layout at 200% equivalent reflow, plus accessibility media settings.
  await page.setViewportSize({ width: 720, height: 500 });
  await page.evaluate(() => (document.documentElement.style.fontSize = "200%"));
  assert(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  );
  await page.screenshot({
    path: `tmp/review/${name}-200-percent-text.png`,
    fullPage: true,
  });
  await page.evaluate(() => (document.documentElement.style.fontSize = ""));
  checks++;
  await page.emulateMedia({ reducedMotion: "reduce", contrast: "more" });
  assert.equal(
    await page
      .locator(".button")
      .first()
      .evaluate((e) => getComputedStyle(e).transitionDuration),
    "0s",
  );
  await page.screenshot({
    path: `tmp/review/${name}-accessible.png`,
    fullPage: true,
  });
  checks++;
  assert.deepEqual(errors, [], `${name} console errors`);
  await browser.close();
  console.log(`${name}: passed`);
}
console.log(
  `${checks} checks passed; provider responses mocked, no email sent.`,
);
