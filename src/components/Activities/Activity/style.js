import styled from 'styled-components';

export const ActivityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: ${(props) => props.duration * 80 + (props.duration - 1) * 10 + 'px'};
  background: ${(props) => (props.subscribed === true ? '#D0FFDB' : '#F1F1F1')};
  border-radius: 5px;
  padding: 10px;
`;

export const TitleTime = styled.div`
  padding-right: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    span {
      font-weight: 400;
    }
  }
`;

export const Vacancies = styled.button`
  padding: 0 0 0 5px;
  width: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  border-left: 1px solid ${(props) => (props.subscribed === true ? '#99E8A1' : '#CFCFCF')};
  color: ${(props) => (props.vacancy === 0 ? '#CC6666' : '#078632')};
  svg {
    font-size: 20px;
    cursor: ${(props) => (props.vacancy === 0 ? 'auto' : 'pointer')};
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 11px;
    text-align: center;
  }
`;
