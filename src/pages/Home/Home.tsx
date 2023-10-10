import React from 'react';
import { Typography, Container, styled } from '@mui/material';
import Search from '../../components/Search/Search';
import QuizItems from '../../components/Quiz/QuizItems';

const MainWrapper = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingbottom: theme.spacing(3),
  // [theme.breakpoints.up('sm')]: {
  //   minHeight: 'calc(100vh - 64px)',
  //   borderRight: '1px solid rgb(229, 234, 242)',
  // },
}));

export default function Home() {
  return (
    <Container>
      <MainWrapper>
        <Search />
        <Typography variant="h3">
          Home Page
        </Typography>
        <QuizItems />
      </MainWrapper>
    </Container>
  );
}
