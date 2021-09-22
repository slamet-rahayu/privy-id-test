module.exports = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  publicRuntimeConfig: {
    apiUrl: '/api/api/v1',
  },
  serverRuntimeConfig: {
    apiUrl: 'http://pretest-qa.dcidev.id/api/v1',
  },
};
