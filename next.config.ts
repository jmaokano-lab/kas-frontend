/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['kidzbd.org'], //  external image domains here
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/testimonial",
        destination: "https://kidzbd.org/api/v2/testimonial",
      },
    ];
  },
};

module.exports = nextConfig;
