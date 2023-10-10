import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material';

const NavWrapper = styled('nav')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(3),
    minHeight: 'calc(100vh - 64px)',
    borderRight: '1px solid rgb(229, 234, 242)',
  },
}));

export default function Navbar() {
  return (
    <NavWrapper>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/about">
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
      </List>
    </NavWrapper>
  );
}
