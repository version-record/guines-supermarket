import withPWA from "next-pwa";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // Pa' generar out/ estático
  trailingSlash: true,
  images: {
    unoptimized: true, // Necesario pa' export
  },
  // Otras configs...
};

export default withPWA({
  dest: "public", // Donde va el service worker
  disable: !isProd, // Solo en prod, no en dev
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    // Cache pa' offline: imágenes, páginas, API
    {
      urlPattern: /^https?.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "offlineCache",
        expiration: {
          maxEntries: 200,
        },
      },
    },
  ],
})(nextConfig);
