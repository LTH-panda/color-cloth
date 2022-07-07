import {bottom, top} from 'services/cloths';

export default function getCloths() {
  const topData = top;
  const bottomData = bottom;

  return {topData, bottomData};
}
