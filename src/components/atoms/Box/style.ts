import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
  border: none;
  background: none;
`;
