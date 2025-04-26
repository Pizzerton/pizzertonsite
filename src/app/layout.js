import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import theme from '../theme'; // Import the custom theme
import "./globals.css";

// Remove Geist font imports

export const metadata = {
  title: "MUI Example App", // Updated title
  description: "A simple MUI example page", // Updated description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Apply the custom theme */}
        <ThemeProvider theme={theme}>
          {/* Apply MUI's baseline CSS */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
