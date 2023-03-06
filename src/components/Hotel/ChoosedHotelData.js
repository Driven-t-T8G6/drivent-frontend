import styled from 'styled-components';

const StyledHotel = styled.div`
    width: 196px;
    height: 246px;
    margin: 34px;
    margin-left: 0px;
    background-color: #FFEED2;
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

export default function ChoosedHotelData({ data }) {
  const capacityName = ['Single', 'Double', 'Triple'];
  return(
    <StyledHotel>
      <ImgContainer><img src={data?.Hotel?.image} alt='Hotel Visualization'/></ImgContainer>
      <h1>{data?.Hotel?.name}</h1>
      <h3>Quarto reservado</h3>
      <h4>{`${data?.name} (${capacityName[data?.capacity - 1]})`}</h4>
      <h3>Pessoas no seu quarto</h3>
      <h4>{data?.Booking?.length === 1 ? 'Apenas você' : `Você e mais ${data?.Booking?.length - 1} pessoas`}</h4>
    </StyledHotel>    
  );
}
