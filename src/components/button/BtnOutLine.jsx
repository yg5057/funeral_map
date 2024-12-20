import React from 'react';
import styled, { keyframes } from 'styled-components';


const BtnOutLine = ({ children, onClick, padding, marginBottom, background, width, color, fontWeight, textAlign, fontFamily }) => {
    return (
        <StyledButton onClick={onClick}
            padding={padding} marginBottom={marginBottom} background={background} width={width}
            color={color} fontWeight={fontWeight} textAlign={textAlign} fontFamily={fontFamily}>
            {children}
        </StyledButton>
    );
};

export default BtnOutLine;

const hoverAnimation = keyframes`
  0% { background-color: var(--Default-White); }
  100% {background: var(--Albescent-White-700, #9E5330); }
`;

const StyledButton = styled.button.attrs(props => ({
    style: {
        padding: props.padding || 'auto',
        marginBottom: props.marginBottom || '0',
        background: props.background || 'auto',
        width: props.width || 'auto',
        color: props.color || 'auto',
        fontWeight: props.fontWeight || 'auto',
        textAlign: props.textAlign || 'auto',
        fontFamily: props.fontFamily || 'auto',
    },
}))`
    display: flex;
    width: 100%;
    height: 4.5rem;
    padding: 0.80rem 1.6rem;
    justify-content: center;
    align-items: center;
    gap: .8rem;
    border-radius: 10px;
    background: var(--Default-White);
    border: 1px solid var(--AlbescentWhite-400);
    text-align: center;
    color: var(--AlbescentWhite-400);
    font-family: var(--font-family-primary);
    font-size: 16px;
    font-style: normal;
    line-height: 24px; 
    word-wrap: break-word;
    word-break: keep-all;
    text-align: center;
    cursor: pointer;
    user-select: none;
    &:hover { 
      animation: ${hoverAnimation} 0.3s forwards; 
      color: var(--Default-White); 
    }
`;


