import {CLOTH_DEFAULT_SIZE} from 'commons/constants/number';
import {TShirtImage} from 'components/atoms/image/Image';
import React from 'react';

export type TopProps = {
  fill: string;
  width?: number;
  height?: number;
};

function Top({
  fill,
  width = CLOTH_DEFAULT_SIZE,
  height = CLOTH_DEFAULT_SIZE,
}: TopProps) {
  return <TShirtImage fill={fill} width={width} height={height} />;
}

export default Top;
