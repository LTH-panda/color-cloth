import {Cloths, Colors, Mannequin} from 'components/organism';
import React from 'react';
import * as S from './style';

function HomeBoard() {
  return (
    <S.Container>
      <Mannequin />
      <Cloths />
      <Colors />
    </S.Container>
  );
}

export default HomeBoard;
