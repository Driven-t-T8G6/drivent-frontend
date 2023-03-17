import api from './api';

export async function getActivities(token) {
  const response = await api.get('/activity', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function subscribeActivity(token, index) {
  const response = await api.post(
    `/activity/${index}`,
    { index },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(`id ${index} enviado como params`);
}
