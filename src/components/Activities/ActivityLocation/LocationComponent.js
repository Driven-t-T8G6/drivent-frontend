import styled from 'styled-components';
import ActivityComponent from '../Activity/ActivityComponent';

export default function LocationComponent({ name, activities, showId }) {
  return (
    <LocationContainer name={name}>
      {activities.map((activity, index) => {
        return <ActivityComponent activity={activity} />;
      })}
    </LocationContainer>
  );
}

const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  height: 100%;
  width: 100%;
  border: 1px solid #d7d7d7;
  position: relative;
  ::before {
    content: '${(props) => props.name}';
    position: absolute;
    top: -28px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #7b7b7b;
  }
`;
