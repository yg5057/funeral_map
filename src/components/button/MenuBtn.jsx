import React from 'react';
import styled, { keyframes } from 'styled-components';





const MenuBtn = ({ children, onClick, padding, background, width, borderRadius }) => {
    return (
        <StyledButton onClick={onClick} padding={padding} background={background} width={width} borderRadius={borderRadius}>
            {children}
        </StyledButton>
    );
};

export default MenuBtn;




const clickAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
`

const StyledButton = styled.button.attrs(props => ({
    style: {
        padding: props.padding || 'auto',
        marginBottom: props.marginBottom || '0',
        background: props.background || 'auto',
        width: props.width || 'auto',
        borderRadius: props.borderRadius || '.4rem',
    },
}))`
    display: flex;
    width: fit-content;
    height: fit-content;
    padding: 0.8rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: var(--AlbescentWhite-300, #D59962);
    color: var(--Default-White);
    font-family: var(--font-family-primary);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; 
    text-align: center;
    cursor: pointer;
    user-select: none;
        &:active { 
        animation: ${clickAnimation} 0.2s ease-out; 
        }
`;


