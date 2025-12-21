/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['kidzbd.org'], //  external image domains here
  },
  async rewrites() {
    return [
      {
        source: '/api/testimonial',
        destination: 'https://kidzbd.org/api/v2/testimonial',
      },
    ];
  },
};

module.exports = nextConfig;

