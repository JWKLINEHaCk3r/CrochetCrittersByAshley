/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'out'
}

module.exports = nextConfig
