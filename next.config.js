/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/sungwoo-page' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sungwoo-page/' : '',
};

module.exports = nextConfig;
