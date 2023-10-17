import React from 'react';
import { Outlet } from 'react-router-dom';
import { Grid, styled } from '@mui/material';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const MainWrapper = styled('main')(({ theme }) => ({
  background: theme.palette.background.default
}));

const Layout = () => (
    <>
      <Header />
      <MainWrapper>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={3}
            md={2}
            sx={{ display: { xs: 'none', sm: 'block' }, borderRight: '1px solid rgb(229, 234, 242)' }}>
            <Navbar />
          </Grid>
          <Grid item xs={12} sm={9} md={8}>
            <Outlet />
          </Grid>
        </Grid>
      </MainWrapper>
    </>
);
export default Layout;