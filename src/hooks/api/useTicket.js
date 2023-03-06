import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useTicket() {
  const token = useToken();

  const {
    data: ticket,
    loading: ticketLoading,
    error: ticketError,
    act: getTickets,
  } = useAsync(() => ticketApi.getTickets(token));

  return {
    ticket,
    ticketLoading,
    ticketError,
    getTickets,
  };
}
