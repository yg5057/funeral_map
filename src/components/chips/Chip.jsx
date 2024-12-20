import React from 'react'
import styled, { keyframes } from 'styled-components';

const Chip = ({ children }) => {
    return (
        <ChipWrapper>
            {children}
        </ChipWrapper>
    )
}

export default Chip

const hoverAnimation = keyframes`
  0% { background-color: var(--Default-White); }
  100% {background: var(--Albescent-White-700, #9E5330); }
`;

const ChipWrapper = styled.div`
    display: flex;
    padding: .8rem;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: 6px;
    background: var(--Albescent-White-100, #F5E9D7);
    color: var(--Albescent-White-900, #673927);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    cursor: pointer; 
    &:hover { 
        background: var(--Albescent-White-100, #F5E9D7);
        animation: ${hoverAnimation} 0.3s forwards; 
        color: var(--Default-White); 
    }
`;