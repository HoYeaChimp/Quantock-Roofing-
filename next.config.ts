import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      {
        source: "/our-work",
        destination: "/results",
        permanent: true,
      },
      {
        source: "/book-inspection",
        destination: "/booking",
        permanent: true,
      },
      {
        source: "/how-we-work",
        destination: "/process",
        permanent: true,
      },
      {
        source: "/services/roofline-guttering",
        destination: "/services/fascias-soffits-guttering",
        permanent: true,
      },
      {
        source: "/services/fascias-and-soffits",
        destination: "/services/fascias-soffits-guttering",
        permanent: true,
      },
      {
        source: "/services/dry-ridge-verge",
        destination: "/services/dry-ridge-dry-verge",
        permanent: true,
      },
      {
        source: "/services/emergency-roofing",
        destination: "/services/emergency-roof-repairs",
        permanent: true,
      },
      {
        source: "/emergency",
        destination: "/services/emergency-roof-repairs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
