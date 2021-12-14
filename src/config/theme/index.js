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
    }
  },
  fonts: {
    heading: 'TTJenevers',
    body: 'TTJenevers',
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
