import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import routes from '../../constants/routes';
import { NavWrapper, ListItemWrapper } from './styled';

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
