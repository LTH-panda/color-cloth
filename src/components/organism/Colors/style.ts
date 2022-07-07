import {mediaQueries} from 'commons/styles/media-queries';
import styled from 'styled-components';

export const Container = styled.div`
  ${mediaQueries('pc')} {
    order: -5;
  }
`;
