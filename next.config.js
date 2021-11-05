
// next.config.js
const withTM = require('next-transpile-modules')(['atropos/react']); 

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
});


