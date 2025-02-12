/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Izinkan semua domain
      },
    ],
  },
};

export default nextConfig;
