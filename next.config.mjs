/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_REMOTE_PATTERN_PROTCOL,
        hostname: process.env.NEXT_PUBLIC_REMOTE_PATTERN_HOSTNAME,
        port: process.env.NEXT_PUBLIC_REMOTE_PATTERN_PORT,
        pathname: "/uploads/**",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
