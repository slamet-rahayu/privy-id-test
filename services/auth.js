import axios from 'axios';
import apiUrl from '../util/api-url';

const baseApi = `${apiUrl}/oauth`;

async function login(phone = '', password = '') {
  try {
    const { data } = await axios.post(`${baseApi}/sign_in`, {
      phone,
      password,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function credentials(token) {
  try {
    const { data } = await axios.get(
      `${baseApi}/credentials?access_token=${token}`
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function revoke(token) {
  try {
    const { data } = await axios.post(`${baseApi}/revoke`, { token });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default { login, credentials, revoke };
