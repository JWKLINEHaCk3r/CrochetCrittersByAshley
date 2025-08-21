/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'images.unsplash.com', 'via.placeholder.com', 'res.cloudinary.com'],
    unoptimized: true
  },
  trailingSlash: true,
  // Enable static export for Netlify
  output: 'export',
  distDir: 'out',
  env: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://yourdomain.com',
  },
}

module.exports = nextConfig
