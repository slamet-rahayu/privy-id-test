import getConfig from 'next/config';

const {
  publicRuntimeConfig: { apiUrl },
} = getConfig();

export default apiUrl;
