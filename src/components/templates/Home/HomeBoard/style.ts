import {mediaQueries} from 'commons/styles/media-queries';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  width: 100vw;
  height: 100vh;

  ${mediaQueries('pc')} {
    flex-direction: row;
    justify-content: space-around;
  }
`;
