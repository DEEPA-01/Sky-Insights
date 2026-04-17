/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {},
    reactCompiler: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
    ],
  },
};

export default nextConfig;
