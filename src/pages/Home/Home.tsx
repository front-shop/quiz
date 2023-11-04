import React from 'react';
import { Typography, Container } from '@mui/material';
import Search from '../../components/Search/Search';
import QuizItems from '../../components/Quiz/QuizItems/QuizItems';
import { MainWrapper } from './styled';

const Home = () => (
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

export default Home;
