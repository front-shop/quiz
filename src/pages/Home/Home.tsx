import React from 'react';
import { Typography, Container, styled } from '@mui/material';
import Search from '../../components/Search/Search';
import QuizItems from '../../components/Quiz/QuizItems';

const MainWrapper = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingbottom: theme.spacing(3)
}));

export default function Home() {
  return (
    <Container>
      <MainWrapper>
        <Search />
        <Typography variant="h3" pb={3} pt={3}>
          Quizzes
        </Typography>
        <QuizItems />
      </MainWrapper>
    </Container>
  );
}
