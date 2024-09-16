import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';

const dummyUser = {
  user: 'admin@gmail.com',
  password: 'admin123',
};

function LoginPage({ setAuth }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem('auth'));
    if (authData && authData.isAuthenticate) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === dummyUser.user && password === dummyUser.password) {
      const authData = { isAuthenticate: true, user: userId };
      localStorage.setItem('auth', JSON.stringify(authData));
      setAuth(authData);
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        minHeight: '100vh',
      }}
    >
      <Paper
        sx={{
          padding: 4,
          maxWidth: '400px',
          width: '100%',
          textAlign: 'center',
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          LOGIN
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="User ID"
            variant="outlined"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            // color="primary"
            fullWidth
            sx={{ marginTop: 2,background:"linear-gradient(45deg, #000000 30%, #4f4f4f 90%)" }}
          >
            Login
          </Button>
        </form>
        <Typography variant='small' sx={{ color:'gray'}}>
          Test user credentials :<br></br> 
          <span>userId: admin@gmail.com</span><br></br>
          <span>password: admin123</span>
        </Typography>
      </Paper>
    </Container>
  );
}

export default LoginPage;
