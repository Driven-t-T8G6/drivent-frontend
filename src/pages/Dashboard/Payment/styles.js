import styled from 'styled-components';

export const Header = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: #000000;
`;
export const TicketType = styled.div`
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
  }
`;
export const HotelType = styled.div`
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
  }
`;
export const OptionsContainer = styled.div`
  display: flex;
`;
export const Option = styled.div`
  height: 145px;
  width: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;
  background-color: ${(props) => props.cor}; ;
`;
