import { PaletteMode } from '@mui/material';
import { amber, grey, purple } from '@mui/material/colors';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: amber,
        divider: amber[200],
        text: {
          primary: grey[900],
          secondary: grey[800]
        },
        background: {
          level1: '#F0F4F8'
        }
      }
      : {
        // palette values for dark mode
        background: {
          default: purple[500]
        },
        text: {
          primary: '#fff',
          secondary: grey[500]
        }
      })
  }
});

export default getDesignTokens;
