import React from 'react';
import MannequinView, {MannequinProps} from './view';

function Mannequin() {
  const props: MannequinProps = {
    topFill: 'red',
    bottomFill: 'blue',
  };

  return <MannequinView {...props} />;
}

export default Mannequin;
