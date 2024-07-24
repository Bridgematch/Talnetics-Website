/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


const withVideos = require('next-videos')
module.exports = withVideos()
module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://dev-api.thebridgematch.com/:path*' // Proxy to Backend
        }
      ];
    }
  };