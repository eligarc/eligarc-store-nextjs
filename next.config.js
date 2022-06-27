/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'placeimg.com',
      'api.lorem.space',
      'vuzoon.com',
      'www.complementosdelcafe.com',
      'encrypted-tbn1.gstatic.com',
      'www.steren.com.gt'
    ],
  },
};

module.exports = nextConfig;
