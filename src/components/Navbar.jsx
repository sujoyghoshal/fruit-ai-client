import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, IconButton, Menu, MenuItem, useMediaQuery, useTheme, Slide, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

function Navbar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
    handleMenuClose();
  };

  // Framer Motion animation variants
  const menuItemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <Slide in direction="down" timeout={500}>
      <AppBar
        position="fixed"
        sx={{
          background: 'linear-gradient(135deg, #3f51b5 30%, #1e88e5 90%)',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <Typography
              variant="h5"
              component={motion.div}
              whileHover={{ scale: 1.2, rotate: [0, 5, -5, 0] }}
              sx={{
                flexGrow: 1,
                fontWeight: 'bold',
                cursor: 'pointer',
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Fruit.ai
            </Typography>
          </motion.div>

          {isSmallScreen ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                PaperProps={{ style: { width: '200px' } }}
              >
                {['Home', 'Chatbot', 'Translator', 'FAQ', 'About'].map((name, index) => (
                  <motion.div
                    key={name}
                    initial="hidden"
                    animate="visible"
                    variants={menuItemVariant}
                    custom={index}
                  >
                    <MenuItem onClick={handleMenuClose} component={Link} to={`/${name.toLowerCase()}`}>
                      {name}
                    </MenuItem>
                  </motion.div>
                ))}
                <motion.div initial="hidden" animate="visible" variants={menuItemVariant}>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </motion.div>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {['Home', 'Chatbot', 'Translator', 'FAQ', 'About'].map((name, index) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.2, color: '#ffeb3b' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Button
                    color="inherit"
                    component={Link}
                    to={`/${name.toLowerCase()}`}
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: 'Poppins, sans-serif',
                      color: 'white',
                    }}
                  >
                    {name}
                  </Button>
                </motion.div>
              ))}
              <motion.div
                whileHover={{ scale: 1.2, color: '#ffeb3b' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Button
                  color="inherit"
                  onClick={handleLogout}
                  sx={{
                    fontWeight: 'bold',
                    fontFamily: 'Poppins, sans-serif',
                    color: 'white',
                  }}
                >
                  Logout
                </Button>
              </motion.div>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Slide>
  );
}

export default Navbar;
