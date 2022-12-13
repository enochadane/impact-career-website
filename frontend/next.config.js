/* @type {import('next').NextConfig}   */

const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_IMG: process.env.BACKEND_IMG,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
};

module.exports = nextConfig;
