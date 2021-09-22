import axios from 'axios';
import apiUrl from '../util/api-url';

const baseApi = `${apiUrl}/oauth`;

async function login(phone = '', password = '') {
  try {
    const { data } = await axios.post(`${baseApi}/sign_in`, {
      phone,
      password,
      latlong: 0,
      device_token: 0,
      device_type: 2,
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

const authServices = { login, credentials, revoke };

export default authServices;
