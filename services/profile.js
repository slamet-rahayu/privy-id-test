import axios from 'axios';
import apiUrl from '../util/api-url';

const baseApi = `${apiUrl}/profile`;

const config = {
  header: {
    Authorization: 'token',
  },
};

async function update(param = {}) {
  try {
    const { data } = await axios.post(baseApi, param, config);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getProfile() {
  try {
    const { data } = await axios.get(`${baseApi}me`, config);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function career(param = {}) {
  try {
    const { data } = await axios.post(`${baseApi}/career`, param);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function education(param) {
  try {
    const { data } = await axios.post(`${baseApi}/education`, param);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

const profileServices = { update, getProfile, career, education };

export default profileServices;
