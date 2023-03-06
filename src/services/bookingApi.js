import api from './api';

export async function postOrChangeBooking(token, roomId) {
  let booking, response;
  try {
    booking = await getBooking(token);
  } catch {

  }

  if(!booking) {
    response = await api.post('/booking', { roomId }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } else {
    response = await api.put('/booking/' + booking.id, { roomId }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return response.data;
}

export async function getBooking(token) {
  const response = await api.get('/booking', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
