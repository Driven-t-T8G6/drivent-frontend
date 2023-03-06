import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../../../components/LoadingPage';
import useToken from '../../../hooks/useToken';
import * as bookingServices from '../../../services/bookingApi';

export default function Hotel() {
  const navigate = useNavigate();
  const token = useToken();
  useEffect(async() => {
    console.log('Hey');
    try {
      const response = await bookingServices.getBooking(token);
      navigate('/dashboard/hotel/choosed');
    } catch {
      navigate('/dashboard/hotel/notchosen');
    }
  }, []);

  return (
    <LoadingPage/>
  );
}
