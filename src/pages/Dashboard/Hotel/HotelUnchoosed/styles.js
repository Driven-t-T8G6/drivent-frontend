import styled from 'styled-components';

export const StyledForbiddenMessage = styled.div`

    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #8E8E8E ;
`;

export const StyledAllowedView = styled.div`
    h2 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #8E8E8E;
    }
`;

export const StyledTitle = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #000000;
    margin-bottom: 36px;
`;

export const HotelsContainer = styled.div`
    display: flex;
`;

export const RoomContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledReservateButton = styled.button`
    width: 182px;
    outline: none;
    border: 0px;
    :hover {
        cursor: pointer;
    }
    margin-top: 38px;;
    height: 37px;
    background: #E0E0E0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;

    color: #000000;
`;
