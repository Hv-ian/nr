import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Emits every route as a directory with an index.html, so locale roots
  // like /ru/ resolve on a plain static host such as GitHub Pages.
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
