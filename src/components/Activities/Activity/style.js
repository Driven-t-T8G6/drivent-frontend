import styled from 'styled-components';

export const ActivityContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: ${(props) => props.duration * 80 + (props.duration - 1) * 10 + 'px'};
  background: #f1f1f1;
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

export const Vacancies = styled.div`
  padding-left: 5px;
  width: 60px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 1px solid #cfcfcf;
  color: ${(props) => (props.vacancy === 0 ? '#CC6666' : '#078632')};
  svg {
    font-size: 15px;
  }
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 11px;
  }
`;
