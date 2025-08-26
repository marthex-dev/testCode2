import { apiRequest } from '@/lib/api';

export const getProducts = (token) => apiRequest('/products', { token });
export const createProduct = (data, token) =>
  apiRequest('/products', { method: 'POST', body: data, token });
export const updateProduct = (id, data, token) =>
  apiRequest(`/products/${id}`, { method: 'PUT', body: data, token });
export const deleteProduct = (id, token) =>
  apiRequest(`/products/${id}`, { method: 'DELETE', token });
