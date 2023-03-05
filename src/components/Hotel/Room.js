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

export default function Room({ data, selectedRoomState }) {
  const [capacity, filled] = [data.capacity, data.Booking.length];
  const [selectedRoom, setSelectedRoom] = selectedRoomState;

  console.log(data.id + ' ' + selectedRoom);
  return(
    <StyledRoom disabled={selectedRoom !== data.id && capacity === filled} selectedRoom={selectedRoom} id={data.id} onClick={() => setSelectedRoom(data.id)}>
      <h1>{data.name}</h1>
      <div>
        {[...Array(capacity - filled - (selectedRoom === data.id))].map((value, index) => <ion-icon key={index} name="person-outline"/>)}
        {selectedRoom === data.id && <ion-icon name="person" id="pink"/>}
        {[...Array(filled)].map((value, index) => <ion-icon key={index} name="person"/>)}
      </div>
    </StyledRoom>
  );
}
