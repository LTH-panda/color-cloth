import React from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {currentCloth} from 'recoil/cloth';
import {bottomColor, topColor} from 'recoil/color';
import getColors from 'utils/getColors';
import ColorsView, {ColorsProps} from './view';

function Colors() {
  const colors = getColors();
  const clothType = useRecoilValue(currentCloth);
  const setTopColor = useSetRecoilState(topColor);
  const setBottomColor = useSetRecoilState(bottomColor);

  const props: ColorsProps = {
    colors,
    onClick: (e: React.MouseEvent<HTMLDivElement>) => {
      const targetColor = e.currentTarget.id;
      switch (clothType) {
        case 'top':
          setTopColor(targetColor);
          break;
        case 'bottom':
          setBottomColor(targetColor);
          break;
        default:
          break;
      }
    },
  };

  return <ColorsView {...props} />;
}

export default Colors;
