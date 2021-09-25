const dev = process.env.NODE_ENV === 'development';

module.exports = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  publicRuntimeConfig: {
    apiUrl: dev ? '/api/api/v1' : 'http://pretest-qa.dcidev.id/api/v1',
  },
};
