import styled, { ThemeProvider } from 'styled-components';
import { ColorResult, CompactPicker } from 'react-color';
import { selectedColorAtom } from '../atoms/selectedColorAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { GlobalStyles } from '../styles/globalStyles';
import { lightTheme, darkTheme } from '../styles/theme';
import { darkModeAtom } from '../atoms/darkModeAtom';
import Grid from './Grid';
import Header from './Header';

const PlaceWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  height: calc(var(--vh, 1vh) * 100);
`

const Place:React.FC = () => {
  const darkMode = useRecoilValue(darkModeAtom);

  const [, setSelectedColor] = useRecoilState(selectedColorAtom);

  const selectColor = (color: ColorResult) => {
    setSelectedColor(color.hex);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles/>
      <PlaceWrapper>
        <Header/>
        <Grid/>
        <CompactPicker onChange={selectColor}/>  
      </PlaceWrapper>
    </ThemeProvider>
  )
}

export default Place;
