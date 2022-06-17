import axios from 'axios';

export const api = axios.create({
  baseURL: "http://192.168.15.20:5500",
  baseURL: "http://localhost:5000",
 
});

// SESSION
export const createSession = async (email, password) => {
  return api.post('/sessions', {
    email,
    password
  });
};

// USER
export const createUser = async (email, password, name) => {  
  return api.post('/users', {
    email,
    password,
    name
  });
};

// WATER
export const getWaterInfo = async (userId, query) => {
  let url = `/users/${userId}/water`

  if(query !== ''){
    url += `?q=${query}`;
  }

  return api.get(url);
};

export const createWaterInfo = async (userId, ml, progress, meta) => {
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

// MACRO
export const getMacroInfo = async (userId, query) => {
  let url = `/users/${userId}/macro`

  if(query !== ''){
    url += `?q=${query}`;
  }

  return api.get(url);
};

export const createMacroInfo = async (
  userId, 
  progressCarb,
  gCarb,
  metaCarb,
  progressProtein,
  gProtein,
  metaProtein,
  progressFat,
  gFat,
  metaFat
) => {
  let url = `/users/${userId}/macro`

  return api.post(url, {
    progressCarb,
    gCarb,
    metaCarb,
    progressProtein,
    gProtein,
    metaProtein,
    progressFat,
    gFat,
    metaFat
  });
};

export const updateMacroInfo = async (
  userId, 
  id,
  progressCarb,
  gCarb,
  metaCarb,
  progressProtein,
  gProtein,
  metaProtein,
  progressFat,
  gFat,
  metaFat
) => {
  let url = `/users/${userId}/macro/${id}`
  
  return api.put(url, {
    progressCarb,
    gCarb,
    metaCarb,
    progressProtein,
    gProtein,
    metaProtein,
    progressFat,
    gFat,
    metaFat
  });
};