"use client"; // Add this directive

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
export default function HomePage() {
  return (
    <Container maxWidth="lg"> {/* Use a suitable maxWidth */}
      <Box
        sx={{
          // minHeight: '100vh', // Remove or adjust if full height isn't needed
          display: 'flex',
          justifyContent: 'center', // Center horizontally
          // alignItems: 'center', // Remove vertical centering
          paddingTop: 4, // Add some padding at the top
          textAlign: 'center', // Center text within Typography
        }}
      >
        <Paper elevation={3} sx={{ background:"#333033", padding: 4, borderRadius: 10 }}>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
            WebkitBackgroundClip: 'text', // For Safari/Chrome
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block', // Necessary for background clip to work correctly sometimes
          }}
        >
         Welcome to my site


        </Typography>
                 <Button variant="contained" color="primary" href="/about">
          Go to About Page
        </Button>
                 <Button variant="contained" color="secondary" href="/about">
          Go to About Page
        </Button>
        </Paper>
      </Box>
      
    </Container>
  );
}
