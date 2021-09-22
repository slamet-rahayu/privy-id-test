import axios from 'axios';
import apiUrl from '../util/api-url';

const baseApi = `${apiUrl}/register`;

async function register(param = {}) {
  try {
    const { data } = await axios.post(baseApi, param);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function otpRequest(phone = '') {
  try {
    const { data } = await axios.post(`${baseApi}/otp/request`, { phone });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function otpMatch(user_id = '', phone = '') {
  try {
    const { data } = await axios.post(`${baseApi}/otp/match`, {
      user_id,
      phone,
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function remove(phone = '') {
  try {
    const { data } = await axios.post(`${baseApi}/otp/remove`, { phone });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

const registerService = { register, otpMatch, otpRequest, remove };

export default registerService;
