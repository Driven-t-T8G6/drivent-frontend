import { BiExit, BiCheckCircle } from 'react-icons/bi';
import { VscError } from 'react-icons/vsc';
import { differenceInHours, format } from 'date-fns';
import { ActivityContainer, TitleTime, Vacancies } from './style';
import { subscribeActivity, unsubscribeActivity } from '../../../services/activityApi';
import useToken from '../../../hooks/useToken';
import { useEffect, useState } from 'react';

export default function ActivityComponent({ activity, eventDays, corr }) {
  const token = useToken();
  const { title, startsAt, endsAt, capacity, subscriptions, id, Subscriptions } = activity;
  const [subscribed, setSubscribed] = useState(false);
  const [isDisplayingActivity, setIsDisplayingActivity] = useState(false);
  const vacancy = capacity - subscriptions;
  const newStart = format(new Date(startsAt), 'HH:mm');
  const newEnd = format(new Date(endsAt), 'HH:mm');
  const duration = differenceInHours(new Date(endsAt), new Date(startsAt));
  const activityDay = activity.startsAt.slice(8, 10) + '/' + activity.startsAt.slice(5, 7);
  console.log(activityDay);
  console.log(eventDays[corr[0]].date);

  useEffect(() => {
    if (Subscriptions.length > 0) setSubscribed(true);
    if (activityDay === eventDays[corr[0]].date) {
      setIsDisplayingActivity(true);
    }
    if (activityDay !== eventDays[corr[0]].date) {
      setIsDisplayingActivity(false);
    }
  }, [subscribed, corr]);

  function subscribeUnsubscribe() {
    if (subscribed) {
      unsubscribeActivity(token, id);
      setSubscribed(false);
    } else {
      subscribeActivity(token, id);
      setSubscribed(true);
    }
  }

  return isDisplayingActivity ? (
    <ActivityContainer duration={duration} subscribed={subscribed}>
      <TitleTime>
        <p>{title}</p>
        <p>
          <span>
            {newStart} - {newEnd}
          </span>
        </p>
      </TitleTime>
      <Vacancies onClick={subscribeUnsubscribe} vacancy={vacancy} disabled={vacancy === 0} subscribed={subscribed}>
        {subscribed ? <BiCheckCircle /> : vacancy === 0 ? <VscError /> : <BiExit />}
        {subscribed ? <p>Inscrito</p> : vacancy === 0 ? <p>Esgotado</p> : <p>{vacancy} vagas</p>}
      </Vacancies>
    </ActivityContainer>
  ) : (
    ''
  );
}
