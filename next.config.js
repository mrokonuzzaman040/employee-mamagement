/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [ 'milehowagwcclruluiwx.supabase.co' ],
  },
};

module.exports = nextConfig;
