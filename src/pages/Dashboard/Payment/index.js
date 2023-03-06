import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useEnrollment from '../../../hooks/api/useEnrollment';
import usePayTicket from '../../../hooks/api/usePayTicket';
import useSendTicket from '../../../hooks/api/useSendTicket';
import useTicket from '../../../hooks/api/useTicket';
import useTicketTypes from '../../../hooks/api/useTicketTypes';

import {
  Header,
  HotelType,
  Option,
  OptionsContainer,
  TicketType,
  WithoutEnrollment,
  ResumeContainer,
  Price,
  TicketChosenResume,
  TicketChosenResumeContainer,
  PaymentContainer,
} from './styles';

export default function Payment() {
  const [isTicketSent, setIsTicketSent] = useState(false);
  const [isTicketPaid, setIsTicketPaid] = useState(false);
  const [isShowingResume, setIsShowingResume] = useState(false);
  const [isShowingHotels, setIsShowingHotels] = useState(false);
  const [ticketTypeId, setTicketTypeId] = useState(0);
  const [ticketId, setTicketId] = useState(0);
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const ticketTypeOptions = [
    { name: 'Presencial', price: 250 },
    { name: 'Online', price: 100 },
  ];
  const hotelOptions = [
    { name: 'Sem Hotel', price: 0 },
    { name: 'Com Hotel', price: 350 },
  ];
  const [corr, setCorr] = useState([]);
  const [corrr, setCorrr] = useState([]);
  const [valor, setValor] = useState(0);
  const { enrollment } = useEnrollment();
  const { ticketTypes } = useTicketTypes();
  const { ticketLoading, createTicket } = useSendTicket();
  const { getTickets } = useTicket();
  const { createPayment } = usePayTicket();

  if (!enrollment) {
    return (
      <>
        <Header>Ingresso e Pagamento</Header>
        <WithoutEnrollment>
          <p>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</p>
        </WithoutEnrollment>
      </>
    );
  }

  function showNextStep(ticketTypeOption, index) {
    if (ticketTypeOption === 'Presencial') {
      setIsShowingHotels(true);
      setTicketTypeId(0);
      setCorrr([]);
      setIsShowingResume(false);
      if (corrr.length === 0) {
        setIsShowingResume(false);
      }
    }
    if (ticketTypeOption === 'Online') {
      setIsShowingHotels(false);
      setIsShowingResume(true);
      const ticketType = ticketTypes.find((ticketType) => ticketType.name === 'Online');
      console.log(ticketType);
      setValor(ticketType.price);
      setTicketTypeId(ticketType.id);
    }

    if (corr.length === 0) {
      const novoArray = [...corr, index];
      setCorr(novoArray);
    } else {
      setCorr([index]);
    }
  }

  function showFinalStep(hotelOption, index) {
    if (hotelOption === 'Com Hotel') {
      setIsShowingResume(true);
      const ticketType = ticketTypes.find((ticketType) => ticketType.name === 'Presencial' && ticketType.includesHotel);
      setValor(ticketType.price);
      setTicketTypeId(ticketType.id);
    }
    if (hotelOption === 'Sem Hotel') {
      setIsShowingResume(true);
      const ticketType = ticketTypes.find(
        (ticketType) => ticketType.name === 'Presencial' && !ticketType.includesHotel
      );
      setValor(ticketType.price);
      setTicketTypeId(ticketType.id);
    }

    if (corrr.length === 0) {
      const novoArray = [...corrr, index];
      setCorrr(novoArray);
    } else {
      setCorrr([index]);
    }
  }

  async function sendTicket() {
    const newData = {
      ticketTypeId,
    };

    try {
      await createTicket(newData);
      toast('Ticket criado com sucesso!');
      setIsTicketSent(true);
      const ticket = await getTickets();
      setTicketId(ticket.id);
      console.log(ticket);
    } catch (err) {
      toast('Não foi possível criar seu ticket!');
    }
  }
  async function payTicket() {
    const cardData = {
      issuer: 'nubank',
      number: number,
      name: name,
      expirationDate: expirationDate,
      cvv: cvv,
    };

    try {
      await createPayment(ticketId, cardData);
      toast('Pagamento efetuado com sucesso!');
      setIsTicketPaid(true);
    } catch (err) {
      toast('Não foi possível efetuar o pagamento!');
    }
  }

  return (
    <>
      <Header>Ingresso e Pagamento</Header>
      {isTicketSent ? (
        <>
          <TicketChosenResumeContainer>
            <p>Ingresso escolhido</p>
            <TicketChosenResume>
              {ticketTypeId === 7 ? ticketTypeOptions[1].name : ticketTypeOptions[0].name}+{' '}
              {ticketTypeId === 7 ? '' : ticketTypeId === 8 ? hotelOptions[1].name : hotelOptions[0].name}
              <p2>R$ {ticketTypeId === 7 ? 100 : ticketTypeId === 8 ? ticketTypes[1].price : ticketTypes[2].price}</p2>
            </TicketChosenResume>
          </TicketChosenResumeContainer>
          <PaymentContainer>
            <p>Pagamento</p>
            {isTicketPaid ? (
              'parabens'
            ) : (
              <>
                <form>
                  <input
                    label="Card Number"
                    type="text"
                    fullWidth
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <input label="Name" type="text" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
                  <input
                    label="Valid Thru"
                    type="text"
                    fullWidth
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                  />
                  <input label="CVC" type="text" fullWidth value={cvv} onChange={(e) => setCvv(e.target.value)} />
                </form>
                <button onClick={payTicket}>FINALIZAR PAGAMENTO</button>
              </>
            )}
          </PaymentContainer>
        </>
      ) : (
        <>
          <TicketType>
            <p>Primeiro, escolha sua modalidade do ingresso</p>
            <OptionsContainer>
              {ticketTypeOptions.map((ticketTypeOption, index) => {
                return (
                  <Option
                    cor={corr.includes(index) ? '#FFEED2' : '#FFFFFF'}
                    onClick={() => showNextStep(ticketTypeOption.name, index)}
                  >
                    {ticketTypeOption.name}
                    <Price>R$ {ticketTypeOption.price}</Price>
                  </Option>
                );
              })}
            </OptionsContainer>
          </TicketType>
          {isShowingHotels ? (
            <HotelType>
              <p>Ótimo! Agora escolha sua modalidade de hospedagem</p>
              <OptionsContainer>
                {hotelOptions.map((hotelOption, index) => {
                  return (
                    <Option
                      cor={corrr.includes(index) ? '#FFEED2' : '#FFFFFF'}
                      onClick={() => showFinalStep(hotelOption.name, index)}
                    >
                      {hotelOption.name}
                      <Price>+ R$ {hotelOption.price}</Price>
                    </Option>
                  );
                })}
              </OptionsContainer>
            </HotelType>
          ) : (
            <></>
          )}
          {isShowingResume ? (
            <ResumeContainer>
              <p>
                Fechado! O total ficou em <span>R$ {valor}</span>. Agora é só confirmar:
              </p>
              <button disabled={ticketLoading} onClick={sendTicket}>
                RESERVAR INGRESSO
              </button>
            </ResumeContainer>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}
