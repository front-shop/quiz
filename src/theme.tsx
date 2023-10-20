import { PaletteMode } from '@mui/material';
import { amber, grey } from '@mui/material/colors';

const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: [
      'Inter'
    ].join(',')
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: amber,
        divider: amber[200],
        text: {
          primary: grey[900],
          secondary: grey[700]
        }
      }
      : {
        text: {
          primary: '#fff',
          secondary: grey[400]
        }
      })
  }
});

export default getDesignTokens;
