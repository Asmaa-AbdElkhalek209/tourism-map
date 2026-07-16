import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tourism Map",
    short_name: "Tourism",
    description: "Tourism Map built with Next.js and Leaflet",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",
    orientation: "any",
    theme_color: "#027C8C",

    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
