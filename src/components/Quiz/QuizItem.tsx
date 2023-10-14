import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Button, CardActionArea, CardActions, styled,
} from '@mui/material';
import noImage from '../../assets/images/no-image.jpg';

interface IQuizItemProps {
  id: string,
  img?: string,
  title: string,
  description?: string,
}

const CardActionAreaInner = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    heigh: '180px',
    overflow: 'hidden',
    '& img': {
      transition: 'all .8s ease-out',
    },
    '&:hover img': {
      transform: 'scale(1.05)',
    },
  },

}));

export default function QuizItem({ item }: { item: IQuizItemProps }) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea href={`/quiz/${item.id}`}>
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
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={`/quiz/${item.id}`}
          sx={{ marginTop: 'auto' }}
        >
          Start
          {' '}
          {item.title}
          {' '}
          quiz
        </Button>
      </CardActions>
    </Card>
  );
}
