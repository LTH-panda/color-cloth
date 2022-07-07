import {PAINT_DEFAULT_SIZE} from 'commons/constants/number';
import {Box} from 'components/atoms';
import {PaintImage} from 'components/atoms/image/Image';
import React from 'react';

export type PaintProps = {
  fill: string;
  width?: number;
  height?: number;
};

function Paint({
  fill = '#000',
  width = PAINT_DEFAULT_SIZE,
  height = PAINT_DEFAULT_SIZE,
}: PaintProps) {
  return (
    <Box>
      <PaintImage fill={fill} width={width} height={height} />
    </Box>
  );
}

export default Paint;
