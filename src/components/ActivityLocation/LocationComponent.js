import { ActivityContainer, LocationContainer } from './style';

export default function LocationComponent({ name }) {
  return (
    <LocationContainer name={name}>
      <ActivityContainer>Atividade 1</ActivityContainer>
    </LocationContainer>
  );
}
