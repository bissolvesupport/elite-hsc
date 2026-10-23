import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "elitehcs.com.au" }]
  },
  // Permanently send anyone (including Google) who lands on the old
  // Vercel address or the bare domain to the main www domain.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "elite-hsc.vercel.app" }],
        destination: "https://www.elitehcs.com.au/:path*",
        permanent: true
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "elitehcs.com.au" }],
        destination: "https://www.elitehcs.com.au/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
