import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { PreloaderWrapper } from './styled';

const Preloader = () => (
  <PreloaderWrapper>
    <CircularProgress color="inherit"/>
  </PreloaderWrapper>
);
export default Preloader;
