/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir: 'build',
  output: 'export',
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
    
  },
};

module.exports = nextConfig;
