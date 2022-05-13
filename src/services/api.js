import axios from 'axios';

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const createSession = async (email, password) => {
  return api.post('/sessions', {
    email,
    password
  });
};

export const createUser = async (email, password, name) => {
  return api.post('/users', {
    email,
    password,
    name
  });
};

export const createWaterInfo = async (userId, progress, ml, meta) => {
  let url = `/users/${userId}/water/`
  
  return api.post(url, {
    progress,
    ml,
    meta
  });
};

export const updateWaterInfo = async (userId, id, progress, ml, meta) => {
  let url = `/users/${userId}/water/${id}`
  
  return api.put(url, {
    progress,
    ml,
    meta
  });
};