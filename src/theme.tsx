import { PaletteMode } from '@mui/material';
import { purple, grey } from '@mui/material/colors';

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
        primary: purple,
        divider: purple[200],
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
