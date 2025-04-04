/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  // This ensures trailing slashes are not used, which helps with static hosting
  trailingSlash: false,
}

module.exports = nextConfig 