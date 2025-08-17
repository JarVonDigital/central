// my-preset.ts
import {definePreset} from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import {jdeToggleButton} from './partials/jde-toggle-button';
import {primaryClr, secondaryClr} from './partials/colors/colors';
import {jdeDrawer} from './partials/jde-drawer';

export const MyPreset = definePreset(Aura, {
  // main brand color (tawny)
  semantic: {
    primary: primaryClr,
    secondary: secondaryClr,
  },
  components: {
    inputtext: {
      root: {
        background: secondaryClr[0],
        color: secondaryClr[800],
        borderRadius: '1rem',
        filledBackground: secondaryClr[0],
        placeholderColor: primaryClr[800],
      }
    },
    card: {
      root: {
        background: primaryClr[700],
        borderRadius: '1rem'
      }
    },
    menubar: {
      item: {
        color: secondaryClr[0],
        icon: {
          color: secondaryClr[0],
          focusColor: secondaryClr[300]
        },
        focusBackground: primaryClr[400],
        focusColor: secondaryClr[0]
      }
    },
    drawer: jdeDrawer,
    togglebutton: jdeToggleButton
  },
});
