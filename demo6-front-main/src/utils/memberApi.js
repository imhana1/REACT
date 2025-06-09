import api from "./api";

export const idAvailableChekc = (username)=>api.get(`/api/members/check-username?username=${username}`)

export const signup = (formData) => api.post(`/api/members/new`, formData);

export const findUsername = (email) => api.get(`/api/members/username?email=${email}`);

export const findPassword = (username) => api.put(`/api/members/password?username=${username}`);

export const checkPassword = (password) => api.get(`/api/members/password?password=${password}`);

export const read = () => api.get('/api/members/member').then(res => res.data);

export const changeProfile = (formData) => api.put('/api/members/profile', formData);

// username과 password를 urlencoding방식으로 보내려면  URLSearchParams 객체를 생성한다
export const login = (object) => api.post(`/login`, new URLSearchParams(object));

export const logout = () => api.post('/logout');