import type { NextConfig } from "next";

// next.config.js
module.exports = {
  images: {
    domains: ['image.tmdb.org'],
  },
};


const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/api/:path*' // Proxy to Backend
      }
    ]
  }
};

export default nextConfig;
