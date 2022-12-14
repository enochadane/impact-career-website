/** @type {import('next').NextConfig}  @type {import('next').webpack}  */
import webpack from 'webpack';

const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_IMG: process.env.BACKEND_IMG,
  },

  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      })
    );
    return config;
  },
};

module.exports = nextConfig;
