/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Required to generate static HTML files
    trailingSlash: true, // Ensures routes end with a slash for static hosting
    images: {
      unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
    },
  };
  
  module.exports = nextConfig;
  