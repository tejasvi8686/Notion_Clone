/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['pajbswsnrhylxgyirlje.supabase.co']
  }
};

module.exports = nextConfig;
