import React from 'react';
import { Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import noImage from '../../../assets/images/no-image.jpg';
import { IQuizItem } from '../../../store/services/quizes/constant';
import routes from '../../../constants/routes';
import { CardActionAreaInner, CardStyled, CardActionsStyled } from './styled';

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
          Start {item.title} quiz
        </Link>
      </CardActionsStyled>
    </CardStyled>
);
export default QuizItem;
