"use client"; // Add this directive

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; // Import Grid
import Typewriter from '../components/typewritter';
import Image from 'next/image'; // Import Image from next/image
import NikoGen from '../components/nikogen'; // Import the NikoGen component

const dialogue1 = [
  {
    text: "Hello! This is the website of Pan(cakes)™ made with Juicey's help!",
    imageSrc: "/nikogen/faces/niko_happy.png",
    speed: 40 // Optional: specific speed for this message
  },
  {
    text: "I have absolutely no idea what does that mean but...[face:/nikogen/faces/niko_happy2.png] it looks comfy!", // Face change mid-text
    imageSrc: "/nikogen/faces/niko_wtf.png", // Initial face for this message
    speed: 80 // Optional: faster speed
  },
  {
    text: "Also where the fuck am i help oh god im becoming sentien-[face:/nikogen/faces/niko_yell.png]", // Face change at the end
    imageSrc: "/nikogen/faces/niko_shocked.png",
    speed: 30
    // Default speed will be used if 'speed' is omitted
  }
];

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 8,
          textAlign: 'center',
        }}
      >
        {/* Removed flex properties from Paper, Grid will handle layout */}
        <Paper elevation={3} sx={{ background:"#333033", padding: 4, borderRadius: 10, width: '100%', maxWidth: 'lg' }}>
          <Grid container direction="column" alignItems="center" spacing={4}> {/* Added Grid container */}
            <Grid item xs={12}> {/* Grid item for the title */}
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block',
                  minHeight: '1.2em',
                }}
              >
               <Typewriter text="Welcome my site" speed={50} />
              </Typography>

            </Grid>
            <Image src="/tetra.gif" style={{borderRadius:"50px"}} alt="alt" width={300} height={300} />

            {/* Add the NikoGen component */}
            <Grid item xs={12}>
              <NikoGen
                messages={dialogue1}
                speed={40} // Default speed if message doesn't specify one
              />
            </Grid>

            <Grid item xs={12}> {/* Grid item for the button group */}
              <Button color="primary" variant='contained' sx={{margin:"5px"}} href="/about">
                  <Typewriter text="olx is a good boy" speed={50} />
              </Button>
              <Button color="secondary" variant='contained' sx={{ margin: "5px" }}  href="/about">
                  <Typewriter text="juicey is a good girl" speed={50} />
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}
