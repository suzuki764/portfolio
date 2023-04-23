/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: "api.accredible.com",
      },
    ],
  },
};

module.exports = nextConfig;
