import {createHotContext as __vite__createHotContext, injectQuery as __vite__injectQuery} from "/@vite/client";
import {
  bootstrapApplication
} from "/@fs/Volumes/JarVons Drive 2.0/JarVonDigital/Business Projects/central/hub/.angular/cache/20.1.5/hub/vite/deps/@angular_platform-browser.js?v=5e1b6620";

// src/app/app.config.ts
// src/app/app.ts
// src/app/components/nav/nav.ts
// dist/ui/fesm2022/ui.mjs
// src/app/app.ts
import * as i0
  from "/@fs/Volumes/JarVons Drive 2.0/JarVonDigital/Business Projects/central/hub/.angular/cache/20.1.5/hub/vite/deps/@angular_core.js?v=5e1b6620";
import * as i02
  from "/@fs/Volumes/JarVons Drive 2.0/JarVonDigital/Business Projects/central/hub/.angular/cache/20.1.5/hub/vite/deps/@angular_core.js?v=5e1b6620";
import * as i03
  from "/@fs/Volumes/JarVons Drive 2.0/JarVonDigital/Business Projects/central/hub/.angular/cache/20.1.5/hub/vite/deps/@angular_core.js?v=5e1b6620";
import {
  Component as Component3,
  Component,
  Component as Component2,
  computed,
  effect,
  input,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  signal,
  signal as signal2
} from "/@fs/Volumes/JarVons Drive 2.0/JarVonDigital/Business Projects/central/hub/.angular/cache/20.1.5/hub/vite/deps/@angular_core.js?v=5e1b6620";
import {
  provideRouter,
  RouterLink
} from "/@fs/Volumes/JarVons Drive 2.0/JarVonDigital/Business Projects/central/hub/.angular/cache/20.1.5/hub/vite/deps/@angular_router.js?v=5e1b6620";
// src/app/app.config.ts
import {
  providePrimeNG
} from "/@fs/Volumes/JarVons Drive 2.0/JarVonDigital/Business Projects/central/hub/.angular/cache/20.1.5/hub/vite/deps/primeng_config.js?v=5e1b6620";
import {
  provideAnimationsAsync
} from "/@fs/Volumes/JarVons Drive 2.0/JarVonDigital/Business Projects/central/hub/.angular/cache/20.1.5/hub/vite/deps/@angular_platform-browser_animations_async.js?v=5e1b6620";

// src/app/styles/preset.ts
import {
  definePreset
} from "/@fs/Volumes/JarVons Drive 2.0/JarVonDigital/Business Projects/central/hub/.angular/cache/20.1.5/hub/vite/deps/@primeuix_themes.js?v=5e1b6620";
import Aura
  from "/@fs/Volumes/JarVons Drive 2.0/JarVonDigital/Business Projects/central/hub/.angular/cache/20.1.5/hub/vite/deps/@primeuix_themes_aura.js?v=5e1b6620";
import {
  Button
} from "/@fs/Volumes/JarVons Drive 2.0/JarVonDigital/Business Projects/central/hub/.angular/cache/20.1.5/hub/vite/deps/primeng_button.js?v=5e1b6620";
import {
  Drawer
} from "/@fs/Volumes/JarVons Drive 2.0/JarVonDigital/Business Projects/central/hub/.angular/cache/20.1.5/hub/vite/deps/primeng_drawer.js?v=5e1b6620";
import {
  Menu
} from "/@fs/Volumes/JarVons Drive 2.0/JarVonDigital/Business Projects/central/hub/.angular/cache/20.1.5/hub/vite/deps/primeng_menu.js?v=5e1b6620";
// src/app/app.ts
import {
  Card
} from "/@fs/Volumes/JarVons Drive 2.0/JarVonDigital/Business Projects/central/hub/.angular/cache/20.1.5/hub/vite/deps/primeng_card.js?v=5e1b6620";
import {
  SelectButton
} from "/@fs/Volumes/JarVons Drive 2.0/JarVonDigital/Business Projects/central/hub/.angular/cache/20.1.5/hub/vite/deps/primeng_selectbutton.js?v=5e1b6620";
import * as i1
  from "/@fs/Volumes/JarVons Drive 2.0/JarVonDigital/Business Projects/central/hub/.angular/cache/20.1.5/hub/vite/deps/@angular_forms.js?v=5e1b6620";
import {
  FormsModule
} from "/@fs/Volumes/JarVons Drive 2.0/JarVonDigital/Business Projects/central/hub/.angular/cache/20.1.5/hub/vite/deps/@angular_forms.js?v=5e1b6620";

import.meta.hot = __vite__createHotContext("/main.js");// src/main.ts

// src/app/app.routes.ts
var routes = [];

var primary = {
  0: "#6BFFFF",
  50: "#5EFFFF",
  100: "#51FFFF",
  200: "#44E0FF",
  300: "#37B6FF",
  400: "#2FA0FF",
  500: "#2B8CFC",
  600: "#2474D1",
  700: "#1D5CA6",
  800: "#16447B",
  900: "#0F2C50",
  950: "#081425"
};
var secondary = {
  0: "#FFFFFF",
  50: "#FFFFFF",
  100: "#F7FFE7",
  200: "#D0FFC3",
  300: "#A9DB9E",
  400: "#8FB986",
  500: "#82A97A",
  600: "#6E8F67",
  700: "#5B7655",
  800: "#475C43",
  900: "#344330",
  950: "#202A1E"
};
var MyPreset = definePreset(Aura, {
  // main brand color (tawny)
  semantic: {
    primary,
    secondary
  },
  components: {
    inputtext: {
      root: {
        background: secondary[0],
        color: secondary[800],
        borderRadius: "1rem",
        filledBackground: secondary[0],
        placeholderColor: primary[800]
      }
    },
    card: {
      root: {
        background: primary[700],
        borderRadius: "1rem"
      }
    },
    menubar: {
      item: {
        color: secondary[0],
        icon: {
          color: secondary[0],
          focusColor: secondary[300]
        },
        focusBackground: primary[400],
        focusColor: secondary[0]
      }
    },
    drawer: {
      root: {
        background: primary[600]
      }
    }
  }
});

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkMode: false
        }
      }
    })
  ]
};

function Nav_For_7_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275element(0, "p-button", 5);
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    i0.\u0275\u0275property("icon", link_r1.icon)("routerLink", link_r1.routerLink)("label", link_r1.label);
  }
}

var Nav = class _Nav {
  $isDrawerVisible = signal(false, ...ngDevMode ? [{debugName: "$isDrawerVisible"}] : []);
  items = [
    {
      label: "Services",
      icon: "pi pi-desktop"
    },
    {
      label: "Get Started",
      icon: "pi pi-send"
    }
  ];
  static \u0275fac = function Nav_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Nav)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({
    type: _Nav,
    selectors: [["app-nav"]],
    decls: 14,
    vars: 3,
    consts: [[1, "menu-mobile-icon"], ["rounded", "", "severity", "primary", "icon", "pi pi-bars", 3, "click"], [1, "menu-logo"], [1, "logo"], [1, "menu-links"], ["size", "large", "severity", "primary", 3, "icon", "routerLink", "label"], [1, "menu-end"], [1, "search"], ["rounded", "", "severity", "primary", "icon", "pi pi-search"], ["rounded", "", "severity", "primary", "icon", "pi pi-lock"], ["position", "left", 3, "visibleChange", "visible", "blockScroll"], ["styleClass", "drawer-menu", 3, "model"]],
    template: function Nav_Template(rf, ctx) {
      if (rf & 1) {
        i0.\u0275\u0275elementStart(0, "div", 0)(1, "p-button", 1);
        i0.\u0275\u0275listener("click", function Nav_Template_p_button_click_1_listener() {
          return ctx.$isDrawerVisible.set(true);
        });
        i0.\u0275\u0275elementEnd()();
        i0.\u0275\u0275elementStart(2, "div", 2)(3, "h2", 3);
        i0.\u0275\u0275text(4, "JarVonDigital LLC");
        i0.\u0275\u0275elementEnd()();
        i0.\u0275\u0275elementStart(5, "div", 4);
        i0.\u0275\u0275repeaterCreate(6, Nav_For_7_Template, 1, 3, "p-button", 5, i0.\u0275\u0275repeaterTrackByIdentity);
        i0.\u0275\u0275elementEnd();
        i0.\u0275\u0275elementStart(8, "div", 6)(9, "div", 7);
        i0.\u0275\u0275element(10, "p-button", 8)(11, "p-button", 9);
        i0.\u0275\u0275elementEnd()();
        i0.\u0275\u0275elementStart(12, "p-drawer", 10);
        i0.\u0275\u0275twoWayListener("visibleChange", function Nav_Template_p_drawer_visibleChange_12_listener($event) {
          i0.\u0275\u0275twoWayBindingSet(ctx.$isDrawerVisible, $event) || (ctx.$isDrawerVisible = $event);
          return $event;
        });
        i0.\u0275\u0275element(13, "p-menu", 11);
        i0.\u0275\u0275elementEnd();
      }
      if (rf & 2) {
        i0.\u0275\u0275advance(6);
        i0.\u0275\u0275repeater(ctx.items);
        i0.\u0275\u0275advance(6);
        i0.\u0275\u0275twoWayProperty("visible", ctx.$isDrawerVisible);
        i0.\u0275\u0275property("blockScroll", true);
        i0.\u0275\u0275advance();
        i0.\u0275\u0275property("model", ctx.items);
      }
    },
    dependencies: [
      Button,
      RouterLink,
      Drawer,
      Menu
    ],
    styles: ["\n\n[_nghost-%COMP%] {\n  top: 0;\n  position: fixed;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 4rem;\n  width: 100%;\n  padding: 0 1rem;\n  background: rgba(43, 140, 252, 0.7);\n  -webkit-backdrop-filter: blur(2rem);\n  backdrop-filter: blur(2rem);\n  border: none;\n  border-radius: 0;\n  font-size: 1.4rem;\n  font-weight: 500;\n  --p-button-primary-color: white;\n  --p-button-primary-hover-color: var(--p-secondary-200);\n  --logo-font-size: 2rem;\n}\n[_nghost-%COMP%]   .menu-mobile-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .menu-logo[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n}\n[_nghost-%COMP%]   .menu-logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: var(--logo-font-size);\n  margin: 0.5rem 2rem 0.5rem 0.5rem;\n}\n[_nghost-%COMP%]   .menu-links[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  gap: 1rem;\n  --p-button-primary-background: transparent;\n  --p-button-primary-hover-background: var(--p-primary-400);\n  --p-button-primary-border-color: transparent;\n  --p-button-primary-hover-border-color: transparent;\n  --p-button-border-radius: 2rem;\n  --p-button-lg-padding-y: .5rem;\n  --p-button-lg-padding-x: .7rem;\n  --p-button-gap: .8rem;\n  --p-button-lg-font-size: 1.3rem;\n  --p-button-label-font-weight: 500;\n}\n[_nghost-%COMP%]   .menu-links[_ngcontent-%COMP%]     .p-button-icon {\n  --p-button-lg-font-size: 1rem;\n}\n[_nghost-%COMP%]   .search[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin: 0 0.5rem;\n}\n[_nghost-%COMP%]   .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 15rem;\n  font-size: 1.2rem;\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    --logo-font-size: 1.6rem;\n  }\n  [_nghost-%COMP%]   .menu-mobile-icon[_ngcontent-%COMP%] {\n    display: block;\n  }\n  [_nghost-%COMP%]   .menu-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n  [_nghost-%COMP%]   .menu-logo[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=nav.css.map */"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(Nav, [{
    type: Component,
    args: [{
      selector: "app-nav",
      imports: [
        Button,
        RouterLink,
        Drawer,
        Menu
      ],
      template: '<div class="menu-mobile-icon">\n  <p-button\n    rounded\n    severity="primary"\n    icon="pi pi-bars" (click)="$isDrawerVisible.set(true)"/>\n</div>\n\n<div class="menu-logo">\n  <h2 class="logo">JarVonDigital LLC</h2>\n</div>\n\n<div class="menu-links">\n  @for (link of items; track link) {\n    <p-button\n      size="large"\n      severity="primary"\n      [icon]="link.icon"\n      [routerLink]="link.routerLink"\n      [label]="link.label"/>\n  }\n</div>\n\n<div class="menu-end">\n  <div class="search">\n    <!--      <input pInputText placeholder="Have a question?" type="text">-->\n    <p-button rounded severity="primary" icon="pi pi-search"></p-button>\n    <p-button\n      rounded\n      severity="primary"\n      icon="pi pi-lock">\n    </p-button>\n  </div>\n</div>\n\n\n<p-drawer\n  [(visible)]="$isDrawerVisible"\n  [blockScroll]="true"\n  position="left">\n  <p-menu\n    [model]="items" styleClass="drawer-menu"></p-menu>\n\n</p-drawer>\n',
      styles: ["/* src/app/components/nav/nav.scss */\n:host {\n  top: 0;\n  position: fixed;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 4rem;\n  width: 100%;\n  padding: 0 1rem;\n  background: rgba(43, 140, 252, 0.7);\n  -webkit-backdrop-filter: blur(2rem);\n  backdrop-filter: blur(2rem);\n  border: none;\n  border-radius: 0;\n  font-size: 1.4rem;\n  font-weight: 500;\n  --p-button-primary-color: white;\n  --p-button-primary-hover-color: var(--p-secondary-200);\n  --logo-font-size: 2rem;\n}\n:host .menu-mobile-icon {\n  display: none;\n}\n:host .menu-logo {\n  margin: 0 1rem;\n}\n:host .menu-logo h2 {\n  font-weight: 400;\n  font-size: var(--logo-font-size);\n  margin: 0.5rem 2rem 0.5rem 0.5rem;\n}\n:host .menu-links {\n  flex: 1;\n  display: flex;\n  gap: 1rem;\n  --p-button-primary-background: transparent;\n  --p-button-primary-hover-background: var(--p-primary-400);\n  --p-button-primary-border-color: transparent;\n  --p-button-primary-hover-border-color: transparent;\n  --p-button-border-radius: 2rem;\n  --p-button-lg-padding-y: .5rem;\n  --p-button-lg-padding-x: .7rem;\n  --p-button-gap: .8rem;\n  --p-button-lg-font-size: 1.3rem;\n  --p-button-label-font-weight: 500;\n}\n:host .menu-links ::ng-deep .p-button-icon {\n  --p-button-lg-font-size: 1rem;\n}\n:host .search {\n  display: flex;\n  gap: 1rem;\n  margin: 0 0.5rem;\n}\n:host .search input {\n  width: 15rem;\n  font-size: 1.2rem;\n}\n@media screen and (max-width: 768px) {\n  :host {\n    --logo-font-size: 1.6rem;\n  }\n  :host .menu-mobile-icon {\n    display: block;\n  }\n  :host .menu-links {\n    display: none;\n  }\n  :host .menu-logo {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=nav.css.map */\n"]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(Nav, {
    className: "Nav",
    filePath: "src/app/components/nav/nav.ts",
    lineNumber: 19
  });
})();
(() => {
  const id = "src%2Fapp%2Fcomponents%2Fnav%2Fnav.ts%40Nav";

  function Nav_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i0.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
      ).then((m) => m.default && i0.\u0275\u0275replaceMetadata(Nav, m.default, [i0], [Button, RouterLink, Drawer, Menu, Component], import.meta, id));
  }

  (typeof ngDevMode === "undefined" || ngDevMode) && Nav_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && Nav_HmrLoad(d.timestamp)));
})();

var _c0 = (a0) => ({
  tier: true,
  center: a0
});

function PricingBlock_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i02.\u0275\u0275getCurrentView();
    i02.\u0275\u0275elementStart(0, "p-select-button", 3);
    i02.\u0275\u0275listener("ngModelChange", function PricingBlock_Conditional_1_Conditional_7_Template_p_select_button_ngModelChange_0_listener($event) {
      i02.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i02.\u0275\u0275nextContext(2);
      return i02.\u0275\u0275resetView(ctx_r1.onAlternativeChange($event));
    });
    i02.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = i02.\u0275\u0275nextContext(2);
    const alternative_r3 = i02.\u0275\u0275readContextLet(0);
    i02.\u0275\u0275property("ngModel", alternative_r3.id)("options", ctx_r1.alternatives())("unselectable", false);
  }
}

function PricingBlock_Conditional_1_For_10_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "li");
    i02.\u0275\u0275text(1);
    i02.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i02.\u0275\u0275advance();
    i02.\u0275\u0275textInterpolate(item_r4);
  }
}

function PricingBlock_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "div")(1, "div", 1);
    i02.\u0275\u0275element(2, "i");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(3, "h2");
    i02.\u0275\u0275text(4);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(5, "h4");
    i02.\u0275\u0275text(6);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275conditionalCreate(7, PricingBlock_Conditional_1_Conditional_7_Template, 1, 3, "p-select-button", 2);
    i02.\u0275\u0275elementStart(8, "ul");
    i02.\u0275\u0275repeaterCreate(9, PricingBlock_Conditional_1_For_10_Template, 2, 1, "li", null, i02.\u0275\u0275repeaterTrackByIdentity);
    i02.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = i02.\u0275\u0275nextContext();
    const alternative_r3 = i02.\u0275\u0275readContextLet(0);
    const styles_r5 = i02.\u0275\u0275pureFunction1(7, _c0, alternative_r3.isRecommended);
    i02.\u0275\u0275classMap(styles_r5);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275classMap(alternative_r3.icon);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(alternative_r3.blockTitle);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(alternative_r3.blockDescription);
    i02.\u0275\u0275advance();
    i02.\u0275\u0275conditional(ctx_r1.alternatives().length > 1 ? 7 : -1);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275repeater(alternative_r3.blockOptions);
  }
}

var _forTrack0 = ($index, $item) => $item.blockTitle;

function Pricing_For_1_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275element(0, "jde-pricing-block", 0);
  }
  if (rf & 2) {
    const block_r1 = ctx.$implicit;
    i02.\u0275\u0275property("block", block_r1);
  }
}

var PricingBlock = class _PricingBlock {
  block = input.required(...ngDevMode ? [{
    debugName: "block"
  }] : []);
  alternatives = computed(() => [this.block(), ...this.block().alternatives ?? []], ...ngDevMode ? [{
    debugName: "alternatives"
  }] : []);
  selectedAlternative = signal2(void 0, ...ngDevMode ? [{
    debugName: "selectedAlternative"
  }] : []);
  $initialBlockSetupEffect = effect(() => {
    if (this.block()) {
      this.selectedAlternative.set(this.block());
    }
  }, ...ngDevMode ? [{
    debugName: "$initialBlockSetupEffect"
  }] : []);

  onAlternativeChange($event) {
    this.selectedAlternative.set(this.alternatives().find((b) => b.id === $event));
  }

  static \u0275fac = function PricingBlock_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PricingBlock)();
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({
    type: _PricingBlock,
    selectors: [["jde-pricing-block"]],
    inputs: {
      block: [1, "block"]
    },
    decls: 2,
    vars: 2,
    consts: [[3, "class"], [1, "icon"], ["optionLabel", "id", "optionValue", "id", 3, "ngModel", "options", "unselectable"], ["optionLabel", "id", "optionValue", "id", 3, "ngModelChange", "ngModel", "options", "unselectable"]],
    template: function PricingBlock_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275declareLet(0);
        i02.\u0275\u0275conditionalCreate(1, PricingBlock_Conditional_1_Template, 11, 9, "div", 0);
      }
      if (rf & 2) {
        const alternative_r6 = i02.\u0275\u0275storeLet(ctx.selectedAlternative());
        i02.\u0275\u0275advance();
        i02.\u0275\u0275conditional(alternative_r6 ? 1 : -1);
      }
    },
    dependencies: [SelectButton, FormsModule, i1.NgControlStatus, i1.NgModel],
    styles: [".tier[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;position:relative;align-items:center;justify-content:flex-start;min-height:60vh;max-width:30rem;color:var(--p-primary-950);background-color:var(--p-secondary-100);border:.5rem solid var(--p-secondary-400);border-bottom:none;transition:all .3s cubic-bezier(.2,.7,.2,1)}.tier[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{top:-3.5rem;display:flex;align-items:center;justify-content:center;position:relative;margin-bottom:-4rem;height:7rem;width:7rem;border-radius:7rem;background:var(--p-secondary-400);color:#fff}.tier[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:2.4rem}.tier[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;margin:2rem 1rem 0}.tier[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 4rem 1rem;text-align:center}.tier[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none;width:100%}.tier[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{text-align:center;padding:.5rem .2rem;margin:0 3rem;font-size:1.2rem;border-bottom:1px solid var(--p-secondary-400)}.tier[_ngcontent-%COMP%]:first-of-type, .tier[_ngcontent-%COMP%]:last-of-type{z-index:0;max-width:25rem}.tier[_ngcontent-%COMP%]:first-of-type   h2[_ngcontent-%COMP%], .tier[_ngcontent-%COMP%]:last-of-type   h2[_ngcontent-%COMP%]{font-size:2rem}.tier[_ngcontent-%COMP%]:first-of-type{border-right:none}.tier[_ngcontent-%COMP%]:last-of-type{border-left:none}.tier.center[_ngcontent-%COMP%]{min-height:75vh;min-width:15rem;color:var(--p-primary-800);border-top:none;border-bottom:none;background-color:var(--p-secondary-300);z-index:1}@media screen and (max-width: 768px){.tier[_ngcontent-%COMP%]{flex:1;max-width:unset!important;width:100%;height:auto;padding:2rem 0;border:none}.tier[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{top:0;position:unset;margin:0 0 2rem;height:4rem;width:4rem}.tier[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.6rem}.tier[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0}.tier[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{min-height:unset;max-width:unset;justify-content:unset}}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(PricingBlock, [{
    type: Component2,
    args: [{
      selector: "jde-pricing-block",
      imports: [SelectButton, FormsModule],
      template: '@let alternative = selectedAlternative();\n\n@if (alternative) {\n  @let styles = {tier: true, center: alternative.isRecommended};\n  <div [class]="styles">\n    <div class="icon">\n      <i [class]="alternative.icon"></i>\n    </div>\n\n    <h2>{{alternative.blockTitle}}</h2>\n    <h4>{{alternative.blockDescription}}</h4>\n\n    @if(alternatives().length > 1) {\n      <p-select-button\n        [ngModel]="alternative.id"\n        (ngModelChange)="onAlternativeChange($event)"\n        [options]="alternatives()"\n        [unselectable]="false"\n        optionLabel="id"\n        optionValue="id">\n      </p-select-button>\n    }\n\n\n    <ul>\n      @for (item of alternative.blockOptions; track item) {\n        <li>{{item}}</li>\n      }\n    </ul>\n  </div>\n}\n\n',
      styles: [".tier{flex:1;display:flex;flex-direction:column;position:relative;align-items:center;justify-content:flex-start;min-height:60vh;max-width:30rem;color:var(--p-primary-950);background-color:var(--p-secondary-100);border:.5rem solid var(--p-secondary-400);border-bottom:none;transition:all .3s cubic-bezier(.2,.7,.2,1)}.tier .icon{top:-3.5rem;display:flex;align-items:center;justify-content:center;position:relative;margin-bottom:-4rem;height:7rem;width:7rem;border-radius:7rem;background:var(--p-secondary-400);color:#fff}.tier .icon i{font-size:2.4rem}.tier h2{font-size:2.5rem;margin:2rem 1rem 0}.tier h4{margin:0 4rem 1rem;text-align:center}.tier ul{margin:0;padding:0;list-style:none;width:100%}.tier ul li{text-align:center;padding:.5rem .2rem;margin:0 3rem;font-size:1.2rem;border-bottom:1px solid var(--p-secondary-400)}.tier:first-of-type,.tier:last-of-type{z-index:0;max-width:25rem}.tier:first-of-type h2,.tier:last-of-type h2{font-size:2rem}.tier:first-of-type{border-right:none}.tier:last-of-type{border-left:none}.tier.center{min-height:75vh;min-width:15rem;color:var(--p-primary-800);border-top:none;border-bottom:none;background-color:var(--p-secondary-300);z-index:1}@media screen and (max-width: 768px){.tier{flex:1;max-width:unset!important;width:100%;height:auto;padding:2rem 0;border:none}.tier .icon{top:0;position:unset;margin:0 0 2rem;height:4rem;width:4rem}.tier .icon i{font-size:1.6rem}.tier h2{margin-top:0}.tier .center{min-height:unset;max-width:unset;justify-content:unset}}\n"]
    }]
  }], null, null);
})();
var Pricing = class _Pricing {
  blocks = input.required(...ngDevMode ? [{
    debugName: "blocks"
  }] : []);
  static \u0275fac = function Pricing_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Pricing)();
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({
    type: _Pricing,
    selectors: [["jde-pricing"]],
    inputs: {
      blocks: [1, "blocks"]
    },
    decls: 2,
    vars: 0,
    consts: [[3, "block"]],
    template: function Pricing_Template(rf, ctx) {
      if (rf & 1) {
        i02.\u0275\u0275repeaterCreate(0, Pricing_For_1_Template, 1, 1, "jde-pricing-block", 0, _forTrack0);
      }
      if (rf & 2) {
        i02.\u0275\u0275repeater(ctx.blocks());
      }
    },
    dependencies: [PricingBlock],
    styles: ["[_nghost-%COMP%]{position:relative;display:flex;height:100vh;padding:5rem 0;width:100%;align-items:flex-end;justify-content:center;background:var(--p-secondary-400)}@media screen and (max-width: 768px){[_nghost-%COMP%]{flex-direction:column;min-height:unset;max-width:unset;height:unset;padding:0}}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(Pricing, [{
    type: Component2,
    args: [{
      selector: "jde-pricing",
      imports: [PricingBlock],
      template: '@for (block of blocks(); track block.blockTitle) {\n  <jde-pricing-block [block]="block"></jde-pricing-block>\n}\n',
      styles: [":host{position:relative;display:flex;height:100vh;padding:5rem 0;width:100%;align-items:flex-end;justify-content:center;background:var(--p-secondary-400)}@media screen and (max-width: 768px){:host{flex-direction:column;min-height:unset;max-width:unset;height:unset;padding:0}}\n"]
    }]
  }], null, null);
})();

function App_For_5_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "p-card")(1, "div", 9)(2, "div", 10)(3, "div", 11)(4, "h3");
    i03.\u0275\u0275text(5);
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(6, "p");
    i03.\u0275\u0275text(7);
    i03.\u0275\u0275elementEnd()();
    i03.\u0275\u0275element(8, "div", 12);
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(9, "div", 13);
    i03.\u0275\u0275element(10, "img", 14);
    i03.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    i03.\u0275\u0275advance(5);
    i03.\u0275\u0275textInterpolate(service_r1.mission);
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275textInterpolate(service_r1.statement);
    i03.\u0275\u0275advance(3);
    i03.\u0275\u0275property("src", service_r1.bgImage, i03.\u0275\u0275sanitizeUrl);
  }
}

var App = class _App {
  services = [
    {
      bgImage: "animated-typing.jpg",
      mission: "Custom Web Design",
      statement: "We create professional, mobile-friendly websites designed to showcase your brand and attract your ideal customers. Every site is built with user experience, speed, and SEO best practices in mind. From concept to launch, we ensure your website looks great and performs even better."
    },
    {
      bgImage: "animated-revenue.jpg",
      mission: "Boost Visibility & Revenue",
      statement: "Our proven strategies help your business rank higher on search engines, reach more customers, and increase conversions. We combine targeted SEO, engaging content, and digital marketing to grow your brand awareness. The result is a stronger online presence that drives real profit growth."
    },
    {
      bgImage: "animated-solutions.jpg",
      mission: "Smart Software Solutions",
      statement: "We identify, customize, and integrate software that makes your business run more efficiently. By choosing tools that fit your unique workflow, we help you save time and reduce costs. Our goal is to ensure your technology works for you, not the other way around."
    },
    {
      bgImage: "animated-help.jpg",
      mission: "Reliable Ongoing Support",
      statement: "We provide continuous website maintenance, updates, and troubleshooting to keep your business running smoothly. Whether you need quick fixes or long-term digital guidance, we\u2019re here to help. You can count on us as your trusted partner for dependable online support."
    }
  ];
  /**
   * Represents an array of pricing plans for a service, where each item defines
   * details about a specific tier of the pricing model, along with its features and characteristics.
   *
   * @typedef {Object} PricingStruct
   * @property {string} icon - The icon identifier associated with the pricing block.
   * @property {boolean} [isRecommended] - Indicates if the pricing tier is recommended (optional).
   * @property {string} blockTitle - The title of the pricing block, including the tier name and price.
   * @property {string} blockDescription - A short description or summary of the pricing tier.
   * @property {string[]} blockOptions - A list of features or services included in the pricing tier.
   *
   * @type {PricingStruct[]}
   */
  pricingBlocks = [
    {
      id: "Basic IT",
      icon: "pi pi-plus",
      blockTitle: "Basic \u2013 $250/mo",
      blockDescription: "Perfect for businesses that need occasional help.",
      blockOptions: [
        "Up to 4 hours of support per month",
        "48-hour guaranteed response time",
        "Website content updates & minor fixes",
        "Basic SaaS troubleshooting",
        "Email & chat support during business hours"
      ],
      alternatives: [
        {
          id: "Web Basic",
          icon: "pi pi-plus",
          blockTitle: "Web Basic - $150/mo",
          blockDescription: "For small businesses that just need their site kept fresh.",
          isRecommended: false,
          blockOptions: [
            "Up to 2 hours of monthly updates",
            "Monthly security & plugin updates",
            "Website backups & uptime monitoring",
            "Minor content changes (text/images)"
          ]
        }
      ]
    },
    {
      id: "Pro IT",
      icon: "pi pi-star",
      isRecommended: true,
      blockTitle: "Pro \u2013 $500/mo",
      blockDescription: "Ideal for growing businesses with regular tech needs.",
      blockOptions: [
        "Up to 10 hours of support per month",
        "24-hour guaranteed response time",
        "Website updates & feature additions",
        "SaaS setup & integrations",
        "Ongoing security monitoring",
        "Priority email & phone support"
      ],
      alternatives: [
        {
          id: "Web Plus",
          icon: "pi pi-star",
          blockTitle: "Web Plus - $300/mo",
          blockDescription: "For businesses that want consistent improvements.",
          isRecommended: true,
          // Most Popular
          blockOptions: [
            "Up to 5 hours of updates per month",
            "Security, backups & uptime monitoring",
            "Monthly SEO checks & optimization tweaks",
            "Speed/performance optimization",
            "Priority response (24 hrs)"
          ]
        }
      ]
    },
    {
      id: "Elite IT",
      icon: "pi pi-plus",
      blockTitle: "Elite \u2013 $1,000/mo",
      blockDescription: "Full coverage for businesses that need fast, unlimited help.",
      blockOptions: [
        "Unlimited requests within scope",
        "4-hour guaranteed response time",
        "Quarterly technology strategy session",
        "Comprehensive security & performance monitoring",
        "All Pro features included"
      ],
      alternatives: [
        {
          id: "Web Premium",
          icon: "pi pi-plus",
          blockTitle: "Web Premium - $600/mo",
          blockDescription: "For businesses that treat their website as a true growth engine.",
          isRecommended: false,
          blockOptions: [
            "Up to 12 hours of updates per month",
            "Everything in Plus",
            "Monthly analytics & reporting",
            "Conversion optimization (CTAs, landing pages, funnels)",
            "Priority scheduling for urgent fixes"
          ]
        }
      ]
    }
  ];
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({
    type: _App,
    selectors: [["app-root"]],
    decls: 23,
    vars: 1,
    consts: [[1, "main-image"], ["src", "main-photo.jpg", "alt", ""], [1, "services"], [1, "selling-point"], [1, "panel"], ["src", "image-call-guy.jpg", "alt", ""], [1, "selling-point", "r"], ["src", "group-coding.jpg", "alt", ""], [3, "blocks"], [1, "content"], [1, "details"], [1, "inner"], [1, "detail-bg-image"], [1, "bg-image"], ["alt", "", 3, "src"]],
    template: function App_Template(rf, ctx) {
      if (rf & 1) {
        i03.\u0275\u0275element(0, "app-nav");
        i03.\u0275\u0275elementStart(1, "div", 0);
        i03.\u0275\u0275element(2, "img", 1);
        i03.\u0275\u0275elementEnd();
        i03.\u0275\u0275elementStart(3, "div", 2);
        i03.\u0275\u0275repeaterCreate(4, App_For_5_Template, 11, 3, "p-card", null, i03.\u0275\u0275repeaterTrackByIdentity);
        i03.\u0275\u0275elementEnd();
        i03.\u0275\u0275elementStart(6, "div", 3)(7, "div", 4)(8, "h2");
        i03.\u0275\u0275text(9, "No Downtime. No Hassle. No Overhead.");
        i03.\u0275\u0275elementEnd();
        i03.\u0275\u0275elementStart(10, "p");
        i03.\u0275\u0275text(11, "Technology issues don\u2019t wait \u2014 and neither should you. Our On-Demand Support gives your business instant access to expert help for anything from website updates and SaaS troubleshooting to software integrations and performance optimization. No hiring, no payroll, no long-term contracts \u2014 just fast, reliable problem-solving exactly when you need it. Keep your systems running, your team productive, and your customers happy without the cost of a full-time IT staff.");
        i03.\u0275\u0275elementEnd()();
        i03.\u0275\u0275elementStart(12, "div", 4);
        i03.\u0275\u0275element(13, "img", 5);
        i03.\u0275\u0275elementEnd()();
        i03.\u0275\u0275elementStart(14, "div", 6)(15, "div", 4)(16, "h2");
        i03.\u0275\u0275text(17, "Web Design With a Purpose.");
        i03.\u0275\u0275elementEnd();
        i03.\u0275\u0275elementStart(18, "p");
        i03.\u0275\u0275text(19, " Your website should do more than look good \u2014 it should attract customers, build trust, and drive sales. We create fast, secure, mobile-friendly websites tailored to your brand and goals, with clear navigation, compelling visuals, and a smooth user experience that keeps visitors engaged. Designed to grow with your business, your site will be easy to manage and ready to deliver results from day one. ");
        i03.\u0275\u0275elementEnd()();
        i03.\u0275\u0275elementStart(20, "div", 4);
        i03.\u0275\u0275element(21, "img", 7);
        i03.\u0275\u0275elementEnd()();
        i03.\u0275\u0275element(22, "jde-pricing", 8);
      }
      if (rf & 2) {
        i03.\u0275\u0275advance(4);
        i03.\u0275\u0275repeater(ctx.services);
        i03.\u0275\u0275advance(18);
        i03.\u0275\u0275property("blocks", ctx.pricingBlocks);
      }
    },
    dependencies: [Nav, Card, Pricing],
    styles: ["\n\n[_nghost-%COMP%] {\n  --main-image-height: 100vh;\n  --gap: 7rem;\n  --card-width: calc(50% - var(--gap));\n  --header-text-size: 2.3rem;\n  --panel-standard-flex-direction: row;\n  --panel-reverse-flex-direction: row-reverse;\n}\n[_nghost-%COMP%]   .main-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: var(--main-image-height);\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .main-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n[_nghost-%COMP%]   .services[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: var(--gap);\n  margin: var(--gap);\n  overflow: auto;\n}\n[_nghost-%COMP%]   .services[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%] {\n  flex: var(--card-width);\n  max-width: var(--card-width);\n  min-width: var(--card-width);\n  overflow: hidden;\n  --p-card-body-padding: 0;\n}\n[_nghost-%COMP%]   .services[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 350px;\n  width: 100%;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .services[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  bottom: 0;\n  position: absolute;\n  height: 80%;\n  width: inherit;\n  display: flex;\n  flex-direction: column;\n  -webkit-backdrop-filter: blur(0rem);\n  backdrop-filter: blur(0rem);\n  border-radius: 0.8rem;\n  transform: translateY(calc(100% - 4rem));\n  transition: all 0.3s cubic-bezier(0.2, 0.7, 0.2, 1);\n  overflow: hidden;\n  z-index: 2;\n}\n[_nghost-%COMP%]   .services[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n  color: var(--p-primary-400);\n  z-index: 1;\n}\n[_nghost-%COMP%]   .services[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: 0 1rem;\n  height: 4rem;\n  font-size: var(--header-text-size);\n  border-radius: 0.8rem;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .services[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0 2rem 1rem 2rem;\n  padding-top: 0.5rem;\n  font-size: 1.2rem;\n  font-weight: 700;\n  border-top: 1px solid white;\n  color: rgb(90, 90, 90);\n  transform: translateY(30%);\n  transition: all 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);\n  animation-delay: 1s;\n}\n[_nghost-%COMP%]   .services[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .detail-bg-image[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: inherit;\n  background: rgb(255, 255, 255);\n  transition: all 0.3s ease-in-out;\n  opacity: 0.8;\n  z-index: 0;\n}\n[_nghost-%COMP%]   .services[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .bg-image[_ngcontent-%COMP%] {\n  height: inherit;\n  width: inherit;\n  position: absolute;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  z-index: 0;\n}\n[_nghost-%COMP%]   .services[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .bg-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n[_nghost-%COMP%]   .services[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:hover   .details[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(2rem);\n  backdrop-filter: blur(2rem);\n  transform: translateY(0);\n}\n[_nghost-%COMP%]   .services[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:hover   .details[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n[_nghost-%COMP%]   .services[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:hover   .details[_ngcontent-%COMP%]   .detail-bg-image[_ngcontent-%COMP%] {\n  background: rgb(255, 255, 255);\n  opacity: 0.6;\n}\n[_nghost-%COMP%]   .selling-point[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 8rem 4rem;\n  flex-direction: var(--panel-standard-flex-direction);\n  gap: 8rem;\n  background: var(--p-primary-600);\n}\n[_nghost-%COMP%]   .selling-point.r[_ngcontent-%COMP%] {\n  flex-direction: var(--panel-reverse-flex-direction);\n  background: var(--p-secondary-700);\n}\n[_nghost-%COMP%]   .selling-point.r[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  text-align: right;\n}\n[_nghost-%COMP%]   .selling-point[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  height: 25rem;\n  border-radius: 2rem;\n  overflow: visible;\n}\n[_nghost-%COMP%]   .selling-point[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  font-size: 2.7rem;\n}\n[_nghost-%COMP%]   .selling-point[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.6rem;\n}\n[_nghost-%COMP%]   .selling-point[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  box-shadow: 0px 0px 5rem -1rem var(--p-primary-950);\n  border-radius: 2rem;\n}\n@media screen and (max-width: 768px) {\n  [_nghost-%COMP%] {\n    --main-image-height: 22rem;\n    --gap: 4rem;\n    --card-width: 100%;\n    --header-text-size: 1.4rem;\n    --panel-standard-flex-direction: column;\n    --panel-reverse-flex-direction: column;\n  }\n  [_nghost-%COMP%]   .services[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    border-radius: 0.8rem;\n    margin: 1rem 1rem 4rem 1rem;\n  }\n  [_nghost-%COMP%]   .services[_ngcontent-%COMP%]   p-card[_ngcontent-%COMP%] {\n    min-width: 100%;\n    max-width: 20rem;\n  }\n  [_nghost-%COMP%]   .selling-point[_ngcontent-%COMP%] {\n    padding: 6rem 2rem;\n  }\n}\n/*# sourceMappingURL=app.css.map */"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(App, [{
    type: Component3,
    args: [{
      selector: "app-root",
      imports: [Nav, Card, Pricing],
      template: '<app-nav/>\n\n<div class="main-image">\n  <img src="main-photo.jpg" alt="">\n</div>\n\n<div class="services">\n  @for (service of services; track service) {\n    <p-card>\n      <div class="content">\n        <div class="details">\n          <div class="inner">\n            <h3>{{ service.mission }}</h3>\n            <p>{{ service.statement }}</p>\n          </div>\n          <div class="detail-bg-image"></div>\n        </div>\n        <div class="bg-image">\n          <img [src]="service.bgImage" alt="">\n        </div>\n      </div>\n    </p-card>\n  }\n</div>\n\n<div class="selling-point">\n  <div class="panel">\n    <h2>No Downtime. No Hassle. No Overhead.</h2>\n    <p>Technology issues don\u2019t wait \u2014 and neither should you. Our On-Demand Support gives your business instant access\n      to expert help for anything from website updates and SaaS troubleshooting to software integrations and performance\n      optimization. No hiring, no payroll, no long-term contracts \u2014 just fast, reliable problem-solving exactly when you\n      need it. Keep your systems running, your team productive, and your customers happy without the cost of a full-time\n      IT staff.</p>\n  </div>\n  <div class="panel">\n    <img src="image-call-guy.jpg" alt="">\n  </div>\n</div>\n<div class="selling-point r">\n  <div class="panel">\n    <h2>Web Design With a Purpose.</h2>\n    <p>\n      Your website should do more than look good \u2014 it should attract customers, build trust, and drive sales. We create\n      fast, secure, mobile-friendly websites tailored to your brand and goals, with clear navigation, compelling\n      visuals, and a smooth user experience that keeps visitors engaged. Designed to grow with your business, your site\n      will be easy to manage and ready to deliver results from day one.\n    </p>\n  </div>\n  <div class="panel">\n    <img src="group-coding.jpg" alt="">\n  </div>\n</div>\n\n<jde-pricing [blocks]="pricingBlocks"></jde-pricing>\n',
      styles: ["/* src/app/app.scss */\n:host {\n  --main-image-height: 100vh;\n  --gap: 7rem;\n  --card-width: calc(50% - var(--gap));\n  --header-text-size: 2.3rem;\n  --panel-standard-flex-direction: row;\n  --panel-reverse-flex-direction: row-reverse;\n}\n:host .main-image {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: var(--main-image-height);\n  overflow: hidden;\n}\n:host .main-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n:host .services {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: var(--gap);\n  margin: var(--gap);\n  overflow: auto;\n}\n:host .services p-card {\n  flex: var(--card-width);\n  max-width: var(--card-width);\n  min-width: var(--card-width);\n  overflow: hidden;\n  --p-card-body-padding: 0;\n}\n:host .services p-card .content {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 350px;\n  width: 100%;\n  cursor: pointer;\n}\n:host .services p-card .content .details {\n  bottom: 0;\n  position: absolute;\n  height: 80%;\n  width: inherit;\n  display: flex;\n  flex-direction: column;\n  -webkit-backdrop-filter: blur(0rem);\n  backdrop-filter: blur(0rem);\n  border-radius: 0.8rem;\n  transform: translateY(calc(100% - 4rem));\n  transition: all 0.3s cubic-bezier(0.2, 0.7, 0.2, 1);\n  overflow: hidden;\n  z-index: 2;\n}\n:host .services p-card .content .details .inner {\n  height: 100%;\n  position: relative;\n  color: var(--p-primary-400);\n  z-index: 1;\n}\n:host .services p-card .content .details .inner h3 {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: 0 1rem;\n  height: 4rem;\n  font-size: var(--header-text-size);\n  border-radius: 0.8rem;\n  overflow: hidden;\n}\n:host .services p-card .content .details .inner p {\n  flex: 1;\n  margin: 0 2rem 1rem 2rem;\n  padding-top: 0.5rem;\n  font-size: 1.2rem;\n  font-weight: 700;\n  border-top: 1px solid white;\n  color: rgb(90, 90, 90);\n  transform: translateY(30%);\n  transition: all 0.6s cubic-bezier(0.2, 0.7, 0.2, 1);\n  animation-delay: 1s;\n}\n:host .services p-card .content .details .detail-bg-image {\n  position: absolute;\n  height: 100%;\n  width: inherit;\n  background: rgb(255, 255, 255);\n  transition: all 0.3s ease-in-out;\n  opacity: 0.8;\n  z-index: 0;\n}\n:host .services p-card .content .bg-image {\n  height: inherit;\n  width: inherit;\n  position: absolute;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  z-index: 0;\n}\n:host .services p-card .content .bg-image img {\n  display: block;\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n:host .services p-card .content:hover .details {\n  -webkit-backdrop-filter: blur(2rem);\n  backdrop-filter: blur(2rem);\n  transform: translateY(0);\n}\n:host .services p-card .content:hover .details .inner p {\n  transform: translateY(0);\n}\n:host .services p-card .content:hover .details .detail-bg-image {\n  background: rgb(255, 255, 255);\n  opacity: 0.6;\n}\n:host .selling-point {\n  display: flex;\n  padding: 8rem 4rem;\n  flex-direction: var(--panel-standard-flex-direction);\n  gap: 8rem;\n  background: var(--p-primary-600);\n}\n:host .selling-point.r {\n  flex-direction: var(--panel-reverse-flex-direction);\n  background: var(--p-secondary-700);\n}\n:host .selling-point.r .panel {\n  align-items: flex-end;\n  text-align: right;\n}\n:host .selling-point .panel {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  height: 25rem;\n  border-radius: 2rem;\n  overflow: visible;\n}\n:host .selling-point .panel h2 {\n  margin: 1rem 0;\n  font-size: 2.7rem;\n}\n:host .selling-point .panel p {\n  margin: 0;\n  font-size: 1.6rem;\n}\n:host .selling-point .panel img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  box-shadow: 0px 0px 5rem -1rem var(--p-primary-950);\n  border-radius: 2rem;\n}\n@media screen and (max-width: 768px) {\n  :host {\n    --main-image-height: 22rem;\n    --gap: 4rem;\n    --card-width: 100%;\n    --header-text-size: 1.4rem;\n    --panel-standard-flex-direction: column;\n    --panel-reverse-flex-direction: column;\n  }\n  :host .services {\n    justify-content: flex-start;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    border-radius: 0.8rem;\n    margin: 1rem 1rem 4rem 1rem;\n  }\n  :host .services p-card {\n    min-width: 100%;\n    max-width: 20rem;\n  }\n  :host .selling-point {\n    padding: 6rem 2rem;\n  }\n}\n/*# sourceMappingURL=app.css.map */\n"]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(App, {
    className: "App",
    filePath: "src/app/app.ts",
    lineNumber: 12
  });
})();
(() => {
  const id = "src%2Fapp%2Fapp.ts%40App";

  function App_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i03.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
      ).then((m) => m.default && i03.\u0275\u0275replaceMetadata(App, m.default, [i03], [Nav, Card, Pricing, Component3], import.meta, id));
  }

  (typeof ngDevMode === "undefined" || ngDevMode) && App_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && App_HmrLoad(d.timestamp)));
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAuY29uZmlnLnRzIiwic3JjL2FwcC9hcHAucm91dGVzLnRzIiwic3JjL2FwcC9zdHlsZXMvcHJlc2V0LnRzIiwic3JjL2FwcC9hcHAudHMiLCJzcmMvYXBwL2FwcC5odG1sIiwic3JjL2FwcC9jb21wb25lbnRzL25hdi9uYXYudHMiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5odG1sIiwicHJvamVjdHMvdWkvc3JjL2xpYi9wcmljaW5nL3ByaWNpbmctYmxvY2svcHJpY2luZy1ibG9jay50cyIsInByb2plY3RzL3VpL3NyYy9saWIvcHJpY2luZy9wcmljaW5nLWJsb2NrL3ByaWNpbmctYmxvY2suaHRtbCIsInByb2plY3RzL3VpL3NyYy9saWIvcHJpY2luZy9wcmljaW5nLnRzIiwicHJvamVjdHMvdWkvc3JjL2xpYi9wcmljaW5nL3ByaWNpbmcuaHRtbCIsInByb2plY3RzL3VpL3NyYy9wdWJsaWMtYXBpLnRzIiwicHJvamVjdHMvdWkvc3JjL3VpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb3RzdHJhcEFwcGxpY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBhcHBDb25maWcgfSBmcm9tICcuL2FwcC9hcHAuY29uZmlnJztcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwL2FwcCc7XG5cbmJvb3RzdHJhcEFwcGxpY2F0aW9uKEFwcCwgYXBwQ29uZmlnKVxuICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiIsImltcG9ydCB7QXBwbGljYXRpb25Db25maWcsIHByb3ZpZGVCcm93c2VyR2xvYmFsRXJyb3JMaXN0ZW5lcnMsIHByb3ZpZGVab25lbGVzc0NoYW5nZURldGVjdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3Byb3ZpZGVSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7cm91dGVzfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xuaW1wb3J0IHtwcm92aWRlUHJpbWVOR30gZnJvbSAncHJpbWVuZy9jb25maWcnO1xuaW1wb3J0IHtwcm92aWRlQW5pbWF0aW9uc0FzeW5jfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMvYXN5bmMnO1xuaW1wb3J0IHtNeVByZXNldH0gZnJvbSBcIi4vc3R5bGVzL3ByZXNldFwiO1xuXG5leHBvcnQgY29uc3QgYXBwQ29uZmlnOiBBcHBsaWNhdGlvbkNvbmZpZyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZUJyb3dzZXJHbG9iYWxFcnJvckxpc3RlbmVycygpLFxuICAgIHByb3ZpZGVab25lbGVzc0NoYW5nZURldGVjdGlvbigpLFxuICAgIHByb3ZpZGVSb3V0ZXIocm91dGVzKSxcbiAgICBwcm92aWRlQW5pbWF0aW9uc0FzeW5jKCksXG4gICAgcHJvdmlkZVByaW1lTkcoe1xuICAgICAgdGhlbWU6IHtcbiAgICAgICAgcHJlc2V0OiBNeVByZXNldCxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGRhcmtNb2RlOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgXVxufTtcbiIsImltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmV4cG9ydCBjb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtdO1xuIiwiLy8gbXktcHJlc2V0LnRzXG5pbXBvcnQge2RlZmluZVByZXNldH0gZnJvbSAnQHByaW1ldWl4L3RoZW1lcyc7XG5pbXBvcnQgQXVyYSBmcm9tICdAcHJpbWV1aXgvdGhlbWVzL2F1cmEnO1xuXG5leHBvcnQgY29uc3QgcHJpbWFyeSA9IHtcbiAgMDogXCIjNkJGRkZGXCIsXG4gIDUwOiBcIiM1RUZGRkZcIixcbiAgMTAwOiBcIiM1MUZGRkZcIixcbiAgMjAwOiBcIiM0NEUwRkZcIixcbiAgMzAwOiBcIiMzN0I2RkZcIixcbiAgNDAwOiBcIiMyRkEwRkZcIixcbiAgNTAwOiBcIiMyQjhDRkNcIixcbiAgNjAwOiBcIiMyNDc0RDFcIixcbiAgNzAwOiBcIiMxRDVDQTZcIixcbiAgODAwOiBcIiMxNjQ0N0JcIixcbiAgOTAwOiBcIiMwRjJDNTBcIixcbiAgOTUwOiBcIiMwODE0MjVcIlxufVxuZXhwb3J0IGNvbnN0IHNlY29uZGFyeSA9IHtcbiAgMDogXCIjRkZGRkZGXCIsXG4gIDUwOiBcIiNGRkZGRkZcIixcbiAgMTAwOiBcIiNGN0ZGRTdcIixcbiAgMjAwOiBcIiNEMEZGQzNcIixcbiAgMzAwOiBcIiNBOURCOUVcIixcbiAgNDAwOiBcIiM4RkI5ODZcIixcbiAgNTAwOiBcIiM4MkE5N0FcIixcbiAgNjAwOiBcIiM2RThGNjdcIixcbiAgNzAwOiBcIiM1Qjc2NTVcIixcbiAgODAwOiBcIiM0NzVDNDNcIixcbiAgOTAwOiBcIiMzNDQzMzBcIixcbiAgOTUwOiBcIiMyMDJBMUVcIlxufVxuXG5cbmV4cG9ydCBjb25zdCBNeVByZXNldCA9IGRlZmluZVByZXNldChBdXJhLCB7XG4gIC8vIG1haW4gYnJhbmQgY29sb3IgKHRhd255KVxuICBzZW1hbnRpYzoge1xuICAgIHByaW1hcnksXG4gICAgc2Vjb25kYXJ5LFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgaW5wdXR0ZXh0OiB7XG4gICAgICByb290OiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHNlY29uZGFyeVswXSxcbiAgICAgICAgY29sb3I6IHNlY29uZGFyeVs4MDBdLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcbiAgICAgICAgZmlsbGVkQmFja2dyb3VuZDogc2Vjb25kYXJ5WzBdLFxuICAgICAgICBwbGFjZWhvbGRlckNvbG9yOiBwcmltYXJ5WzgwMF0sXG4gICAgICB9XG4gICAgfSxcbiAgICBjYXJkOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHByaW1hcnlbNzAwXSxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbSdcbiAgICAgIH1cbiAgICB9LFxuICAgIG1lbnViYXI6IHtcbiAgICAgIGl0ZW06IHtcbiAgICAgICAgY29sb3I6IHNlY29uZGFyeVswXSxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgIGNvbG9yOiBzZWNvbmRhcnlbMF0sXG4gICAgICAgICAgZm9jdXNDb2xvcjogc2Vjb25kYXJ5WzMwMF1cbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXNCYWNrZ3JvdW5kOiBwcmltYXJ5WzQwMF0sXG4gICAgICAgIGZvY3VzQ29sb3I6IHNlY29uZGFyeVswXVxuICAgICAgfVxuICAgIH0sXG4gICAgZHJhd2VyOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHByaW1hcnlbNjAwXVxuICAgICAgfVxuICAgIH1cbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHtDb21wb25lbnQsIHNpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hdn0gZnJvbSAnLi9jb21wb25lbnRzL25hdi9uYXYnO1xuaW1wb3J0IHtDYXJkfSBmcm9tICdwcmltZW5nL2NhcmQnO1xuaW1wb3J0IHtQcmljaW5nLCBQcmljaW5nU3RydWN0fSBmcm9tICd1aSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgaW1wb3J0czogW05hdiwgQ2FyZCwgUHJpY2luZ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9hcHAuc2Nzcydcbn0pXG5leHBvcnQgY2xhc3MgQXBwIHtcblxuICBzZXJ2aWNlcyA9IFtcbiAgICB7XG4gICAgICBiZ0ltYWdlOiAnYW5pbWF0ZWQtdHlwaW5nLmpwZycsXG4gICAgICBtaXNzaW9uOiAnQ3VzdG9tIFdlYiBEZXNpZ24nLFxuICAgICAgc3RhdGVtZW50OiAnV2UgY3JlYXRlIHByb2Zlc3Npb25hbCwgbW9iaWxlLWZyaWVuZGx5IHdlYnNpdGVzIGRlc2lnbmVkIHRvIHNob3djYXNlIHlvdXIgYnJhbmQgYW5kIGF0dHJhY3QgeW91ciBpZGVhbCBjdXN0b21lcnMuIEV2ZXJ5IHNpdGUgaXMgYnVpbHQgd2l0aCB1c2VyIGV4cGVyaWVuY2UsIHNwZWVkLCBhbmQgU0VPIGJlc3QgcHJhY3RpY2VzIGluIG1pbmQuIEZyb20gY29uY2VwdCB0byBsYXVuY2gsIHdlIGVuc3VyZSB5b3VyIHdlYnNpdGUgbG9va3MgZ3JlYXQgYW5kIHBlcmZvcm1zIGV2ZW4gYmV0dGVyLidcbiAgICB9LFxuICAgIHtcbiAgICAgIGJnSW1hZ2U6ICdhbmltYXRlZC1yZXZlbnVlLmpwZycsXG4gICAgICBtaXNzaW9uOiAnQm9vc3QgVmlzaWJpbGl0eSAmIFJldmVudWUnLFxuICAgICAgc3RhdGVtZW50OiAnT3VyIHByb3ZlbiBzdHJhdGVnaWVzIGhlbHAgeW91ciBidXNpbmVzcyByYW5rIGhpZ2hlciBvbiBzZWFyY2ggZW5naW5lcywgcmVhY2ggbW9yZSBjdXN0b21lcnMsIGFuZCBpbmNyZWFzZSBjb252ZXJzaW9ucy4gV2UgY29tYmluZSB0YXJnZXRlZCBTRU8sIGVuZ2FnaW5nIGNvbnRlbnQsIGFuZCBkaWdpdGFsIG1hcmtldGluZyB0byBncm93IHlvdXIgYnJhbmQgYXdhcmVuZXNzLiBUaGUgcmVzdWx0IGlzIGEgc3Ryb25nZXIgb25saW5lIHByZXNlbmNlIHRoYXQgZHJpdmVzIHJlYWwgcHJvZml0IGdyb3d0aC4nXG4gICAgfSxcbiAgICB7XG4gICAgICBiZ0ltYWdlOiAnYW5pbWF0ZWQtc29sdXRpb25zLmpwZycsXG4gICAgICBtaXNzaW9uOiAnU21hcnQgU29mdHdhcmUgU29sdXRpb25zJyxcbiAgICAgIHN0YXRlbWVudDogJ1dlIGlkZW50aWZ5LCBjdXN0b21pemUsIGFuZCBpbnRlZ3JhdGUgc29mdHdhcmUgdGhhdCBtYWtlcyB5b3VyIGJ1c2luZXNzIHJ1biBtb3JlIGVmZmljaWVudGx5LiBCeSBjaG9vc2luZyB0b29scyB0aGF0IGZpdCB5b3VyIHVuaXF1ZSB3b3JrZmxvdywgd2UgaGVscCB5b3Ugc2F2ZSB0aW1lIGFuZCByZWR1Y2UgY29zdHMuIE91ciBnb2FsIGlzIHRvIGVuc3VyZSB5b3VyIHRlY2hub2xvZ3kgd29ya3MgZm9yIHlvdSwgbm90IHRoZSBvdGhlciB3YXkgYXJvdW5kLidcbiAgICB9LFxuICAgIHtcbiAgICAgIGJnSW1hZ2U6ICdhbmltYXRlZC1oZWxwLmpwZycsXG4gICAgICBtaXNzaW9uOiAnUmVsaWFibGUgT25nb2luZyBTdXBwb3J0JyxcbiAgICAgIHN0YXRlbWVudDogJ1dlIHByb3ZpZGUgY29udGludW91cyB3ZWJzaXRlIG1haW50ZW5hbmNlLCB1cGRhdGVzLCBhbmQgdHJvdWJsZXNob290aW5nIHRvIGtlZXAgeW91ciBidXNpbmVzcyBydW5uaW5nIHNtb290aGx5LiBXaGV0aGVyIHlvdSBuZWVkIHF1aWNrIGZpeGVzIG9yIGxvbmctdGVybSBkaWdpdGFsIGd1aWRhbmNlLCB3ZeKAmXJlIGhlcmUgdG8gaGVscC4gWW91IGNhbiBjb3VudCBvbiB1cyBhcyB5b3VyIHRydXN0ZWQgcGFydG5lciBmb3IgZGVwZW5kYWJsZSBvbmxpbmUgc3VwcG9ydC4nXG4gICAgfSxcbiAgXTtcblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhbiBhcnJheSBvZiBwcmljaW5nIHBsYW5zIGZvciBhIHNlcnZpY2UsIHdoZXJlIGVhY2ggaXRlbSBkZWZpbmVzXG4gICAqIGRldGFpbHMgYWJvdXQgYSBzcGVjaWZpYyB0aWVyIG9mIHRoZSBwcmljaW5nIG1vZGVsLCBhbG9uZyB3aXRoIGl0cyBmZWF0dXJlcyBhbmQgY2hhcmFjdGVyaXN0aWNzLlxuICAgKlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBQcmljaW5nU3RydWN0XG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpY29uIC0gVGhlIGljb24gaWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggdGhlIHByaWNpbmcgYmxvY2suXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW2lzUmVjb21tZW5kZWRdIC0gSW5kaWNhdGVzIGlmIHRoZSBwcmljaW5nIHRpZXIgaXMgcmVjb21tZW5kZWQgKG9wdGlvbmFsKS5cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGJsb2NrVGl0bGUgLSBUaGUgdGl0bGUgb2YgdGhlIHByaWNpbmcgYmxvY2ssIGluY2x1ZGluZyB0aGUgdGllciBuYW1lIGFuZCBwcmljZS5cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGJsb2NrRGVzY3JpcHRpb24gLSBBIHNob3J0IGRlc2NyaXB0aW9uIG9yIHN1bW1hcnkgb2YgdGhlIHByaWNpbmcgdGllci5cbiAgICogQHByb3BlcnR5IHtzdHJpbmdbXX0gYmxvY2tPcHRpb25zIC0gQSBsaXN0IG9mIGZlYXR1cmVzIG9yIHNlcnZpY2VzIGluY2x1ZGVkIGluIHRoZSBwcmljaW5nIHRpZXIuXG4gICAqXG4gICAqIEB0eXBlIHtQcmljaW5nU3RydWN0W119XG4gICAqL1xuICBwcmljaW5nQmxvY2tzOiBQcmljaW5nU3RydWN0W10gPSBbXG4gICAge1xuICAgICAgaWQ6ICdCYXNpYyBJVCcsXG4gICAgICBpY29uOiAncGkgcGktcGx1cycsXG4gICAgICBibG9ja1RpdGxlOiAnQmFzaWMg4oCTICQyNTAvbW8nLFxuICAgICAgYmxvY2tEZXNjcmlwdGlvbjogJ1BlcmZlY3QgZm9yIGJ1c2luZXNzZXMgdGhhdCBuZWVkIG9jY2FzaW9uYWwgaGVscC4nLFxuICAgICAgYmxvY2tPcHRpb25zOiBbXG4gICAgICAgICdVcCB0byA0IGhvdXJzIG9mIHN1cHBvcnQgcGVyIG1vbnRoJyxcbiAgICAgICAgJzQ4LWhvdXIgZ3VhcmFudGVlZCByZXNwb25zZSB0aW1lJyxcbiAgICAgICAgJ1dlYnNpdGUgY29udGVudCB1cGRhdGVzICYgbWlub3IgZml4ZXMnLFxuICAgICAgICAnQmFzaWMgU2FhUyB0cm91Ymxlc2hvb3RpbmcnLFxuICAgICAgICAnRW1haWwgJiBjaGF0IHN1cHBvcnQgZHVyaW5nIGJ1c2luZXNzIGhvdXJzJyxcbiAgICAgIF0sXG4gICAgICBhbHRlcm5hdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnV2ViIEJhc2ljJyxcbiAgICAgICAgICBpY29uOiAncGkgcGktcGx1cycsXG4gICAgICAgICAgYmxvY2tUaXRsZTogJ1dlYiBCYXNpYyAtICQxNTAvbW8nLFxuICAgICAgICAgIGJsb2NrRGVzY3JpcHRpb246ICdGb3Igc21hbGwgYnVzaW5lc3NlcyB0aGF0IGp1c3QgbmVlZCB0aGVpciBzaXRlIGtlcHQgZnJlc2guJyxcbiAgICAgICAgICBpc1JlY29tbWVuZGVkOiBmYWxzZSxcbiAgICAgICAgICBibG9ja09wdGlvbnM6IFtcbiAgICAgICAgICAgICdVcCB0byAyIGhvdXJzIG9mIG1vbnRobHkgdXBkYXRlcycsXG4gICAgICAgICAgICAnTW9udGhseSBzZWN1cml0eSAmIHBsdWdpbiB1cGRhdGVzJyxcbiAgICAgICAgICAgICdXZWJzaXRlIGJhY2t1cHMgJiB1cHRpbWUgbW9uaXRvcmluZycsXG4gICAgICAgICAgICAnTWlub3IgY29udGVudCBjaGFuZ2VzICh0ZXh0L2ltYWdlcyknXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ1BybyBJVCcsXG4gICAgICBpY29uOiAncGkgcGktc3RhcicsXG4gICAgICBpc1JlY29tbWVuZGVkOiB0cnVlLFxuICAgICAgYmxvY2tUaXRsZTogJ1BybyDigJMgJDUwMC9tbycsXG4gICAgICBibG9ja0Rlc2NyaXB0aW9uOiAnSWRlYWwgZm9yIGdyb3dpbmcgYnVzaW5lc3NlcyB3aXRoIHJlZ3VsYXIgdGVjaCBuZWVkcy4nLFxuICAgICAgYmxvY2tPcHRpb25zOiBbXG4gICAgICAgICdVcCB0byAxMCBob3VycyBvZiBzdXBwb3J0IHBlciBtb250aCcsXG4gICAgICAgICcyNC1ob3VyIGd1YXJhbnRlZWQgcmVzcG9uc2UgdGltZScsXG4gICAgICAgICdXZWJzaXRlIHVwZGF0ZXMgJiBmZWF0dXJlIGFkZGl0aW9ucycsXG4gICAgICAgICdTYWFTIHNldHVwICYgaW50ZWdyYXRpb25zJyxcbiAgICAgICAgJ09uZ29pbmcgc2VjdXJpdHkgbW9uaXRvcmluZycsXG4gICAgICAgICdQcmlvcml0eSBlbWFpbCAmIHBob25lIHN1cHBvcnQnLFxuICAgICAgXSxcbiAgICAgIGFsdGVybmF0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdXZWIgUGx1cycsXG4gICAgICAgICAgaWNvbjogJ3BpIHBpLXN0YXInLFxuICAgICAgICAgIGJsb2NrVGl0bGU6ICdXZWIgUGx1cyAtICQzMDAvbW8nLFxuICAgICAgICAgIGJsb2NrRGVzY3JpcHRpb246ICdGb3IgYnVzaW5lc3NlcyB0aGF0IHdhbnQgY29uc2lzdGVudCBpbXByb3ZlbWVudHMuJyxcbiAgICAgICAgICBpc1JlY29tbWVuZGVkOiB0cnVlLCAvLyBNb3N0IFBvcHVsYXJcbiAgICAgICAgICBibG9ja09wdGlvbnM6IFtcbiAgICAgICAgICAgICdVcCB0byA1IGhvdXJzIG9mIHVwZGF0ZXMgcGVyIG1vbnRoJyxcbiAgICAgICAgICAgICdTZWN1cml0eSwgYmFja3VwcyAmIHVwdGltZSBtb25pdG9yaW5nJyxcbiAgICAgICAgICAgICdNb250aGx5IFNFTyBjaGVja3MgJiBvcHRpbWl6YXRpb24gdHdlYWtzJyxcbiAgICAgICAgICAgICdTcGVlZC9wZXJmb3JtYW5jZSBvcHRpbWl6YXRpb24nLFxuICAgICAgICAgICAgJ1ByaW9yaXR5IHJlc3BvbnNlICgyNCBocnMpJ1xuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdFbGl0ZSBJVCcsXG4gICAgICBpY29uOiAncGkgcGktcGx1cycsXG4gICAgICBibG9ja1RpdGxlOiAnRWxpdGUg4oCTICQxLDAwMC9tbycsXG4gICAgICBibG9ja0Rlc2NyaXB0aW9uOlxuICAgICAgICAnRnVsbCBjb3ZlcmFnZSBmb3IgYnVzaW5lc3NlcyB0aGF0IG5lZWQgZmFzdCwgdW5saW1pdGVkIGhlbHAuJyxcbiAgICAgIGJsb2NrT3B0aW9uczogW1xuICAgICAgICAnVW5saW1pdGVkIHJlcXVlc3RzIHdpdGhpbiBzY29wZScsXG4gICAgICAgICc0LWhvdXIgZ3VhcmFudGVlZCByZXNwb25zZSB0aW1lJyxcbiAgICAgICAgJ1F1YXJ0ZXJseSB0ZWNobm9sb2d5IHN0cmF0ZWd5IHNlc3Npb24nLFxuICAgICAgICAnQ29tcHJlaGVuc2l2ZSBzZWN1cml0eSAmIHBlcmZvcm1hbmNlIG1vbml0b3JpbmcnLFxuICAgICAgICAnQWxsIFBybyBmZWF0dXJlcyBpbmNsdWRlZCcsXG4gICAgICBdLFxuICAgICAgYWx0ZXJuYXRpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ1dlYiBQcmVtaXVtJyxcbiAgICAgICAgICBpY29uOiAncGkgcGktcGx1cycsXG4gICAgICAgICAgYmxvY2tUaXRsZTogJ1dlYiBQcmVtaXVtIC0gJDYwMC9tbycsXG4gICAgICAgICAgYmxvY2tEZXNjcmlwdGlvbjogJ0ZvciBidXNpbmVzc2VzIHRoYXQgdHJlYXQgdGhlaXIgd2Vic2l0ZSBhcyBhIHRydWUgZ3Jvd3RoIGVuZ2luZS4nLFxuICAgICAgICAgIGlzUmVjb21tZW5kZWQ6IGZhbHNlLFxuICAgICAgICAgIGJsb2NrT3B0aW9uczogW1xuICAgICAgICAgICAgJ1VwIHRvIDEyIGhvdXJzIG9mIHVwZGF0ZXMgcGVyIG1vbnRoJyxcbiAgICAgICAgICAgICdFdmVyeXRoaW5nIGluIFBsdXMnLFxuICAgICAgICAgICAgJ01vbnRobHkgYW5hbHl0aWNzICYgcmVwb3J0aW5nJyxcbiAgICAgICAgICAgICdDb252ZXJzaW9uIG9wdGltaXphdGlvbiAoQ1RBcywgbGFuZGluZyBwYWdlcywgZnVubmVscyknLFxuICAgICAgICAgICAgJ1ByaW9yaXR5IHNjaGVkdWxpbmcgZm9yIHVyZ2VudCBmaXhlcydcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICBdXG59XG4iLCI8YXBwLW5hdi8+XG5cbjxkaXYgY2xhc3M9XCJtYWluLWltYWdlXCI+XG4gIDxpbWcgc3JjPVwibWFpbi1waG90by5qcGdcIiBhbHQ9XCJcIj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwic2VydmljZXNcIj5cbiAgQGZvciAoc2VydmljZSBvZiBzZXJ2aWNlczsgdHJhY2sgc2VydmljZSkge1xuICAgIDxwLWNhcmQ+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxuICAgICAgICAgICAgPGgzPnt7IHNlcnZpY2UubWlzc2lvbiB9fTwvaDM+XG4gICAgICAgICAgICA8cD57eyBzZXJ2aWNlLnN0YXRlbWVudCB9fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsLWJnLWltYWdlXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmctaW1hZ2VcIj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwic2VydmljZS5iZ0ltYWdlXCIgYWx0PVwiXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9wLWNhcmQ+XG4gIH1cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwic2VsbGluZy1wb2ludFwiPlxuICA8ZGl2IGNsYXNzPVwicGFuZWxcIj5cbiAgICA8aDI+Tm8gRG93bnRpbWUuIE5vIEhhc3NsZS4gTm8gT3ZlcmhlYWQuPC9oMj5cbiAgICA8cD5UZWNobm9sb2d5IGlzc3VlcyBkb27igJl0IHdhaXQg4oCUIGFuZCBuZWl0aGVyIHNob3VsZCB5b3UuIE91ciBPbi1EZW1hbmQgU3VwcG9ydCBnaXZlcyB5b3VyIGJ1c2luZXNzIGluc3RhbnQgYWNjZXNzXG4gICAgICB0byBleHBlcnQgaGVscCBmb3IgYW55dGhpbmcgZnJvbSB3ZWJzaXRlIHVwZGF0ZXMgYW5kIFNhYVMgdHJvdWJsZXNob290aW5nIHRvIHNvZnR3YXJlIGludGVncmF0aW9ucyBhbmQgcGVyZm9ybWFuY2VcbiAgICAgIG9wdGltaXphdGlvbi4gTm8gaGlyaW5nLCBubyBwYXlyb2xsLCBubyBsb25nLXRlcm0gY29udHJhY3RzIOKAlCBqdXN0IGZhc3QsIHJlbGlhYmxlIHByb2JsZW0tc29sdmluZyBleGFjdGx5IHdoZW4geW91XG4gICAgICBuZWVkIGl0LiBLZWVwIHlvdXIgc3lzdGVtcyBydW5uaW5nLCB5b3VyIHRlYW0gcHJvZHVjdGl2ZSwgYW5kIHlvdXIgY3VzdG9tZXJzIGhhcHB5IHdpdGhvdXQgdGhlIGNvc3Qgb2YgYSBmdWxsLXRpbWVcbiAgICAgIElUIHN0YWZmLjwvcD5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJwYW5lbFwiPlxuICAgIDxpbWcgc3JjPVwiaW1hZ2UtY2FsbC1ndXkuanBnXCIgYWx0PVwiXCI+XG4gIDwvZGl2PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwic2VsbGluZy1wb2ludCByXCI+XG4gIDxkaXYgY2xhc3M9XCJwYW5lbFwiPlxuICAgIDxoMj5XZWIgRGVzaWduIFdpdGggYSBQdXJwb3NlLjwvaDI+XG4gICAgPHA+XG4gICAgICBZb3VyIHdlYnNpdGUgc2hvdWxkIGRvIG1vcmUgdGhhbiBsb29rIGdvb2Qg4oCUIGl0IHNob3VsZCBhdHRyYWN0IGN1c3RvbWVycywgYnVpbGQgdHJ1c3QsIGFuZCBkcml2ZSBzYWxlcy4gV2UgY3JlYXRlXG4gICAgICBmYXN0LCBzZWN1cmUsIG1vYmlsZS1mcmllbmRseSB3ZWJzaXRlcyB0YWlsb3JlZCB0byB5b3VyIGJyYW5kIGFuZCBnb2Fscywgd2l0aCBjbGVhciBuYXZpZ2F0aW9uLCBjb21wZWxsaW5nXG4gICAgICB2aXN1YWxzLCBhbmQgYSBzbW9vdGggdXNlciBleHBlcmllbmNlIHRoYXQga2VlcHMgdmlzaXRvcnMgZW5nYWdlZC4gRGVzaWduZWQgdG8gZ3JvdyB3aXRoIHlvdXIgYnVzaW5lc3MsIHlvdXIgc2l0ZVxuICAgICAgd2lsbCBiZSBlYXN5IHRvIG1hbmFnZSBhbmQgcmVhZHkgdG8gZGVsaXZlciByZXN1bHRzIGZyb20gZGF5IG9uZS5cbiAgICA8L3A+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicGFuZWxcIj5cbiAgICA8aW1nIHNyYz1cImdyb3VwLWNvZGluZy5qcGdcIiBhbHQ9XCJcIj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGpkZS1wcmljaW5nIFtibG9ja3NdPVwicHJpY2luZ0Jsb2Nrc1wiPjwvamRlLXByaWNpbmc+XG4iLCJpbXBvcnQge0NvbXBvbmVudCwgc2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWVudUl0ZW19IGZyb20gJ3ByaW1lbmcvYXBpJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdwcmltZW5nL2J1dHRvbic7XG5pbXBvcnQge1JvdXRlckxpbmt9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0RyYXdlcn0gZnJvbSAncHJpbWVuZy9kcmF3ZXInO1xuaW1wb3J0IHtNZW51fSBmcm9tICdwcmltZW5nL21lbnUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbmF2JyxcbiAgaW1wb3J0czogW1xuICAgIEJ1dHRvbixcbiAgICBSb3V0ZXJMaW5rLFxuICAgIERyYXdlcixcbiAgICBNZW51XG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9uYXYuc2Nzcydcbn0pXG5leHBvcnQgY2xhc3MgTmF2IHtcbiAgJGlzRHJhd2VyVmlzaWJsZSA9IHNpZ25hbChmYWxzZSlcbiAgaXRlbXM6IE1lbnVJdGVtW10gPSBbXG4gICAge1xuICAgICAgbGFiZWw6ICdTZXJ2aWNlcycsXG4gICAgICBpY29uOiAncGkgcGktZGVza3RvcCdcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnR2V0IFN0YXJ0ZWQnLFxuICAgICAgaWNvbjogJ3BpIHBpLXNlbmQnXG4gICAgfVxuICBdXG59XG4iLCI8ZGl2IGNsYXNzPVwibWVudS1tb2JpbGUtaWNvblwiPlxuICA8cC1idXR0b25cbiAgICByb3VuZGVkXG4gICAgc2V2ZXJpdHk9XCJwcmltYXJ5XCJcbiAgICBpY29uPVwicGkgcGktYmFyc1wiIChjbGljayk9XCIkaXNEcmF3ZXJWaXNpYmxlLnNldCh0cnVlKVwiLz5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwibWVudS1sb2dvXCI+XG4gIDxoMiBjbGFzcz1cImxvZ29cIj5KYXJWb25EaWdpdGFsIExMQzwvaDI+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm1lbnUtbGlua3NcIj5cbiAgQGZvciAobGluayBvZiBpdGVtczsgdHJhY2sgbGluaykge1xuICAgIDxwLWJ1dHRvblxuICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgIHNldmVyaXR5PVwicHJpbWFyeVwiXG4gICAgICBbaWNvbl09XCJsaW5rLmljb25cIlxuICAgICAgW3JvdXRlckxpbmtdPVwibGluay5yb3V0ZXJMaW5rXCJcbiAgICAgIFtsYWJlbF09XCJsaW5rLmxhYmVsXCIvPlxuICB9XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cIm1lbnUtZW5kXCI+XG4gIDxkaXYgY2xhc3M9XCJzZWFyY2hcIj5cbiAgICA8IS0tICAgICAgPGlucHV0IHBJbnB1dFRleHQgcGxhY2Vob2xkZXI9XCJIYXZlIGEgcXVlc3Rpb24/XCIgdHlwZT1cInRleHRcIj4tLT5cbiAgICA8cC1idXR0b24gcm91bmRlZCBzZXZlcml0eT1cInByaW1hcnlcIiBpY29uPVwicGkgcGktc2VhcmNoXCI+PC9wLWJ1dHRvbj5cbiAgICA8cC1idXR0b25cbiAgICAgIHJvdW5kZWRcbiAgICAgIHNldmVyaXR5PVwicHJpbWFyeVwiXG4gICAgICBpY29uPVwicGkgcGktbG9ja1wiPlxuICAgIDwvcC1idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG5cblxuPHAtZHJhd2VyXG4gIFsodmlzaWJsZSldPVwiJGlzRHJhd2VyVmlzaWJsZVwiXG4gIFtibG9ja1Njcm9sbF09XCJ0cnVlXCJcbiAgcG9zaXRpb249XCJsZWZ0XCI+XG4gIDxwLW1lbnVcbiAgICBbbW9kZWxdPVwiaXRlbXNcIiBzdHlsZUNsYXNzPVwiZHJhd2VyLW1lbnVcIj48L3AtbWVudT5cblxuPC9wLWRyYXdlcj5cbiIsImltcG9ydCB7Q29tcG9uZW50LCBjb21wdXRlZCwgZWZmZWN0LCBpbnB1dCwgSW5wdXRTaWduYWwsIHNpZ25hbCwgV3JpdGFibGVTaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtTZWxlY3RCdXR0b259IGZyb20gJ3ByaW1lbmcvc2VsZWN0YnV0dG9uJztcbmltcG9ydCB7UHJpY2luZ1N0cnVjdH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9wcmljaW5nL3ByaWNpbmctc3RydWN0JztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamRlLXByaWNpbmctYmxvY2snLFxuICBpbXBvcnRzOiBbXG4gICAgU2VsZWN0QnV0dG9uLFxuICAgIEZvcm1zTW9kdWxlXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9wcmljaW5nLWJsb2NrLmh0bWwnLFxuICBzdHlsZVVybDogJy4vcHJpY2luZy1ibG9jay5zY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBQcmljaW5nQmxvY2sge1xuICBibG9jazogSW5wdXRTaWduYWw8UHJpY2luZ1N0cnVjdD4gPSBpbnB1dC5yZXF1aXJlZCgpO1xuICBhbHRlcm5hdGl2ZXMgPSBjb21wdXRlZCgoKSA9PiBbdGhpcy5ibG9jaygpLCAuLi4odGhpcy5ibG9jaygpLmFsdGVybmF0aXZlcyA/PyBbXSldKVxuICBzZWxlY3RlZEFsdGVybmF0aXZlOiBXcml0YWJsZVNpZ25hbDxQcmljaW5nU3RydWN0IHwgdW5kZWZpbmVkPiA9IHNpZ25hbCh1bmRlZmluZWQpXG4gICRpbml0aWFsQmxvY2tTZXR1cEVmZmVjdCA9IGVmZmVjdCgoKSA9PiB7XG4gICAgaWYodGhpcy5ibG9jaygpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQWx0ZXJuYXRpdmUuc2V0KHRoaXMuYmxvY2soKSk7XG4gICAgfVxuICB9KVxuXG4gIG9uQWx0ZXJuYXRpdmVDaGFuZ2UoJGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNlbGVjdGVkQWx0ZXJuYXRpdmUuc2V0KHRoaXMuYWx0ZXJuYXRpdmVzKCkuZmluZChiID0+IChiLmlkID09PSAkZXZlbnQpKSk7XG4gIH1cbn1cbiIsIkBsZXQgYWx0ZXJuYXRpdmUgPSBzZWxlY3RlZEFsdGVybmF0aXZlKCk7XG5cbkBpZiAoYWx0ZXJuYXRpdmUpIHtcbiAgQGxldCBzdHlsZXMgPSB7dGllcjogdHJ1ZSwgY2VudGVyOiBhbHRlcm5hdGl2ZS5pc1JlY29tbWVuZGVkfTtcbiAgPGRpdiBbY2xhc3NdPVwic3R5bGVzXCI+XG4gICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgIDxpIFtjbGFzc109XCJhbHRlcm5hdGl2ZS5pY29uXCI+PC9pPlxuICAgIDwvZGl2PlxuXG4gICAgPGgyPnt7YWx0ZXJuYXRpdmUuYmxvY2tUaXRsZX19PC9oMj5cbiAgICA8aDQ+e3thbHRlcm5hdGl2ZS5ibG9ja0Rlc2NyaXB0aW9ufX08L2g0PlxuXG4gICAgQGlmKGFsdGVybmF0aXZlcygpLmxlbmd0aCA+IDEpIHtcbiAgICAgIDxwLXNlbGVjdC1idXR0b25cbiAgICAgICAgW25nTW9kZWxdPVwiYWx0ZXJuYXRpdmUuaWRcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkFsdGVybmF0aXZlQ2hhbmdlKCRldmVudClcIlxuICAgICAgICBbb3B0aW9uc109XCJhbHRlcm5hdGl2ZXMoKVwiXG4gICAgICAgIFt1bnNlbGVjdGFibGVdPVwiZmFsc2VcIlxuICAgICAgICBvcHRpb25MYWJlbD1cImlkXCJcbiAgICAgICAgb3B0aW9uVmFsdWU9XCJpZFwiPlxuICAgICAgPC9wLXNlbGVjdC1idXR0b24+XG4gICAgfVxuXG5cbiAgICA8dWw+XG4gICAgICBAZm9yIChpdGVtIG9mIGFsdGVybmF0aXZlLmJsb2NrT3B0aW9uczsgdHJhY2sgaXRlbSkge1xuICAgICAgICA8bGk+e3tpdGVtfX08L2xpPlxuICAgICAgfVxuICAgIDwvdWw+XG4gIDwvZGl2PlxufVxuXG4iLCJpbXBvcnQge0NvbXBvbmVudCwgaW5wdXQsIElucHV0U2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UHJpY2luZ1N0cnVjdH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9wcmljaW5nL3ByaWNpbmctc3RydWN0JztcbmltcG9ydCB7UHJpY2luZ0Jsb2NrfSBmcm9tICcuL3ByaWNpbmctYmxvY2svcHJpY2luZy1ibG9jayc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2pkZS1wcmljaW5nJyxcbiAgaW1wb3J0czogW1xuICAgIFByaWNpbmdCbG9ja1xuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJpY2luZy5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3ByaWNpbmcuc2Nzcydcbn0pXG5leHBvcnQgY2xhc3MgUHJpY2luZyB7XG4gIGJsb2NrczogSW5wdXRTaWduYWw8UHJpY2luZ1N0cnVjdFtdPiA9IGlucHV0LnJlcXVpcmVkKCk7XG59XG4iLCJAZm9yIChibG9jayBvZiBibG9ja3MoKTsgdHJhY2sgYmxvY2suYmxvY2tUaXRsZSkge1xuICA8amRlLXByaWNpbmctYmxvY2sgW2Jsb2NrXT1cImJsb2NrXCI+PC9qZGUtcHJpY2luZy1ibG9jaz5cbn1cbiIsIlxuLy8gQ29tcG9uZW50c1xuZXhwb3J0ICogZnJvbSAnLi9saWIvcHJpY2luZy9wcmljaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL3ByaWNpbmcvcHJpY2luZy1ibG9jay9wcmljaW5nLWJsb2NrJztcblxuLy8gSW50ZXJmYWNlc1xuZXhwb3J0ICogZnJvbSAnLi9saWIvaW50ZXJmYWNlcy9wcmljaW5nL3ByaWNpbmctc3RydWN0JztcbiIsIi8qKlxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9wdWJsaWMtYXBpJztcbiJdLCJtYXBwaW5ncyI6IjtBQUFBLFNBQVMsNEJBQTRCOzs7QUNBckMsU0FBMkIsb0NBQW9DLHNDQUFxQztBQUNwRyxTQUFRLHFCQUFvQjs7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SlBoQixxQkFBcUIsS0FBSyxTQUFTLEVBQ2hDLE1BQU0sQ0FBQyxRQUFRLFFBQVEsTUFBTSxHQUFHLENBQUM7IiwibmFtZXMiOlsiQ29tcG9uZW50IiwiY2VudGVyIiwiYTAiLCJQcmljaW5nQmxvY2tfQ29uZGl0aW9uYWxfMV9Db25kaXRpb25hbF83X1RlbXBsYXRlIiwicmYiLCJjdHgiLCJfcjEiLCJjdHhfcjEiLCJvbkFsdGVybmF0aXZlQ2hhbmdlIiwiJGV2ZW50IiwiYWx0ZXJuYXRpdmVzIiwiUHJpY2luZ0Jsb2NrX0NvbmRpdGlvbmFsXzFfRm9yXzEwX1RlbXBsYXRlIiwiaXRlbV9yNCIsIiRpbXBsaWNpdCIsIlByaWNpbmdCbG9ja19Db25kaXRpb25hbF8xX1RlbXBsYXRlIiwiX2ZvclRyYWNrMCIsIiRpbmRleCIsIiRpdGVtIiwiYmxvY2tUaXRsZSIsIlByaWNpbmdfRm9yXzFfVGVtcGxhdGUiLCJibG9ja19yMSIsIlByaWNpbmdCbG9jayIsImJsb2NrIiwiaW5wdXQiLCJyZXF1aXJlZCIsIm5nRGV2TW9kZSIsImRlYnVnTmFtZSIsImNvbXB1dGVkIiwic2VsZWN0ZWRBbHRlcm5hdGl2ZSIsInNpZ25hbCIsInVuZGVmaW5lZCIsIiRpbml0aWFsQmxvY2tTZXR1cEVmZmVjdCIsImVmZmVjdCIsInNldCIsImZpbmQiLCJiIiwiaWQiLCLJtWNtcCIsInNlbGVjdG9ycyIsImlucHV0cyIsImRlY2xzIiwidmFycyIsImNvbnN0cyIsInRlbXBsYXRlIiwiUHJpY2luZ0Jsb2NrX1RlbXBsYXRlIiwiYWx0ZXJuYXRpdmVfcjYiLCJkZXBlbmRlbmNpZXMiLCJTZWxlY3RCdXR0b24iLCJGb3Jtc01vZHVsZSIsIk5nQ29udHJvbFN0YXR1cyIsIk5nTW9kZWwiLCJzdHlsZXMiLCJDb21wb25lbnQiLCJhcmdzIiwic2VsZWN0b3IiLCJpbXBvcnRzIiwiUHJpY2luZyIsImJsb2NrcyIsIlByaWNpbmdfVGVtcGxhdGUiLCJDb21wb25lbnQiLCJpMCJdfQ==
