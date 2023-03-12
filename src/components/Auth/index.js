import styled from 'styled-components';

import Container from '../Container';

import { Link } from 'react-router-dom';

export const StyledContainer = styled(Container)`
  font-size: 16px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-top: 10px;
`;

export const Label = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const GitHubButton = styled.a`
  width: 200px;
  height: 40px;
  border-radius: 4px;
  outline: none;
  background-color: white;
  border: solid 1px;
  margin: 10px;
  font-family: 'Roboto';
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  ion-icon {
    font-size: 24px;
    margin: 4px;
  }
`;
