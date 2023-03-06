import api from './api';

export async function createPayment(ticketId, body, token) {
  const response = await api.post('/payments/process', ticketId, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
