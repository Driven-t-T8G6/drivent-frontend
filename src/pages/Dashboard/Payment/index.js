import { useState } from 'react';
import { Header, HotelType, Option, OptionsContainer, TicketType } from './styles';

export default function Payment() {
  const [isShowingResume, setIsShowingResume] = useState(false);
  const [isShowingHotels, setIsShowingHotels] = useState(false);
  const ticketTypeOptions = ['Presencial', 'Online'];
  const hotelOptions = ['Sem Hotel', 'Com Hotel'];
  const [corr, setCorr] = useState([]);
  const [corrr, setCorrr] = useState([]);

  function showNextStep(ticketTypeOption, index) {
    if (ticketTypeOption === 'Presencial') {
      setIsShowingHotels(!isShowingHotels);
    }
    if (ticketTypeOption === 'Online') {
      setIsShowingHotels(false);
      setIsShowingResume(true);
    }

    if (corr.length === 0) {
      const novoArray = [...corr, index];
      setCorr(novoArray);
    } else {
      setCorr([index]);
    }
    if (corr[0] === index) {
      setCorr([]);
    }
  }

  function showFinalStep(hotelOption, index) {
    if (hotelOption === 'Com Hotel') {
      setIsShowingResume(true);
    }
    if (hotelOption === 'Sem Hotel') {
      setIsShowingResume(true);
    }

    if (corrr.length === 0) {
      const novoArray = [...corrr, index];
      setCorrr(novoArray);
    } else {
      setCorrr([index]);
    }
    if (corrr[0] === index) {
      setCorrr([]);
    }
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
      {isShowingResume ? 'Fechado! O total ficou em R$ 600. Agora é só confirmar:' : <></>}
    </>
  );
}
