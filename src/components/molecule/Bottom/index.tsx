import {CLOTH_DEFAULT_SIZE} from 'commons/constants/number';
import {JeansImage} from 'components/atoms/image/Image';
import React from 'react';

export type BottomProps = {
  fill: string;
  width?: number;
  height?: number;
};

function Bottom({
  fill,
  width = CLOTH_DEFAULT_SIZE,
  height = CLOTH_DEFAULT_SIZE,
}: BottomProps) {
  return <JeansImage fill={fill} width={width} height={height} />;
}

export default Bottom;
