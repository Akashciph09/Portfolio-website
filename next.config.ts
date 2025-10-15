/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 👈 This line disables lint errors on build
  },
};

module.exports = nextConfig;
