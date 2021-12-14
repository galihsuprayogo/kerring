import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    custom: {
      100: '#FFFFFF',
      200: '#65626380',
      300: '#575A5C',
      900: '#0A1D37'
    }
  },
  fontConfig: {
    TTJenevers: {
      100: {
        normal: 'TTJenevers-Light',
        italic: 'TTJenevers-LightItalic'
      },
      200: {
        normal: 'TTJenevers-Regular',
        italic: 'TTJenevers-Italic'
      },
      300: {
        normal: 'TTJenevers-Medium',
        italic: 'TTJenevers-MediumItalic'
      },
      400: {
        normal: 'TTJenevers-Bold',
        italic: 'TTJenevers-BoldItalic'
      },
      500: {
        normal: 'TTJenevers-ExtraBold',
        italic: 'TTJenevers-ExtraBoldItalic'
      },
      600: {
        italic: 'TTJenevers-BlackItalic'
      },
    },
    Nunito: {
      100: {
        normal: 'Nunito-ExtraLight',
        italic: 'Nunito-ExtraLightItalic'
      },
      200: {
        normal: 'Nunito-Light',
        italic: 'Nunito-LightItalic'
      },
      300: {
        normal: 'Nunito-Regular',
        italic: 'Nunito-RegularItalic'
      },
      400: {
        normal: 'Nunito-Medium',
        italic: 'Nunito-MediumItalic'
      },
      500: {
        normal: 'Nunito-SemiBold',
        italic: 'Nunito-SemiBoldItalic'
      },
      600: {
        normal: 'Nunito-Bold',
        italic: 'Nunito-BoldItalic'
      },
      700: {
        normal: 'Nunito-ExtraBold',
        italic: 'Nunito-ExtraBoldItalic'
      },
      800: {
        normal: 'Nunito-Black',
        italic: 'Nunito-BlackItalic'
      }
    }
  },
  fonts: {
    heading: 'TTJenevers',
    body: 'Nunito',
    mono: 'TTJenevers',
  },
  config: {
    breakpoints: {
      base: 0,
      sm: 480,
      md: 768,
      lg: 992,
      xl: 1280,
    }
  }
});
