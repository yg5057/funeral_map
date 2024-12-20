import React from 'react';
import styled, { keyframes } from 'styled-components';


const Button = ({ children, onClick, padding, marginBottom, background, width, borderRadius }) => {
  return (
    <StyledButton onClick={onClick} padding={padding} marginBottom={marginBottom} background={background} width={width} borderRadius={borderRadius}>
      {children}
    </StyledButton>
  );
};

export default Button;


const clickAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.9); }
  100% { transform: scale(1); }
`
const StyledButton = styled.button.attrs(props => ({
  style: {
    width: props.width || '100%',
    padding: props.padding || 'auto',
    marginBottom: props.marginBottom || '0',
    background: props.background || 'auto',
    borderRadius: props.borderRadius || '20px',
  },
}))`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 0.8rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 20px;
  background: var(--Albescent-White-400, #D59962);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:active { 
    animation: ${clickAnimation} 0.2s ease-out; 
  }
`;

