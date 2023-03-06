import { useEffect, useMemo, useState } from 'react';
import * as ticketsService from '../../../../services/ticketApi';
import useToken from '../../../../hooks/useToken';
import { StyledForbiddenMessage, StyledAllowedView, StyledTitle, HotelsContainer, RoomContainer, StyledReservateButton } from './styles';
import * as hotelServices from '../../../../services/hotelApi';
import HotelData from '../../../../components/Hotel/HotelData';
import Room from '../../../../components/Hotel/Room';
import * as bookingServices from '../../../../services/bookingApi';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoadingPage from '../../../../components/LoadingPage';

export default function HotelUnchoosed() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const bookedRoom = Number(queryParams.get('bookedRoom'));

  const [ticket, setTicket] = useState('noHotel');
  const [hotelsList, setHotelsList] = useState([]);
  const roomsState = useState([]);
  const selectedState = useState(-1);
  const selectedRoomState = useState(bookedRoom);

  const token = useToken();
  const navigate = useNavigate();
  useEffect(async() => {
    try {
      setTicket('loading');
      const ticket = await ticketsService.getTicket(token);
      if(ticket.TicketType?.isRemote || !ticket.TicketType?.includesHotel)
        setTicket('noHotel');
      else if(ticket.TicketType?.includesHotel)
        setTicket('hotel');
    } catch(e) {
      setTicket('noTicket');
    }
    
    try {
      const hotels = await hotelServices.getHotels(token);
      setHotelsList(hotels);
    } catch(e) {
      setHotelsList([]);
    }
  }, []);

  async function setBooking() {
    try {
      await bookingServices.postOrChangeBooking(token, selectedRoomState[0]);
      toast('Reserva feita com sucesso.');
      navigate('/dashboard/hotel/choosed');
    } catch(e) {
      toast('Ocorreu um erro ao registrar a sua reserva.');
    }
  }

  const options = {
    'loading': <LoadingPage/>,
    'noTicket': <StyledForbiddenMessage>Você precisa ter confirmado o <br/>pagamento antes de fazer a escolha de hospedagem</StyledForbiddenMessage>,
    'noHotel': <StyledForbiddenMessage>Sua modalidade de ingresso não inclui hospedagem.<br/>Prossiga para a escolha de atividade</StyledForbiddenMessage>,
    'hotel': 
    <StyledAllowedView>
      <StyledTitle>Escolha de hotel e quarto</StyledTitle>
      <h2>Primeiro, escolha seu hotel</h2>
      <HotelsContainer>{hotelsList.map(value => <HotelData data={value} roomsState={roomsState} selectedState={selectedState} key={value.id}/>)}</HotelsContainer>
      <RoomContainer>{roomsState[0].map(value => <Room selectedRoomState={selectedRoomState} data={value} booked={value.id===bookedRoom} key={value.id}/>)}</RoomContainer>
      <StyledReservateButton onClick={setBooking}>RESERVAR QUARTO</StyledReservateButton>
    </StyledAllowedView>
  };

  return options[ticket];
}
