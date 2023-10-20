import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  CardActions, styled
} from '@mui/material';
import noImage from '../../assets/images/no-image.jpg';
import { IQuizItem } from '../../store/services/quizes/constant';
import routes from '../../constants/routes';

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

const QuizItem = ({ item }: { item: IQuizItem }) => (
    <CardStyled sx={{ height: '100%' }}>
      <Link to={`/${routes.quiz.key}/${item.title}`} state={{ quizId: item.id }}>
        <CardActionAreaInner>
          <CardMedia
            component="img"
            height="180"
            image={item.img || noImage}
            alt={item.title}
          />
        </CardActionAreaInner>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
      </Link>
      <CardActionsStyled sx={{ padding: '16px' }}>
        <Link to={`/${routes.quiz.key}/${item.title}`} state={{ quizId: item.id }}>
          Start
          {' '}
          {item.title}
          {' '}
          quiz
        </Link>
      </CardActionsStyled>
    </CardStyled>
);
export default QuizItem;
