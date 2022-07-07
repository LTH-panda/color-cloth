import React from 'react';
import * as S from './style';

export type PaletteProps = {
  children: React.ReactNode;
};

function Palette({children}: PaletteProps) {
  return <S.Palette>{children}</S.Palette>;
}

export default Palette;
