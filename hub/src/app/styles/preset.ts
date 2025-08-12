// my-preset.ts
import {definePreset} from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const primary = {
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
}
export const secondary = {
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
}


const MyPreset = definePreset(Aura, {
  // main brand color (tawny)
  semantic: {
    primary,
    secondary,
  },
  components: {
    card: {
      root: {
        background: primary[700],
        borderRadius: '1rem'
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
    }
  },
});

export default MyPreset;
