import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  Button, CardActionArea, CardActions
} from '@mui/material';
import noImage from '../../assets/images/no-image.jpg';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function QuizItem({ item }: any) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={item.img ? item.img : noImage}
          alt="green iguana"
        />
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
        <Button size="small" color="primary">
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
