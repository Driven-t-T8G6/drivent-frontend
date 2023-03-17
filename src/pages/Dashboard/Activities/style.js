import styled from 'styled-components';

export const ActivitiesContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const SelectDayContainer = styled.div`
  margin-bottom: 60px;
`;

export const Header = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: #000000;
`;

export const DayFilter = styled.div`
  margin-top: 30px;
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
  gap: 15px;
  margin-top: 16px;
  flex-wrap: wrap;
`;

export const DayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 131px;
  height: 37px;
  background-color: ${(props) => props.cor};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
`;

export const LocationsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
`;
