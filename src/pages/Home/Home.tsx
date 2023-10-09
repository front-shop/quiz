import React from 'react';
import { Box, Typography } from '@mui/material';
import ThemeToggler from '../../components/ThemeToggler';
import logo from '../../logo.svg';

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          maxWidth: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          p: 3,
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <ThemeToggler />
      </Box>
      <Typography variant="h3">
        Home Page
      </Typography>
    </>

  );
}
