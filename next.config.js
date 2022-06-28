const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    mode: 'production',
    disable: false,
    // runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/],
  },
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
});
