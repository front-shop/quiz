import { styled } from '@mui/material/styles';

const SearchWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1),
    border: '1px solid #ccc'
  }
}));

export { SearchWrapper };
