import useAsync from '../useAsync';
import useToken from '../useToken';

import * as paymentApi from '../../services/paymentApi';

export default function usePayTicket() {
  const token = useToken();

  const {
    data: cardData,
    loading: ticketLoading,
    error: ticketError,
    act: createPayment,
  } = useAsync((ticketId, cardData) => paymentApi.createPayment(ticketId, cardData, token));

  return {
    cardData,
    ticketLoading,
    ticketError,
    createPayment,
  };
}
