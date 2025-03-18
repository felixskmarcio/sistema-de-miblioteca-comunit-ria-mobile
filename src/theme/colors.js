// Cores base
const palette = {
  blue: {
    light: '#4a90e2',
    dark: '#64b5f6'
  },
  gray: {
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121'
  },
  white: '#ffffff',
  black: '#000000',
  accent: {
    light: '#ff4081',
    dark: '#ff79b0'
  }
};

// Temas
export const lightTheme = {
  colors: {
    primary: palette.blue.light,
    background: palette.white,
    surface: palette.gray[100],
    text: {
      primary: palette.gray[900],
      secondary: palette.gray[600],
    },
    border: palette.gray[200],
    accent: palette.accent.light,
    card: palette.white,
    icon: palette.gray[600],
    searchBar: palette.gray[100],
  },
};

export const darkTheme = {
  colors: {
    primary: palette.blue.dark,
    background: palette.gray[900],
    surface: palette.gray[800],
    text: {
      primary: palette.white,
      secondary: palette.gray[400],
    },
    border: palette.gray[700],
    accent: palette.accent.dark,
    card: palette.gray[800],
    icon: palette.gray[400],
    searchBar: palette.gray[800],
  },
};
