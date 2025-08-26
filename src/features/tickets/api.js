import { apiRequest } from '@/lib/api';

export const getTickets = (token) => apiRequest('/tickets', { token });
export const createTicket = (data, token) =>
  apiRequest('/tickets', { method: 'POST', body: data, token });
export const updateTicket = (id, data, token) =>
  apiRequest(`/tickets/${id}`, { method: 'PUT', body: data, token });
export const deleteTicket = (id, token) =>
  apiRequest(`/tickets/${id}`, { method: 'DELETE', token });

export const replyTicket = (ticketId, data, token) =>
  apiRequest(`/tickets/${ticketId}/replies`, {
    method: 'POST',
    body: data,
    token,
  });
export const updateReply = (ticketId, replyId, data, token) =>
  apiRequest(`/tickets/${ticketId}/replies/${replyId}`, {
    method: 'PUT',
    body: data,
    token,
  });
export const deleteReply = (ticketId, replyId, token) =>
  apiRequest(`/tickets/${ticketId}/replies/${replyId}`, {
    method: 'DELETE',
    token,
  });
