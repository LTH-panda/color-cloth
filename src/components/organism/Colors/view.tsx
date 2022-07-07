import {Paint, Palette} from 'components/molecule';
import React from 'react';
import * as S from './style';

export type ColorsProps = {
  colors: string[];
};

function ColorsView({colors}: ColorsProps) {
  return (
    <S.Container>
      <Palette>
        {colors.map(color => (
          <Paint fill={color} key={color} />
        ))}
      </Palette>
    </S.Container>
  );
}

export default ColorsView;
