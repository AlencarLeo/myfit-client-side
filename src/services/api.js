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

export const getWaterInfo = async (userId, query) => {
  let url = `/users/${userId}/water`

  if(query !== ''){
    url += `?q=${query}`;
  }

  return api.get(url);
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

//Carb
export const getCarbInfo = async (userId, query) => {
  let url = `/users/${userId}/carb`

  if(query !== ''){
    url += `?q=${query}`;
  }

  return api.get(url);
};

export const createCarbInfo = async (userId, progress, g, meta) => {
  let url = `/users/${userId}/carb/`

  return api.post(url, {
    progress,
    g,
    meta
  });
};

export const updateCarbInfo = async (userId, id, progress, g, meta) => {
  let url = `/users/${userId}/carb/${id}`
  
  return api.put(url, {
    progress,
    g,
    meta
  });
};