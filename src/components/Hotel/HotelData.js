import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useToken from '../../hooks/useToken';
import * as hotelServices from '../../services/hotelApi';

const StyledHotel = styled.div`
    width: 196px;
    height: 246px;
    margin: 34px;
    margin-left: 0px;
    background-color: ${props => props.selected === props.id? '#FFEED2' : '#ebebeb'};
    border-radius: 10px;
    :hover {
        cursor: pointer;
    }
    h1 {
      margin-left: 15px;
      margin-top: 10px;
      text-align: start;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;

      color: #343434;
    }
    h3 {
      margin-top: 10px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      margin-left: 15px;

      color: #3C3C3C;
    }
    h4 {
      margin-bottom: 4px;
      margin-left: 15px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;

      color: #3C3C3C;
    }
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

function getMessage(types) {
  let totalTypes = types[0] + types[1] + types[2];
  let message = '';

  if(types[0]) {
    totalTypes--;
    message += 'Single';
    if(totalTypes === 1)
      message += ' e ';
    else if(totalTypes === 2)
      message += ', ';
  }
  if(types[1]) {
    totalTypes--;
    message += 'Double';
    if(totalTypes === 1)
      message += ' e ';
  }
  if(types[2]) 
    message += 'Triple';
  return message;
}

export default function HotelData({ data, selectedState, roomsState }) {
  const [selected, setSelected] = selectedState;
  const [rooms, setRooms] = useState([]);
  const [capacity, setCapacity] = useState(0);
  const [typesMessage, setTypesMessage] = useState('');
  const [displayRooms, setDisplayRooms] = roomsState;

  const token = useToken();
  useEffect(async() => {
    const aux = await hotelServices.getHotelWithRoom(token, data.id);
    console.log(aux.Rooms); 
    setRooms(aux.Rooms);

    let totalCapacity = 0;
    const types = [false, false, false];
    aux.Rooms.forEach(element => {
      totalCapacity += element.capacity;
      types[element.capacity-1] = true;
    });
    const message = getMessage(types);
    
    setTypesMessage(message);
    setCapacity(totalCapacity);
  }, []);

  function handleSelection() {
    setSelected(data.id);
    setDisplayRooms(rooms);
  }

  return (
    <StyledHotel selected={selected} id={data.id} onClick={handleSelection}>
      <ImgContainer><img src={data.image} alt='Hotel Visualization'/></ImgContainer>
      <h1>{data.name}</h1>
      <h3>Tipos de acomodação:</h3>
      <h4>{typesMessage}</h4>
      <h3>Vagas disponíveis</h3>
      <h4>{capacity}</h4>
    </StyledHotel>    
  );
}
