import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

export default function NotFound() {
  const error = useRouteError() as Error;
  console.log('err', error);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: 'background.default'
      }}
    >
      <Typography variant="h2">Oops!</Typography>
      <Typography variant="h1">404</Typography>
      <Typography
        variant="body1"
        sx={{ p: 3 }}
      >
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="outlined" href="/" color="secondary">Back Home</Button>
    </Box>
  );
}
