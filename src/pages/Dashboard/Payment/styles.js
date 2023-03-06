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
  margin-top: 37px;
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
  margin-top: 37px;
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
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const Option = styled.div`
  height: 145px;
  width: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;
  background-color: ${(props) => props.cor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Price = styled.div`
  margin-top: 5px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #898989;
`;

export const WithoutEnrollment = styled.div`
  height: calc(100% - 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    height: 46px;
    width: 388px;
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
  }
`;

export const ResumeContainer = styled.div`
  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
    span {
      font-weight: 600;
    }
  }
  button {
    margin-top: 20px;
    background: #e0e0e0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 4px;
    font-size: 14px;
    line-height: 16px;
    padding: 12px;
  }
`;
