import styled from 'styled-components';

export const StyledPaymentCompletedView = styled.div`
    h2 {
        margin-top: 36px;
        margin-bottom: 14px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        color: #8E8E8E;
    }
`;

export const StyledTitle= styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
`;

export const StyledIcon = styled.div`

display: flex;
    align-items: center;
    justify-content: center;
    ion-icon {
        font-size: 260px;
        color: ${props => props.success === 'true' ? 'green' : 'red'};
    }
    margin-top: 15%;
`;

export const StyledChangeButton = styled.button`
    margin-top: 100px;
    width: 182px;
    outline: none;
    border: 0px;
    :hover {
        cursor: pointer;
    }
    height: 37px;
    background: #E0E0E0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;

    color: #000000;
`;
