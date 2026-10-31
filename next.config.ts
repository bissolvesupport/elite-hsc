import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "elitehcs.com.au" }]
  },
  // Permanently send anyone (including Google) who lands on the old
  // Vercel address or the bare domain to the main www domain.
  // The Google Search Console verification file (google*.html) is left
  // reachable on the Vercel address so that property stays verified.
  async redirects() {
    return [
      {
        source: "/:path((?!google[a-zA-Z0-9]+\\.html$).*)",
        has: [{ type: "host", value: "elite-hsc.vercel.app" }],
        destination: "https://www.elitehcs.com.au/:path",
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
