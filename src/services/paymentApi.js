import api from './api';

export async function createPayment(ticketId, token) {
  const response = await api.post(
    '/payments/process',
    { ticketId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const sessionUrl = response.data;
  window.location.replace(sessionUrl);
}

export async function confirmPayment(ticketId, token) {
  const response = await api.post(
    '/payments/confirmation',
    { ticketId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}
