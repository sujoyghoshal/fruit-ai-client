import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const HomePage = () => {
  // For dynamic background color animation based on mouse movement
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();

    const x = (clientX / width) * 100;
    const y = (clientY / height) * 100;

    setBackgroundPosition({ x, y });
  };

  const cardsData = [
    {
      title: 'Chatbot',
      link: '/chatbot',
      image: '/assets/chat.jpg',
    },
    {
      title: 'Translator',
      link: '/translator',
      image: '/assets/translate.png',
    },
    {
      title: 'FAQ',
      link: '/faq',
      image: '/assets/faqs.png',
    },
    {
      title: 'About',
      link: '/about',
      image: '/assets/about.jpg',
    },
  ];

  return (
    <Box
      onMouseMove={handleMouseMove}
      sx={{
        padding: 4,
        textAlign: 'center',
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 5,
        background: `radial-gradient(circle at ${backgroundPosition.x}% ${backgroundPosition.y}%, #f5f7fa, #c3cfe2)`,
        transition: 'background 0.3s ease',
        borderRadius: 3,
      }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #ff6b6b 30%, #ffb56b 90%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          Welcome to Fruit.ai
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <Typography
          variant="subtitle1"
          sx={{ marginBottom: 4, color: '#4a4a4a', fontSize: '1.2rem', fontFamily: 'Poppins, sans-serif' }}
        >
          Discover our tools to learn more about fruits, health benefits, and more.
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 4,
          maxWidth: '1200px',
          width: '100%',
          justifyItems: 'center',
        }}
      >
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5, ease: 'easeOut' }}
            style={{ width: '100%', maxWidth: '300px' }}
          >
            <Card
              sx={{
                borderRadius: '20px',
                overflow: 'hidden',
                transition: 'transform 0.4s, box-shadow 0.4s',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                '&:hover': {
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  transform: 'translateY(-10px)',
                },
              }}
              component={Link}
              to={card.link}
            >
              <CardMedia
                component="img"
                height="200"
                image={card.image}
                alt={card.title}
                sx={{
                  filter: 'brightness(0.9)',
                  transition: 'filter 0.4s',
                  '&:hover': {
                    filter: 'brightness(1.1)',
                  },
                }}
              />
              <CardContent
                sx={{
                  backgroundColor: '#fff',
                  padding: '20px',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                    color: '#333',
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {card.title}
                </Typography>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Button
                    component={Link}
                    to={card.link}
                    sx={{
                      background: 'linear-gradient(45deg, #ff758c, #ff7eb3)',
                      color: '#fff',
                      marginTop: 2,
                      padding: '10px 24px',
                      borderRadius: '50px',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      transition: 'background 0.3s',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #ff7eb3, #ff758c)',
                      },
                    }}
                  >
                    Explore {card.title}
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
