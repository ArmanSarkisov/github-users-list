import apiClient from '../api-client';

const getAllUsers = async () => {
  try {
    const response = await apiClient.get('/users');

    return response.data;
  } catch (e) {
    console.warn(e.message);
  }
};



export default getAllUsers;
