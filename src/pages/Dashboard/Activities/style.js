import styled from 'styled-components';

export const Header = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: #000000;
`;

export const DayFilter = styled.div`
  margin-top: 36px;
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
  }
`;
export const DaysContainer = styled.div`
  display: flex;
  margin-top: 23px;
`;
export const DayContainer = styled.div`
  width: 131px;
  height: 37px;
  background-color: ${(props) => props.cor};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-right: 16px;
`;
