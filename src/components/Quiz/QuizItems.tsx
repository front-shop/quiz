import React from 'react';
import { Grid } from '@mui/material';
import QuizItem from './QuizItem';
import itemData from '../../db.json';

export default function QuizItems() {
  return (
    <div>
      <Grid container spacing={2} sx={{ alignItems: 'stretch' }}>
        {itemData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.img}>
            <QuizItem item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
