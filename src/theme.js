"use client"; // Add this directive for client-side theme usage
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark', // Set the default mode to light
    primary: {
      main: '#5511c2', // Use purple as the primary color
    },
    secondary: {
      main: '#f92628', // Example secondary color
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          borderRadius: '50px', // Make buttons rounded
        },
      },
    },
  },
});

export default theme;
