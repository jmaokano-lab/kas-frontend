import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  // images: {
  //   domains: ['kidzbd.org'], //  external image domains here
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ripongroups.com",
        pathname: "/public/uploads/all/**",
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/testimonial",
  //       destination: "https://www.ripongroups.com/api/v2/testimonial",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
