/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.pixelbin.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.assets.so",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
