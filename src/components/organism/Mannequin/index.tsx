import React from 'react';
import {useRecoilValue} from 'recoil';
import {bottomColor, topColor} from 'recoil/color';
import MannequinView, {MannequinProps} from './view';

function Mannequin() {
  const topFill = useRecoilValue(topColor);
  const bottomFill = useRecoilValue(bottomColor);

  const props: MannequinProps = {
    topFill,
    bottomFill,
  };

  return <MannequinView {...props} />;
}

export default Mannequin;
