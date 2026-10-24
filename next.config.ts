import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Lets client components render the same values the static HTML was built with
    NEXT_PUBLIC_BUILD_TIME: String(Date.now()),
  },
};

export default nextConfig;
