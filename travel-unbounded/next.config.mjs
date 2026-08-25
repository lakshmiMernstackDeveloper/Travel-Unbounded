/** @type {import('next').NextConfig} */
const nextConfig = {
  // Move it OUT of experimental and into the root
  allowedDevOrigins: ['192.168.56.1', 'localhost:3000'],
};

export default nextConfig;