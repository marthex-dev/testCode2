import { apiRequest } from '@/lib/api';

export const getUsers = (token) => apiRequest('/users', { token });
export const createUser = (data, token) =>
  apiRequest('/users', { method: 'POST', body: data, token });
export const updateUser = (id, data, token) =>
  apiRequest(`/users/${id}`, { method: 'PUT', body: data, token });
export const deleteUser = (id, token) =>
  apiRequest(`/users/${id}`, { method: 'DELETE', token });
