/** @type {import('next').NextConfig}  @type {import('next').webpack}  */

const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_IMG: process.env.BACKEND_IMG,
  },
};

module.exports = nextConfig;
