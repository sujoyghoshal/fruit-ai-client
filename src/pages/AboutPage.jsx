import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const AboutPage = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        padding: 4,
        textAlign: 'center',
        marginTop: 15,
        background: 'linear-gradient(to right, #f7f8fa, #eaeef1)',
        borderRadius: 3,
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: 6,
          margin: 'auto',
          maxWidth: '900px',
          background: 'linear-gradient(135deg, #ffffff 0%, #f1f1f1 100%)',
          borderRadius: 3,
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.03)',
            boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.25)',
          },
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          About Fruit.ai
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            fontSize: '1.2rem',
            color: '#333',
            marginTop: 2,
            lineHeight: 1.8,
          }}
        >
          Fruit.ai is a health manager application designed to provide users with
          essential information about fruits, a chatbot for fruit queries, a translator
          for translating fruit names into regional languages, and a FAQ section where
          users can find answers to commonly asked questions.
        </Typography>
      </Paper>

      {/* Add a fruit-themed background */}
      <Box
        sx={{
          marginTop: 4,
          background: 'url("/path-to-your-fruit-background.jpg")',
          backgroundSize: 'cover',
          height: 200,
          borderRadius: 2,
        }}
      />
    </Container>
  );
};

export default AboutPage;
