import React from 'react';
import * as S from './style';

export type BoxProps = {
  children: React.ReactNode;
};

function Box({children}: BoxProps) {
  return <S.Box>{children}</S.Box>;
}

export default Box;
