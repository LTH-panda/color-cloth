import {JeansImage, TShirtImage} from 'components/atoms/image/Image';
import {Cloth, Palette} from 'components/molecule';
import React from 'react';

export type ClothsProps = {
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

function ClothsView({onClick}: ClothsProps) {
  return (
    <Palette>
      <Cloth onClick={onClick} id="tShirt">
        <TShirtImage />
      </Cloth>
      <Cloth onClick={onClick} id="jeans">
        <JeansImage />
      </Cloth>
    </Palette>
  );
}

export default ClothsView;
