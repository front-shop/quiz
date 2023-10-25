import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

const NotFound = () => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh'
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
      <Link
        to={`/${routes.homepage}`}
        color="secondary">
          Back Home
      </Link>
    </Box>
);
export default NotFound;
