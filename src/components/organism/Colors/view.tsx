import {Paint, Palette} from 'components/molecule';
import React from 'react';
import * as S from './style';

export type ColorsProps = {
  colors: string[];
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

function ColorsView({colors, onClick}: ColorsProps) {
  return (
    <S.Container>
      <Palette>
        {colors.map(color => (
          <Paint fill={color} onClick={onClick} key={color} />
        ))}
      </Palette>
    </S.Container>
  );
}

export default ColorsView;
