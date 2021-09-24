import axios from 'axios';
import apiUrl from 'util/api-url';

const baseApi = `${apiUrl}/profile`;

const config = (token) => ({
  headers: {
    Authorization: token,
  },
});

async function update(body = {}, token = '') {
  try {
    const { data } = await axios.post(baseApi, body, config(token));
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getProfile(token = '') {
  try {
    const { data } = await axios.get(`${baseApi}/me`, config(token));
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function career(body = {}, token = '') {
  try {
    const { data } = await axios.post(`${baseApi}/career`, body, config(token));
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function education(body = {}, token) {
  try {
    const { data } = await axios.post(
      `${baseApi}/education`,
      body,
      config(token)
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

const profileServices = {
  update,
  getProfile,
  career,
  education,
};

export default profileServices;
