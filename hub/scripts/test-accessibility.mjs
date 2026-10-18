import assert from "node:assert/strict";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
const browser = await chromium.launch();
try {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
    isMobile: true,
  });
  const page = await context.newPage();
  await page.goto(process.env.TEST_BASE_URL ?? "http://127.0.0.1:4319");
  await page.locator(".menu-toggle").tap();
  await page.waitForFunction(
    () =>
      document.querySelector(".menu-toggle").getAttribute("aria-expanded") ===
      "true",
  );
  assert.deepEqual(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze()
    ).violations.map((v) => v.id),
    [],
  );
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Services", exact: true })
    .tap();
  const cdp = await context.newCDPSession(page);
  await cdp.send("Emulation.setEmulatedMedia", {
    features: [
      { name: "prefers-reduced-transparency", value: "reduce" },
      { name: "prefers-reduced-motion", value: "reduce" },
    ],
  });
  assert.equal(
    await page
      .locator(".header")
      .evaluate((el) => getComputedStyle(el).backdropFilter),
    "none",
  );
  assert.equal(
    await page
      .locator(".button")
      .first()
      .evaluate((el) => getComputedStyle(el).transitionDuration),
    "0s",
  );
  await page
    .locator("footer")
    .getByRole("link", { name: "Privacy", exact: true })
    .tap();
  await page.getByRole("heading", { name: "Inquiry privacy." }).waitFor();
  assert.deepEqual(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze()
    ).violations.map((v) => v.id),
    [],
  );
  console.log(
    "Touch menu/navigation, reduced transparency/motion, mobile menu and privacy accessibility checks passed.",
  );
} finally {
  await browser.close();
}
