import axios from 'axios';
import { useContext, useState } from 'react';
import useToken from '../../../hooks/useToken';
import { Header, HotelType, Option, OptionsContainer, TicketType } from './styles';

export default function Payment() {
  const [isShowingResume, setIsShowingResume] = useState(false);
  const [isShowingHotels, setIsShowingHotels] = useState(false);
  const ticketTypeOptions = ['Presencial', 'Online'];
  const hotelOptions = ['Sem Hotel', 'Com Hotel'];
  const [corr, setCorr] = useState([]);
  const [corrr, setCorrr] = useState([]);
  const [valor, setValor] = useState(0);
  /*const token = useToken();
  console.log(token);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const promise = axios.get('http://localhost:4000/tickets/types', config);
  promise.then((resposta) => {
    const dados = resposta.data;
    console.log(dados);
  });*/

  function showNextStep(ticketTypeOption, index) {
    if (ticketTypeOption === 'Presencial') {
      setIsShowingHotels(true);
      setValor(250);
      if (corrr.length === 0) {
        setIsShowingResume(false);
      }
    }
    if (ticketTypeOption === 'Online') {
      setIsShowingHotels(false);
      setIsShowingResume(true);
      setValor(100);
    }

    if (corr.length === 0) {
      const novoArray = [...corr, index];
      setCorr(novoArray);
    } else {
      setCorr([index]);
    }
    /*if (corr[0] === index) {
      setCorr([]);
    }*/
  }

  function showFinalStep(hotelOption, index) {
    if (hotelOption === 'Com Hotel') {
      setIsShowingResume(true);
      setValor(600);
    }
    if (hotelOption === 'Sem Hotel') {
      setIsShowingResume(true);
      setValor(250);
    }

    if (corrr.length === 0) {
      const novoArray = [...corrr, index];
      setCorrr(novoArray);
    } else {
      setCorrr([index]);
    }
    /*if (corrr[0] === index) {
      setCorrr([]);
    }*/
  }

  console.log(corr);
  return (
    <>
      <Header>Ingresso e Pagamento</Header>
      <TicketType>
        <p>Primeiro, escolha sua modalidade do ingresso</p>
        <OptionsContainer>
          {ticketTypeOptions.map((ticketTypeOption, index) => {
            return (
              <Option
                cor={corr.includes(index) ? '#FFEED2' : '#FFFFFF'}
                onClick={() => showNextStep(ticketTypeOption, index)}
              >
                {ticketTypeOption}
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
                  onClick={() => showFinalStep(hotelOption, index)}
                >
                  {hotelOption}
                </Option>
              );
            })}
          </OptionsContainer>
        </HotelType>
      ) : (
        <></>
      )}
      {isShowingResume ? `Fechado! O total ficou em R$ ${valor}. Agora é só confirmar:` : <></>}
    </>
  );
}
