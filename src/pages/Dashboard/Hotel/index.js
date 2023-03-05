import { useContext, useEffect, useState } from 'react';
import UserContext from '../../../contexts/UserContext';
import { getTicket } from '../../../services/tickets';
import useToken from '../../../hooks/useToken';
import { StyledForbiddenMessage, StyledAllowedView, StyledTitle, HotelsContainer, RoomContainer } from './styles';
import { getHotels } from '../../../services/hotels';
import HotelData from '../../../components/Hotel/HotelData';
import Room from '../../../components/Hotel/Room';

export default function Hotel() {
  const [ticket, setTicket] = useState('noHotel');
  const [hotelsList, setHotelsList] = useState([]);
  const roomsState = useState([]);
  const selectedState = useState(-1);
  const selectedRoomState = useState(-1);

  const options = {
    'noTicket': <StyledForbiddenMessage>Você precisa ter confirmado o <br/>pagamento antes de fazer a escolha de hospedagem</StyledForbiddenMessage>,
    'noHotel': <StyledForbiddenMessage>Sua modalidade de ingresso não inclui hospedagem.<br/>Prossiga para a escolha de atividade</StyledForbiddenMessage>,
    'hotel': 
    <StyledAllowedView>
      <StyledTitle>Escolha de hotel e quarto</StyledTitle>
      <h2>Primeiro, escolha seu hotel</h2>
      <HotelsContainer>{hotelsList.map(value => <HotelData data={value} roomsState={roomsState} selectedState={selectedState} key={value.id}/>)}</HotelsContainer>
      <RoomContainer>{roomsState[0].map(value => <Room selectedRoomState={selectedRoomState} data={value} key={value.id}/>)}</RoomContainer>
    </StyledAllowedView>
  };

  const token = useToken();
  useEffect(async() => {
    try {
      const ticket = await getTicket(token);
      console.log(ticket.TicketType);
      if(ticket.TicketType?.isRemote || !ticket.TicketType?.includesHotel)
        setTicket('noHotel');
      else if(ticket.TicketType?.includesHotel)
        setTicket('hotel');
    } catch(e) {
      setTicket('noTicket');
    }
    
    try {
      const hotels = await getHotels(token);
      setHotelsList(hotels);
    } catch(e) {
      setHotelsList([]);
    }
  }, []);

  const userData = useContext(UserContext);
  return options[ticket];
}
