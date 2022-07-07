import {atom} from 'recoil';

export const topColor = atom<string>({
  key: 'topColor',
  default: '#000',
});

export const bottomColor = atom<string>({
  key: 'bottomColor',
  default: '#000',
});
