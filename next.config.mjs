/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },

  // Add the redirects configuration here
  async redirects() {
    return [
      {
        source: '/channel/:channelId*',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/trending',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/music',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/gaming',
        destination: '/404',
        permanent: false,
      },
      {
        source: '/vibrant-street-market.png',
        destination: '/images/placeholder-avatar.png',
        permanent: false,
      },
      {
        source: '/vibrant-street-market.png.1',
        destination: '/images/placeholder-avatar.png',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
