import api from './api';

export async function signIn(email, password) {
  const response = await api.post('/auth/sign-in', { email, password });
  return response.data;
}

export async function githubAuth(code) {
  const params = {
    code
  };
  const response = await api.post('/auth/github/sign-in', params);
  return response.data;
}
//
