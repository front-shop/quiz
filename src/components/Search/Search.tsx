import React from 'react';
import { Typography, styled } from '@mui/material';

const SearchWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1),
    border: '1px solid #ccc'
  }
}));

export default function Search() {
  return (
    <SearchWrapper>
      <Typography variant="h5">
        Search bar
      </Typography>
    </SearchWrapper>
  );
}
