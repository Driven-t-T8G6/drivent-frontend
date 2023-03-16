import { useEffect, useState } from 'react';
import { getEventInfo } from '../../../services/eventApi';
import {
  Header,
  DayFilter,
  DayContainer,
  DaysContainer,
  LocationsContainer,
  ActivitiesContainer,
  SelectDayContainer,
} from './style';
import { eachDayOfInterval } from 'date-fns';
import LocationComponent from '../../../components/ActivityLocation/LocationComponent';

export default function Activities() {
  const [eventDays, setEventDays] = useState([]);
  console.log('🚀 ~ file: index.js:12 ~ Activities ~ eventDays:', eventDays);
  const [isDaySelected, setIsDaySelected] = useState(false);
  const [corr, setCorr] = useState([]);
  useEffect(async () => {
    try {
      const eventData = await getEventInfo();
      const { startsAt, endsAt } = eventData;
      const daysOfEvent = eachDayOfInterval({
        start: new Date(startsAt),
        end: new Date(endsAt),
      }).map((day) => {
        return {
          name: day.toLocaleDateString('pt-BR', { weekday: 'short' }).toUpperCase(),
          date: day.toLocaleDateString('pt-BR', { day: 'numeric', month: 'numeric' }),
        };
      });
      setEventDays(daysOfEvent);
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
    <ActivitiesContainer>
      <SelectDayContainer>
        <Header>Escolha de atividades</Header>
        <DayFilter>
          {isDaySelected ? '' : <p>Primeiro, filtre pelo dia do evento:</p>}
          <DaysContainer>
            {eventDays.map((day, index) => {
              return (
                <DayContainer cor={corr.includes(index) ? '#FFD37D' : '#e0e0e0'} onClick={() => selectDay(day, index)}>
                  {day.name} {day.date}
                </DayContainer>
              );
            })}
          </DaysContainer>
        </DayFilter>
      </SelectDayContainer>
      {isDaySelected ? (
        <LocationsContainer>
          <LocationComponent name="Auditório Principal" />
          <LocationComponent name="Auditório Lateral" />
          <LocationComponent name="Sala de Workshop" />
        </LocationsContainer>
      ) : (
        ''
      )}
    </ActivitiesContainer>
  );
}
