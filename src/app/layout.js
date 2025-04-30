import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline'; // Import CssBaseline for consistent styling
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import theme from '../theme'; // Import the custom theme
import "./globals.css";

// Remove Geist font imports

// Define comprehensive metadata
export const metadata = {
  // metadataBase: new URL('https://your-domain.com'), // Uncomment and replace with your actual domain when available
  title: {
    template: "%s | Pan's website!", // Title template for child pages
    default: "Pan's website!", // Default title for root layout and pages without title
  },
  description: "Pan doing silly stuff with website oh nyos!!!.", // More descriptive
  generator: 'Next.js',
  applicationName: 'Pans Website', // Name of the application
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'Cute', 'Pan', 'Portfolio'], // Add relevant keywords
  authors: [{ name: 'create-juicey-app', name: 'Pizzerton' }], // Replace with your details
  creator: 'Pizzerton', // Replace with your details
  publisher: 'Vercel', // Replace with your details
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Pizzerton - Welcome!',
    description: 'A work in progress website made with the help of JuiceyDev.',
    // url: 'https://your-domain.com', // Uncomment and replace
    siteName: 'Pizzerton',
    // images: [ // Uncomment and add images when available, ensure absolute URLs or use metadataBase
    //   {
    //     url: 'https://your-domain.com/og-image.png', // Must be an absolute URL
    //     width: 800,
    //     height: 600,
    //     alt: 'Pizzerton Website Open Graph Image',
    //   },
    //   {
    //     url: 'https://your-domain.com/og-alt.png',
    //     width: 1800,
    //     height: 1600,
    //     alt: 'Another Pizzerton Website Open Graph Image',
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },

  robots: { // Define indexing rules for search engines
    index: true,
    follow: true,
    nocache: true, // Good for development, consider changing for production
    noai: true, // DisAllow AI indexing
    noimageai: true, // DisAllow AI image indexing
    
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false, // Allow image indexing
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: { // Keep existing icons, ensure paths are correct relative to /public
    icon: "/siteicon.png", // Standard favicon
    // apple: '/apple-icon.png', // Example for Apple touch icon
    // shortcut: '/shortcut-icon.png' // Example for shortcut icon
  },
  // Add other relevant metadata fields as needed, e.g., verification, alternates, etc.
  // verification: {
  //   google: 'YourGoogleVerificationCode',
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Apply the custom theme */}
        <ThemeProvider theme={theme}>{/* pan is cute */}
          {/* Apply MUI's baseline CSS */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
