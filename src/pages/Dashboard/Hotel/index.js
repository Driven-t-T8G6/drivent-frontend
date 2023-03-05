import { useContext, useEffect, useState } from 'react';
import UserContext from '../../../contexts/UserContext';
import { getTicket } from '../../../services/tickets';
import getToken from '../../../hooks/useToken';
import useToken from '../../../hooks/useToken';
import StyledForbiddenMessage from './styles';

export default function Hotel() {
  const [ticket, setTicket] = useState('noHotel');
  const options = {
    'noTicket': <StyledForbiddenMessage>Você precisa ter confirmado o <br/>pagamento antes de fazer a escolha de hospedagem</StyledForbiddenMessage>,
    'noHotel': <StyledForbiddenMessage>Sua modalidade de ingresso não inclui hospedagem.<br/>Prossiga para a escolha de atividade</StyledForbiddenMessage>
  };

  const token = useToken();
  useEffect(() => {
    try {
      const ticket = getTicket(token);
      if(ticket.ticketType.isRemote || !ticket.ticketType.includesHotel)
        setTicket('noHotel');
      else
        setTicket('hotel');
    }
    catch(e) {
      setTicket('noTicket');
    }
  }, []);

  const userData = useContext(UserContext);
  return options[ticket];
}
