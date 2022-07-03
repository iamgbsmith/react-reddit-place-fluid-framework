import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { darkModeAtom } from '../atoms/darkModeAtom';
import Button from './Button';

// Spacer to ensure the title is more centre aligned
const Spacer = styled.div`
  width: 40px;  
`

const Title = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 36px;
  letter-spacing: 0.1rem;
  font-weight: 900;
`

const HeaderWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  border-bottom: 1px solid;
  border-bottom-color: lightgray;
`  
  
const Header:React.FC = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  
  return (
    <HeaderWrapper>  
      <Spacer />
      <Title>r/eplace</Title>
      <Button
        border='none'
        color='green'
        cursor='pointer'
        onClick={toggleDarkMode}
        children=
          {darkMode ?
            <span aria-label='Dark mode' role='img'>🌒</span> :
            <span aria-label='Light mode' role='img'>☀️</span> }
        />
    </HeaderWrapper>
  )
}

export default Header;
