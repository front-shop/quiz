import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

const CardActionAreaInner = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    heigh: '180px',
    overflow: 'hidden',
    '& img': {
      transition: 'all .8s ease-out'
    },
    '&:hover img': {
      transform: 'scale(1.05)'
    }
  }
}));

const CardStyled = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '& a': {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}));

const CardActionsStyled = styled(CardActions)(({ theme }) => ({
  '& a': {
    color: theme.palette.secondary.dark,
    transition: '.4s ease-in-out',
    disaply: 'inline-flex',
    padding: '8px',
    border: `1px solid ${theme.palette.secondary.light}`
  },
  '& a:hover': {
    color: theme.palette.common.white,
    background: theme.palette.secondary.dark
  }
}));

export { CardActionAreaInner, CardStyled, CardActionsStyled };
