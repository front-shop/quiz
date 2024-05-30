import React from 'react';
import {
  Typography, Container, Divider
} from '@mui/material';
import { IAboutInfo, AboutInfo } from './constants';

const About = () => (
    <Container>
      <Typography variant="h2" pb={4} pt={4} sx={{ textAlign: 'center' }}>
        About Us
      </Typography>
      <Typography variant="body1" pb={3}>
        Welcome to <strong> QUIZ</strong>, your ultimate destination for challenging and informative technical
        quizzes! We are passionate about technology and learning, and we`ve created this platform
        to share our love for all things tech with you.
      </Typography>
      <Divider sx={{ marginBottom: '24px', marginTop: '24px' }}/>
      {AboutInfo.map((item: IAboutInfo) => (
        <React.Fragment key={item.id}>
          <Typography variant="h4" pb={2} pt={3} sx={{ fontWeight: 'medium' }}>
            {item.title}
          </Typography>
          <Typography variant="body1" pb={2}>
            {item.text}
          </Typography>
        </React.Fragment>
      ))}
      <Divider sx={{ marginTop: '32px' }} />
      <Typography variant="h3" pb={3} pt={3} mt={3} sx={{ textAlign: 'center' }}>
        Happy quizzing!
      </Typography>
    </Container>
);

export default About;
