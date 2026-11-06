import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Wikimedia resizes the photos, so these widths match its standard thumbnail steps.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [500, 960, 1280, 1920],
    imageSizes: [330],
  },
};

export default nextConfig;
