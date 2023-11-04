import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material';

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

export { NavWrapper, ListItemWrapper };
