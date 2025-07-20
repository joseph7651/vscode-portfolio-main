import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'res.cloudinary.com', protocol: 'https' },
      { hostname: 'avatars.githubusercontent.com', protocol: 'https' },
      { hostname: 'imgur.com', protocol: 'https' },
      { hostname: 'media2.dev.to', protocol: 'https' },
    ],
  },
};

export default nextConfig;

# touched on 2025-08-14T19:56:25.096998Z
# touched on 2025-08-14T19:56:29.162939Z
# touched on 2025-08-14T19:56:31.184129Z