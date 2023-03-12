import api from './api';

export async function createPayment(ticketId, cardData, token) {
  const response = await api.post(
    '/payments/process',
    { ticketId, cardData },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}
