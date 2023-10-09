import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Navbar() {
  return (
    <nav>
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
    </nav>
  );
}
