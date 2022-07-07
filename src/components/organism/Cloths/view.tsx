import {Cloth, Palette} from 'components/molecule';
import React from 'react';

export type ClothsProps = {
  cloths: string[];
};

function ClothsView({cloths}: ClothsProps) {
  return (
    <Palette>
      {cloths.map(c => (
        <Cloth cloth={c} />
      ))}
    </Palette>
  );
}

export default ClothsView;
