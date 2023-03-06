import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChoosedHotelData from '../../../../components/Hotel/ChoosedHotelData.js';
import useToken from '../../../../hooks/useToken.js';
import * as bookingServices from '../../../../services/bookingApi.js';
import { StyledChangeButton, StyledHotelChoosedView, StyledTitle } from './styles.js';

export default function HotelChoosed() {
  const [booking, setBooking] = useState({});

  const token = useToken();
  const navigate = useNavigate();
  useEffect(async() => {
    try {
      const response = await bookingServices.getBooking(token);
      setBooking(response);
    } catch {
      navigate('/dashboard/hotel/notchosen');
    }
  }, []);

  const options = {
    'Hotel': 
    <StyledHotelChoosedView>
      <StyledTitle>Escolha de hotel e quarto</StyledTitle>
      <h2>Você já escolheu seu quarto:</h2>
      <ChoosedHotelData data={booking.Room} selectedState={['', '']} roomsState={['', '']} type='selectedRoom'/>
      <StyledChangeButton onClick={() => navigate('/dashboard/hotel/notchosen')}>TROCAR QUARTO</StyledChangeButton>
    </StyledHotelChoosedView>,
  };

  return options['Hotel'];
}
