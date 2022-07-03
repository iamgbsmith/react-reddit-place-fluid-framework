import { atom } from 'recoil';

export const selectedColorAtom = atom({
  key: 'selectedColorState',
  default: '#fff',
  effects: [
    ({onSet}) => {
      onSet(selectedColor => {
        console.log(`User selected color ${selectedColor}`);
      });
    },
  ],
});
