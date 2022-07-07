import React from 'react';
import {useSetRecoilState} from 'recoil';
import {currentCloth} from 'recoil/cloth';
import ClothsView, {ClothsProps} from './view';

function Cloths() {
  const setCurrentCloth = useSetRecoilState(currentCloth);
  const props: ClothsProps = {
    onClick: (e: React.MouseEvent<HTMLDivElement>) => {
      const targetCloth = e.currentTarget.id;
      switch (targetCloth) {
        case 'poloShirt':
          setCurrentCloth('top');
          break;
        case 'jeans':
          setCurrentCloth('bottom');
          break;
        default:
          break;
      }
    },
  };

  return <ClothsView {...props} />;
}

export default Cloths;
