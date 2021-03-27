import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';

const fonts = {
  ...chakraTheme.fonts,
  body: `Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  heading: `Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol"`,
};

const colors = {
  brand: {
    primary: '#191D27',
    secondary: '#39404F',
    white: '#FFFFFF',
    whitesmoke: '#F2F7F7',
    green: '#00B946',
    gray: '#6F9094',
    blue: '#2074C4',
  },
};

const overrides = {
  ...chakraTheme,
  colors,
  // fonts,
};

const customTheme = extendTheme(overrides);

export default customTheme;
