import { useState } from 'react';
import styled from 'styled-components';

const StyledHotel = styled.div`
    width: 196px;
    height: 246px;
    margin: 34px;
    margin-left: 0px;
    background-color: ${props => props.selected === props.index? '#FFEED2' : '#ebebeb'};
    border-radius: 10px;
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
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export default function HotelData({ data, selectedState, index }) {
  const [selected, setSelected] = selectedState;

  return (
    <StyledHotel selected={selected} index={index} onClick={() => setSelected(index)}>
      <ImgContainer><img src={data.image} alt="Hotel Visualization"/></ImgContainer>
      <h1>{data.name}</h1>
    </StyledHotel>    
  );
}
