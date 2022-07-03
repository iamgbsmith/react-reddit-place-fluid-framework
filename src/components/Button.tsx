import styled from 'styled-components';

const ButtonWrapper = styled.button<{width?: string, height?: string,border?: string, cursor?: string}>`
  font-size: 1rem; 
  margin: 10px;
  text-align: center;
  width: ${props => props.width};
  height: ${props => props.height};
  cursor: ${props => props.cursor};
  border: ${props => props.border};
  background: none;
`;

type ButtonProps = {
  border?: string;
  color: string;
  text?: string;
  cursor?: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick: () => void;
}

const Button = ({ border, color, text, cursor, width, height, disabled, children, onClick }: ButtonProps) => {
  return (
    <>
      <ButtonWrapper 
        border={border}
        color={color}
        cursor={cursor}
        width={width}
        height={height}
        disabled={disabled}
        onClick={onClick}>
        {text}
        {children}
      </ButtonWrapper>
    </>
  )
}

export default Button;
