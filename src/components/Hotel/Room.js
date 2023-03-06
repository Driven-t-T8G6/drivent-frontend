import { useEffect } from 'react';
import styled from 'styled-components';

const StyledRoom = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 190px;
    height: 45px;
    padding: 12px;
    background-color: ${props => props.selectedRoom !== props.id ? '#FFFFFF' : '#FFEED2'};
    margin-right: 17px;
    margin-bottom: 8px;

    border: 1px solid #CECECE;
    border-radius: 10px;
    :hover {
        cursor: pointer;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #454545;
    }
    ion-icon {
        font-size: 21px;
        margin-left: 7px;
    }
    #pink {
      color: #FF4791;
    }
    :disabled {
        background-color: #E9E9E9;
    }
`;

export default function Room({ data, selectedRoomState, booked }) {
  const [capacity, filled] = [data.capacity, data.Booking.length];
  const [selectedRoom, setSelectedRoom] = selectedRoomState;
  const unfilled = capacity - filled - (selectedRoom === data.id && !booked);

  return(
    <StyledRoom disabled={selectedRoom !== data.id && capacity === filled} selectedRoom={selectedRoom} id={data.id} onClick={() => setSelectedRoom(data.id)}>
      <h1>{data.name}</h1>
      <div>
        {unfilled > 0 && [...Array(unfilled)].map((value, index) => <ion-icon key={index} name="person-outline"/>)}
        {filled - booked > 0 && [...Array(filled - booked)].map((value, index) => <ion-icon key={index} name="person"/>)}
        {(selectedRoom === data.id || booked) && <ion-icon name="person" id="pink"/>}
      </div>
    </StyledRoom>
  );
}
