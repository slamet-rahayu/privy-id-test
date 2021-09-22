import axios from 'axios';
import apiUrl from '../util/api-url';

const baseApi = `${apiUrl}/uploads`;

const config = {
  header: {
    Authorization: 'token',
  },
};

async function uploadCover(image) {
  try {
    const { data } = await axios.post(`${baseApi}/cover`, { image }, config);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function setProfilePic(id) {
  try {
    const { data } = await axios.post(
      `${baseApi}/profile/default`,
      {
        id,
      },
      config
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function uploadProfilePic(image) {
  try {
    const { data } = await axios.post(`${baseApi}/profile`, { image }, config);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function deleteProfilePic(id) {
  try {
    const { data } = await axios.delete(`${baseApi}/profile`, { id }, config);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default {
  uploadCover,
  setProfilePic,
  uploadProfilePic,
  deleteProfilePic,
};
