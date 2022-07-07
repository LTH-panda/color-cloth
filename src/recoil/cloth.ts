import {atom} from 'recoil';

export type CurrentCloth = 'top' | 'bottom';
export type Top = 'tShirt';
export type Bottom = 'jeans';

export const currentCloth = atom<CurrentCloth>({
  key: 'currentCloth',
  default: 'top',
});

export const top = atom<Top>({
  key: 'top',
  default: 'tShirt',
});

export const bottom = atom<Bottom>({
  key: 'bottom',
  default: 'jeans',
});
