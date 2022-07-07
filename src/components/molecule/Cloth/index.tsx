import React from 'react';
import {Box} from 'components/atoms';
import {Bottom, Top} from 'recoil/cloth';
import * as S from './style';

export type ClothProps = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  id: Top | Bottom;
};

function Cloth({children, onClick, id}: ClothProps) {
  return (
    <S.Cloth>
      <Box id={id} onClick={onClick}>
        {children}
      </Box>
    </S.Cloth>
  );
}

export default Cloth;
