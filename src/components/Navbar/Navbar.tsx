import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material';
import routes from '../../constants/routes';

const NavWrapper = styled('nav')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(4)
  }
}));

const ListItemWrapper = styled(ListItem)(({ theme }) => ({
  '& a': {
    textAlign: 'left',
    width: '100%',
    textDecoration: 'none',
    padding: '8px 16px 8px 24px',
    color: theme.palette.text.primary,
    transition: '.3s linear'
  },
  '& a.active': {
    background: 'rgba(186, 104, 200, 0.4)'
  },
  '& .active .MuiTypography-root': {
    fontWeight: '500'
  },
  [theme.breakpoints.up('sm')]: {
  }
}));

const Navbar = () => (
    <NavWrapper>
      <List>
        <ListItemWrapper disablePadding>
          <NavLink
            to={`/${routes.homepage}`}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <ListItemText primary="Home" />
          </NavLink>
        </ListItemWrapper>
        <ListItemWrapper disablePadding>
          <NavLink
            to={`/${routes.about}`}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <ListItemText primary="About" />
          </NavLink>
        </ListItemWrapper>
      </List>
    </NavWrapper>
);
export default Navbar;
