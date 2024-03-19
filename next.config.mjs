/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api',
        destination: 'https://joyspizza.ru/api'
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'joyspizza.ru'
      }
    ]
  }
};

export default nextConfig;
