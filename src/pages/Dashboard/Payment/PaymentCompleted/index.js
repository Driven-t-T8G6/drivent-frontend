import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledChangeButton, StyledIcon, StyledPaymentCompletedView, StyledTitle } from './styles';
import { confirmPayment } from '../../../../services/paymentApi';
import useToken from '../../../../hooks/useToken';

export default function PaymentCompleted() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const success = params.get('success');
  const ticketId = params.get('ticketId');
  console.log(success + ' ' + ticketId);
  const token = useToken();
  const navigate = useNavigate();

  useEffect(async() => {
    if(success) 
      await confirmPayment(Number(ticketId), token);
  });

  return (
    <StyledPaymentCompletedView>
      <StyledTitle>{success === 'true' ? 'Parabéns! Seu pagamento foi aprovado.' : 'Infelizmente seu pagamento não foi concluído.'}</StyledTitle>
      <StyledIcon success={success}>
        <ion-icon name={success === 'true' ? 'checkmark-done-circle-outline' : 'ban-outline'}></ion-icon>
      </StyledIcon>
      <StyledChangeButton onClick={() => navigate('/dashboard')}>VOLTAR</StyledChangeButton>
    </StyledPaymentCompletedView>
  );
}
