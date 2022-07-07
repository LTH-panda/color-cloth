import React from 'react';
import getCloths from 'utils/getCloths';
import ClothsView, {ClothsProps} from './view';

function Cloths() {
  const {topData, bottomData} = getCloths();
  const props: ClothsProps = {
    cloths: [...topData, ...bottomData],
  };

  return <ClothsView {...props} />;
}

export default Cloths;
