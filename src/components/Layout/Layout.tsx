import React from 'react';
import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Navbar />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Outlet />
          </Grid>
        </Grid>
      </main>
      <Footer />
    </>
  );
}
