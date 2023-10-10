import React from 'react';
import { IconButton, styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ColorModeContext from '../config/color-context';

const ThemeToglerWrapper = styled('div')(() => ({
  position: 'absolute',
  top: '12px',
  right: '15px',
}));

export default function ThemeToggler() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <ThemeToglerWrapper>
      <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </ThemeToglerWrapper>
  );
}
