// my-preset.ts
import {definePreset} from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

// Colors:
//  sage       #CCD5AE
//  tea green  #E9EDC9
//  linen      #FEFAE0
//  vanilla    #FAEDCD
//  tawny      #D4A373

const MyPreset = definePreset(Aura, {
  // main brand color (tawny)
  semantic: {
    primary: {
      0: '#FFFFFF',
      50: '#FEFAE0', // linen
      100: '#FAEDCD', // vanilla
      200: '#E9EDC9', // tea green
      300: '#CCD5AE', // sage
      400: '#CCD5AE',
      500: '#CCD5AE',
      600: '#BFC8A3',
      700: '#B2BB98',
      800: '#A5AE8D',
      900: '#98A282',
      950: '#8B9577'
    },
    secondary: {
      0: '#FFFFFF',
    }
  }
});

export default MyPreset;
