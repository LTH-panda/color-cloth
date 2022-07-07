import React from 'react';
import * as S from './style';

export type BoxProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  id: string;
};

function Box({children, onClick, id}: BoxProps) {
  return (
    <S.Box onClick={onClick} id={id}>
      {children}
    </S.Box>
  );
}

export default Box;
