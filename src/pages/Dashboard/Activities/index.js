import { useEffect, useState } from 'react';
import { getEventInfo } from '../../../services/eventApi';
import * as ticketsService from '../../../services/ticketApi';
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
import LocationComponent from '../../../components/Activities/ActivityLocation/LocationComponent';
import { getActivities } from '../../../services/activityApi';
import useToken from '../../../hooks/useToken';
import { StyledForbiddenMessage } from './style';

export default function Activities() {
  const token = useToken();
  const [eventDays, setEventDays] = useState([]);
  const [ticketPaymentStatus, setTicketPaymentStatus] = useState([]);
  const [isTicketOk, setIsTicketOk] = useState(true);
  const [isTicketTypeRemote, setIsTicketTypeRemote] = useState(false);
  const [activities, setActivities] = useState([]);
  console.log('🚀 ~ file: index.js:21 ~ Activities ~ activities:', activities);
  const [isDaySelected, setIsDaySelected] = useState(false);
  const [corr, setCorr] = useState([]);
  useEffect(async () => {
    try {
      const ticket = await ticketsService.getTickets(token);
      setTicketPaymentStatus(ticket.status);
      setIsTicketOk(true);
      setIsTicketTypeRemote(false);
      if (ticket.ticketTypeId === 2) {
        setIsTicketTypeRemote(true);
      }
      const eventData = await getEventInfo();
      setActivities(await getActivities(token));
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
    } catch (e) {
      console.log(e);
      if (ticketPaymentStatus !== 'PAID') {
        setIsTicketOk(false);
      }
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
  console.log(corr);

  return isTicketOk ? (
    isTicketTypeRemote ? (
      <StyledForbiddenMessage>
        Sua modalidade de ingresso não necessita escolher <br />
        atividade. Você terá acesso a todas as atividades.
      </StyledForbiddenMessage>
    ) : (
      <ActivitiesContainer>
        <SelectDayContainer>
          <Header>Escolha de atividades</Header>
          <DayFilter>
            {isDaySelected ? '' : <p>Primeiro, filtre pelo dia do evento:</p>}
            <DaysContainer>
              {eventDays.map((day, index) => {
                return (
                  <DayContainer
                    cor={corr.includes(index) ? '#FFD37D' : '#e0e0e0'}
                    onClick={() => selectDay(day, index)}
                  >
                    {day.name} {day.date}
                  </DayContainer>
                );
              })}
            </DaysContainer>
          </DayFilter>
        </SelectDayContainer>
        {isDaySelected ? (
          <LocationsContainer>
            <LocationComponent
              name="Auditório Principal"
              activities={activities.filter((act) => act.location === 'Auditório Principal')}
              eventDays={eventDays}
              corr={corr}
            />
            <LocationComponent
              name="Auditório Lateral"
              activities={activities.filter((act) => act.location === 'Auditório Lateral')}
              eventDays={eventDays}
              corr={corr}
            />
            <LocationComponent
              name="Sala de Workshop"
              activities={activities.filter((act) => act.location === 'Sala de Workshop')}
              eventDays={eventDays}
              corr={corr}
            />
          </LocationsContainer>
        ) : (
          ''
        )}
      </ActivitiesContainer>
    )
  ) : (
    <StyledForbiddenMessage>
      Você precisa ter confirmado o <br />
      pagamento antes de fazer a escolha de atividades
    </StyledForbiddenMessage>
  );
}
