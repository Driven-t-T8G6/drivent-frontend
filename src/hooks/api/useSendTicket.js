import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketApi from '../../services/ticketApi';

export default function useSendTicket() {
  const token = useToken();

  const {
    loading: ticketLoading,
    error: ticketError,
    act: createTicket
  } = useAsync((data) => ticketApi.createTicket(data, token));

  return {
    ticketLoading,
    ticketError,
    createTicket
  };
}
