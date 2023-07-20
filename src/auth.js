import axios from 'axios';

const API_URL = 'https://gazoblok-bukhara.uz/api/v1';  

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password
    });
    const { token } = response.data;
    return token;
  } catch (error) {
    throw new Error('Ошибка аутентификации');
  }
};
