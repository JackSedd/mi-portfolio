import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // habilita next export
  images: {
    unoptimized: true, // necesario para <Image /> de Next.js en export estático
  },
  trailingSlash: true, // para que las rutas generen /index.html y funcionen en GitHub Pages
};

export default nextConfig;