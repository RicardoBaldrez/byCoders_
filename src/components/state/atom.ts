import { atom } from 'recoil';

export const detailsLocalAtom = atom<any>({
  key: 'details',
  default: [],
});
