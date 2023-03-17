import { BiExit } from 'react-icons/bi';
import { VscError } from 'react-icons/vsc';
import { differenceInHours, format } from 'date-fns';
import { ActivityContainer, TitleTime, Vacancies } from './style';
import dayjs from 'dayjs';

export default function ActivityComponent({ activity }) {
  const today9am = new Date(dayjs().toDate().setHours(9, 0, 0, 0));
  const final = new Date(dayjs().add(3, 'days').toDate().setHours(18, 0, 0, 0));
  console.log('🚀 ~ file: ActivityComponent.js:10 ~ ActivityComponent ~ today9am:', today9am);
  console.log('🚀 ~ file: ActivityComponent.js:10 ~ ActivityComponent ~ final:', final);
  const { title, startsAt, endsAt, capacity, subscriptions } = activity;
  const vacancy = capacity - subscriptions;
  const newStart = format(new Date(startsAt), 'HH:mm');
  const newEnd = format(new Date(endsAt), 'HH:mm');
  const duration = differenceInHours(new Date(endsAt), new Date(startsAt));
  return (
    <ActivityContainer duration={duration}>
      <TitleTime>
        <p>{title}</p>
        <p>
          <span>
            {newStart} - {newEnd}
          </span>
        </p>
      </TitleTime>
      <Vacancies vacancy={vacancy}>
        {vacancy === 0 ? <VscError /> : <BiExit />}
        {vacancy === 0 ? <p>Esgotado</p> : <p>{vacancy} vagas</p>}
      </Vacancies>
    </ActivityContainer>
  );
}
