import { useEffect, useState } from 'react';
import { getEventInfo } from '../../../services/eventApi';
import { DaysContainer } from './style';
import { DayContainer } from './style';
import { DayFilter } from './style';
import { Header } from './style';

export default function Activities() {
  const eventDays = ['Sexta', 'Sábado', 'Domingo'];
  const [isDaySelected, setIsDaySelected] = useState(false);
  const [corr, setCorr] = useState([]);
  useEffect(async () => {
    try {
      const eventData = await getEventInfo();
      const eventStartDay = eventData.startsAt.slice(0, 10);
      const eventEndDay = eventData.endsAt.slice(0, 10);
      const diffInMs = new Date(eventEndDay) - new Date(eventStartDay);
      const diffInDays = diffInMs / (1000 * 60 * 60 * 24) + 1;
      console.log(eventData);
    } catch (e) {
      console.log(e);
    }
  }, []);

  function selectDay(day, index) {
    setIsDaySelected(true);
    if (corr.length === 0) {
      const novoArray = [...corr, index];
      setCorr(novoArray);
    } else {
      setCorr([index]);
    }
  }
  return (
    <>
      <Header>Escolha de atividades</Header>
      <DayFilter>
        {isDaySelected ? '' : <p>Primeiro, filtre pelo dia do evento</p>}
        <DaysContainer>
          {eventDays.map((day, index) => {
            return (
              <DayContainer cor={corr.includes(index) ? '#FFD37D' : '#e0e0e0'} onClick={() => selectDay(day, index)}>
                {day}
              </DayContainer>
            );
          })}
        </DaysContainer>
      </DayFilter>
      {isDaySelected ? 'Fazer locations' : ''}
    </>
  );
}
