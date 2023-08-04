/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async rewrites() {
    return [
      {
        source: '/api/fontlay/event',
        destination: 'https://analytics.umami.is/script.js',
      },
    ];
  },
};

module.exports = nextConfig;
