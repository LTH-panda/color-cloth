import React from 'react';
import getColors from 'utils/getColors';
import ColorsView, {ColorsProps} from './view';

function Colors() {
  const colors = getColors();
  const props: ColorsProps = {
    colors,
  };

  return <ColorsView {...props} />;
}

export default Colors;
