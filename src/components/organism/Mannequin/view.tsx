import {Bottom, Top} from 'components/molecule';
import React from 'react';
import * as S from './style';

export type MannequinProps = {
  topFill: string;
  bottomFill: string;
};

function MannequinView({topFill, bottomFill}: MannequinProps) {
  return (
    <S.Container>
      <Top fill={topFill} />
      <Bottom fill={bottomFill} />
    </S.Container>
  );
}

export default MannequinView;
