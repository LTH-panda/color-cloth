import {Box} from 'components/atoms';
import {PoloShirtImage} from 'components/atoms/image/Image';
import React from 'react';

export type ClothProps = {
  cloth: any;
};

function Cloth({cloth}: ClothProps) {
  return (
    <Box>
      <PoloShirtImage />
    </Box>
  );
}

export default Cloth;
