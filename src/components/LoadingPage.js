import { Oval } from 'react-loader-spinner/dist/loader/Oval';
import styled from 'styled-components';

const StyledLoadingPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function LoadingPage() {
  return(
    <StyledLoadingPage>
      <Oval
        height="80"
        width="80"
        color="gray"
      />
    </StyledLoadingPage>
  );
}
