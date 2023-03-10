import api from './api';

export async function createPayment(ticketId, cardData, token) {
  console.log(cardData);
  console.log(ticketId);
  console.log(token);
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
