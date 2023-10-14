import React from 'react';
import {
  Typography, Container, List, ListItem, ListItemText, Divider
} from '@mui/material';

export default function About() {
  return (
    <Container>
      <Typography variant="h2" pb={4} pt={4} sx={{ textAlign: 'center' }}>
        About Us
      </Typography>
      <Typography variant="body1" pb={2}>
        Welcome to
        <b> QUIZ</b>
        ,
        your ultimate destination for challenging and informative technical
        quizzes! We are passionate about technology and learning, and we`ve created this platform
        to share our love for all things tech with you.
      </Typography>
      <Divider />
      <Typography variant="h4" pb={2} pt={3}>
        Our Mission
      </Typography>
      <Typography variant="body1" pb={2}>
        Our mission is simple yet powerful: to make learning technology fun, engaging,
        and accessible to everyone. We believe that knowledge is the key to empowerment,
        and what better way to gain knowledge than through interactive quizzes?
      </Typography>
      <Typography variant="h4" pb={2} pt={3}>
        Who We Are
      </Typography>
      <Typography variant="body1" pb={2}>
        We are a team of dedicated frontend developers and tech enthusiasts who are
        committed to providing you with the best online quiz experience.
        Our team includes experts in various fields of technology,
        ensuring that our quizzes are not only educational but also up-to-date with
        the latest industry trends.
      </Typography>
      <Typography variant="h4" pb={1} pt={3}>
        What We Offer
      </Typography>
      <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
        <ListItem disableGutters>
          <ListItemText
            primary="Diverse Quiz Topics:"
            secondary="We cover a wide range of technical subjects,
            from programming languages like JavaScript and Python to data science, cybersecurity, and more.
            No matter your tech interest, we've got quizzes for you."
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            primary="Challenge Yourself:"
            secondary="Our quizzes are designed to challenge your knowledge and problem-solving skills.
            Whether you're a beginner or an experienced tech professional,
            you'll find quizzes suited to your level."
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            primary="Learn as You Play:"
            secondary="We believe that learning should be fun, so we've
            made sure that our quizzes are enjoyable and informative.
            You'll not only test your knowledge but also gain valuable insights with every question."
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            primary="Community Engagement:"
            secondary="Join our growing community of tech enthusiasts! Connect with fellow learners,
            discuss quiz questions, and share your knowledge with others."
          />
        </ListItem>
      </List>
      <Typography variant="h4" pb={1} pt={3}>
        Why Choose Us
      </Typography>
      <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
        <ListItem disableGutters>
          <ListItemText
            primary="Quality Content:"
            secondary="We take pride in crafting quizzes that are accurate, informative, and engaging.
            Our team of experts ensures that every quiz meets our high standards."
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            primary="User-Friendly:"
            secondary="Our website is designed with you in mind. It's easy to navigate,
            and you can start taking quizzes right away. No complicated sign-ups or downloads required."
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            primary="Constant Updates:"
            secondary="Technology evolves rapidly, and so do our quizzes.
            We regularly update our content to keep it relevant and fresh."
          />
        </ListItem>
      </List>
      <Typography variant="h4" pb={2} pt={3}>
        Contact Us
      </Typography>
      <Typography variant="body1" pb={2}>
        Have a question, suggestion, or feedback? We`d love to hear
        from you! Feel free to contact us anytime.
      </Typography>
      <Typography variant="body1" pb={4}>
        Thank you for choosing QUIZ as your go-to platform for technical quizzes.
        We look forward to being a part of your learning journey and helping you expand your
        tech knowledge in a fun and interactive way.
      </Typography>
      <Divider />
      <Typography variant="h3" pb={3} pt={3} sx={{ textAlign: 'center' }}>
        Happy quizzing!
      </Typography>
    </Container>
  );
}
