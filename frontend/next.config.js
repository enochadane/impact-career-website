/** @type {import('next').NextConfig}  @type {import('next').webpack}  */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.AWS_S3_URL,
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    BACKEND_IMG: process.env.BACKEND_IMG,
    BACKEND_URL: process.env.BACKEND_URL,
  },
};

module.exports = nextConfig;
