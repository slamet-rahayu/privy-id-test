import axios from 'axios';
import apiUrl from '../util/api-url';

const baseApi = `${apiUrl}/uploads`;

const config = (token) => ({
  headers: {
    Authorization: token,
  },
});

async function uploadCover(image, token) {
  try {
    const { data } = await axios.post(
      `${baseApi}/cover`,
      { image },
      config(token)
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function setProfilePic(id, token) {
  try {
    const { data } = await axios.post(
      `${baseApi}/profile/default`,
      {
        id,
      },
      config(token)
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function uploadProfilePic(image, token) {
  try {
    const { data } = await axios.post(
      `${baseApi}/profile`,
      { image },
      config(token)
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function deleteProfilePic(id, token) {
  try {
    const { data } = await axios.delete(
      `${baseApi}/profile`,
      { id },
      config(token)
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

const uploadService = {
  uploadCover,
  setProfilePic,
  uploadProfilePic,
  deleteProfilePic,
};

export default uploadService;
