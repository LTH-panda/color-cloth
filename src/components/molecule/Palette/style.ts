import {mediaQueries} from 'commons/styles/media-queries';
import theme from 'commons/styles/theme';
import styled from 'styled-components';

export const Palette = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  ${mediaQueries('pc')} {
    flex-direction: column;
  }
  padding: 1rem;
  border-radius: 8px;
  box-shadow: ${theme.layout.shadow100};
`;
