import { atom } from 'recoil';

// Stores the darkMode state for the app
// Loads default value from local storage
export const darkModeAtom = atom({
  key: 'darkModeState',
  default: (localStorage.getItem('darkMode') === 'true'),
  effects: [
    ({onSet}) => {
      onSet(darkMode => {
        localStorage.setItem('darkMode', Boolean(darkMode).toString());
      });
    },
  ],
});
