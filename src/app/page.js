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
import Link from '@mui/material/Link'; // Keep for potential future use, but replace in Links section
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton'; // For potential actions on image list items
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info'; // Example icon for ImageListItemBar
import { FaTwitter, FaLink } from 'react-icons/fa'; // Using FaLink as placeholder for Bluesky
import YouTube from '@mui/icons-material/YouTube'; // Placeholder for YouTube icon

export const Bluesky = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>

    <path fill="currentColor" d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565C.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479c.815 2.736 3.713 3.66 6.383 3.364c.136-.02.275-.039.415-.056c-.138.022-.276.04-.415.056c-3.912.58-7.387 2.005-2.83 7.078c5.013 5.19 6.87-1.113 7.823-4.308c.953 3.195 2.05 9.271 7.733 4.308c4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056c2.67.297 5.568-.628 6.383-3.364c.246-.828.624-5.79.624-6.478c0-.69-.139-1.861-.902-2.206c-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8"></path>

  </svg>
)

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

const itemData = [
  {
    img: '/arts/self/cat.png',
    title: 'Dumb fucking cat',
    author: '@pan(cakes)™',
  },
  {
    img: '/arts/self/saint.png',
    title: 'sait',
    author: '@pan(cakes)™',
  },
  {
    img: '/arts/self/ivocloseup.jpeg',
    title: 'ivo close up',
    author: '@pan(cakes)™',
  },
  {
    img: '/arts/self/slugniko.png',
    title: 'slug niko ',
    author: '@pan(cakes)™',
  },
  {
    img: '/arts/self/yomivo.png',
    title: 'peak 3',
    author: '@smg0/yom',
  },
  {
    img: '/arts/self/auroraborealisivo.png',
    title: 'peak ',
    author: '@aurora_borealis',
  }, 
  { 
    img: '/arts/self/auroraborealisivo2.png',
    title: 'peak 2',
    author: '@aurora_borealis',

  }, 
  { 
    img: '/arts/self/tuskact1.jpeg',
    title: 'tusk act 1',
    author: '@pan(cakes)™',

  }, 
  { 
    img: '/arts/self/steelball.jpeg',
    title: 'steel ball',
    author: '@pan(cakes)™',

  }, 
  { 
    img: '/arts/self/mcdonalds.png',
    title: 'mcdonalds saint',
    author: '@pan(cakes)™',

  }, 
  { 
    img: '/arts/self/cuddling.jpeg',
    title: 'cuddling',
    author: '@pan(cakes)™',

  }, 
  { 
    img: '/arts/self/drawings.png',
    title: 'drawings 1',
    author: '@pan(cakes)™',

  }, 
  { 
    img: '/arts/self/drawings2.jpeg',
    title: 'drawings 2',
    author: '@pan(cakes)™',

  }, 
  { 
    img: '/arts/self/ivoheart.png',
    title: 'ivo heart',
    author: '@pan(cakes)™',
    

    

  },
  {
    img: '/arts/self/ivoquickdraw.jpeg',
    title: 'quick ivo',
    author: '@pan(cakes)™',
  },

  { 
    img: '/arts/self/diablo.jpeg',
    title: 'diablo',
    author: '@pan(cakes)™',

  }, 


  { 
    img: '/arts/self/slugcats.png',
    title: 'slugcats',
    author: '@pan(cakes)™',

  }, 
  { 
    img: '/arts/self/frutt.png',
    title: 'frutt bday',
    author: '@pan(cakes)™',

  }, 
  
  { 
    img: '/arts/self/tigershark alex.jpeg',
    title: 'tigershark alex',
    author: '@pan(cakes)™',

  }, 

  { 
    img: '/arts/self/niko.jpeg',
    title: 'niko',
    author: '@pan(cakes)™',

  }, 

  { 
    img: '/arts/self/goku.jpeg',
    title: 'goku',
    author: '@pan(cakes)™',

  }, 

  { 
    img: '/arts/self/saont.png',
    title: 'ibis saint',
    author: '@pan(cakes)™',

  }, 
  { 
    img: '/arts/self/zombkoart.jpeg',
    title: 'zombko',
    author: '@pan(cakes)™',

  }, 
  {                       
    img: '/arts/self/spearmint.png',
    title: 'spearmi',
    author: '@pan(cakes)™',     
    
  }, 
  { 
    img: '/arts/self/arched bday.jpeg',
    title: "arched's bday",
    author: '@pan(cakes)™',

  }, 
  { 
    img: '/arts/self/arched slug.jpeg',
    title: 'slugcat arched',
    author: '@pan(cakes)™',

  }, 
  { 
    img: '/arts/self/kittys.png',
    title: 'epicness',
    author: '@ram/niki_oneshot',
    
  },
];

export default function HomePage() {
  const [artSearch, setArtSearch] = React.useState(''); // State for art search

  const filteredArt = itemData.filter(item =>
    item.title.toLowerCase().includes(artSearch.toLowerCase()) ||
    item.author.toLowerCase().includes(artSearch.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ paddingBottom: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: 8,
          textAlign: 'center',
        }}
      >
        {/* Main Content Paper */}
        <Paper elevation={3} sx={{ background:"#333033", padding: 4, borderRadius: 10, width: '100%', maxWidth: 'lg', marginBottom: 4 }}>
          <Grid container direction="column" alignItems="center" spacing={4}>
            <Grid item xs={12}>
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
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' }
                }}
              >
                <Typewriter text="Welcome to my website" speed={50} />
              </Typography>
            </Grid>
            <Grid item>
              <Image src="/tetra.gif" style={{borderRadius:"50px"}} alt="Tetra spinning" width={300} height={300} priority />
            </Grid>
            <Grid item xs={12}>
              <NikoGen
                messages={dialogue1}
                speed={40}
              />
            </Grid>
            <Grid item xs={12}>
              <Button color="primary" variant='contained' sx={{margin:"5px"}} href="https://bsky.app/profile/olxgs.bsky.social">
                <Typewriter text="olxgs is an amazing boyfriend" speed={50} />
              </Button>
              <Button color="secondary" variant='contained' sx={{ margin: "5px" }} href="https://bsky.app/profile/juicey.falseshot.tech">
                <Typewriter text="juicey is an amazing girlfriend" speed={50} />
              </Button>
            </Grid>
          </Grid>
        </Paper>

        {/* New Sections Grid */}
        <Grid container spacing={4} justifyContent="center">

          {/* About Me Section */}
          <Grid item xs={12} md={6}>
            <Paper variant="outlined" elevation={0} sx={{ borderColor: '#555', background:"#403d40", padding: 3, borderRadius: 5, height: '100%', textAlign: 'left' }}>
              <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>About Me</Typography>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Image src="/nikogen/faces/niko_neutral.png" alt="Avatar Placeholder" width={80} height={80} style={{ borderRadius: '50%' }} />
                </Grid>
                <Grid item xs>
                  <Typography variant="h6">
                    Pan(cakes)™
                  </Typography>
                  <Typography variant="body1">
                   Dumb gay genderfluid femboy that does silly stuff and uses linux, if you need to contact me my email is pizzerton@gmail.com
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

            {/* Links Section */}
            <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ background:"#403d40", padding: 3, borderRadius: 5, height: '100%' }}>
              <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: 3 }}>Links</Typography>
              <Grid container spacing={3} justifyContent="center" alignItems="flex-start">
              {/* GitHub */}
              <Grid item xs={4} sx={{ textAlign: 'center' }}>
                <IconButton
                aria-label="GitHub Profile"
                href="https://github.com/Pizzerton"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  backgroundColor: '#333', // GitHub-like color
                  '&:hover': { backgroundColor: '#555' },
                  width: 64, // Larger button
                  height: 64, // Larger button
                  marginBottom: 1,
                }}
                >
                <GitHubIcon sx={{ fontSize: '2rem' }} /> {/* Larger icon */}
                </IconButton>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Code & Projects
                </Typography>
              </Grid>

              {/* YouTube */}
              <Grid item xs={4} sx={{ textAlign: 'center' }}>
                <IconButton
                aria-label="YouTube Channel"
                href="https://www.youtube.com/@Pizzerton" // Corrected link
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  backgroundColor: '#FF0000', // YouTube red
                  '&:hover': { backgroundColor: '#cc0000' },
                  width: 64,
                  height: 64,
                  marginBottom: 1,
                }}
                >
                {/* Assuming you have YouTube icon imported, if not, install @mui/icons-material */}
                {/* import YouTubeIcon from '@mui/icons-material/YouTube'; */}
                {/* Replace FaTwitter with YouTubeIcon if available */}
                <YouTube sx={{ fontSize: '2rem' }} /> {/* Placeholder - Replace with YouTubeIcon */}
                </IconButton>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Videos
                </Typography>
              </Grid>

              {/* Bluesky */}
              <Grid item xs={4} sx={{ textAlign: 'center' }}>
                <IconButton
                aria-label="Bluesky Profile"
                href="https://bsky.app/profile/pizzerton.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'white',
                  backgroundColor: '#007bff', // Bluesky blue
                  '&:hover': { backgroundColor: '#0056b3' },
                  width: 64,
                  height: 64,
                  marginBottom: 1,
                }}
                >
                <Bluesky sx={{ fontSize: '2rem' }} /> {/* Generic link icon */}
                </IconButton>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                Social & Updates
                </Typography>
              </Grid>
              </Grid>
            </Paper>
            </Grid>

            {/* Art Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ background:"#403d40", padding: 0, width:"100%", borderRadius: 5, height: '100%', overflow: 'hidden', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
              <Accordion sx={{ background: 'transparent', color: 'inherit', '&.Mui-expanded': { margin: 0 }, boxShadow: 'none', flexShrink: 0 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}
                >
                  <Typography variant="h4">Art Showcase</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 2, overflowY: 'auto', maxHeight: 'calc(100% - 65px)' }}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Search Art..."
                    value={artSearch}
                    onChange={(e) => setArtSearch(e.target.value)}
                    sx={{ marginBottom: 2, input: { color: 'white' }, label: { color: 'rgba(255, 255, 255, 0.7)' } }}
                  />
                  <ImageList variant="masonry" cols={3} gap={8}>
                    {filteredArt.map((item) => (
                      <ImageListItem key={item.img}>
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={248}
                          height={248}
                          loading="lazy"
                          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                          style={{ display: 'block', width: '100%', height: 'auto', borderRadius: '4px' }}
                        />
                        <ImageListItemBar
                          title={item.title}
                          subtitle={item.author}
                          actionIcon={
                            <IconButton
                              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                              aria-label={`info about ${item.title}`}
                            >
                              <InfoIcon />
                            </IconButton>
                          }
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                  {filteredArt.length === 0 && (
                    <Typography sx={{ textAlign: 'center', marginTop: 2 }}>No art found matching your search.</Typography>
                  )}
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Grid>

          {/* Other Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ background:"#403d40", padding: 3, borderRadius: 5, height: '100%' }}>
              <Typography variant="h4" gutterBottom>Other</Typography>
              <Link color='neutral' href="https://drive.google.com/drive/u/0/folders/1gjUdmcpE6hzyfVX3UikN0R0EvZmMjwlW" underline="hover">
                My current minecraft modpack
              </Link>
              <Typography variant="body1">Miscellaneous stuff, maybe project updates or random thoughts?</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                <Image src="/nikogen/faces/niko_thinking.png" alt="Other Placeholder" width={100} height={100} />
              </Box>
            </Paper>
          </Grid>

        </Grid>
      </Box>
    </Container>
  );
}
