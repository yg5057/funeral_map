import React from 'react';
import styled from 'styled-components';




const TabMenu = ({ index, activeTab, hoveredTab, onClick, onMouseEnter, onMouseLeave, icon: Icon, label }) => (
    <TabMenuItem
        onClick={() => onClick(index)}
        onMouseEnter={() => onMouseEnter(index)}
        onMouseLeave={onMouseLeave}
        isActive={activeTab === index}
        isHovered={hoveredTab === index}
    >
        <StyledIcon isActive={activeTab === index} isHovered={hoveredTab === index}>
            <Icon sx={{ fontSize: '3.2rem' }} />
        </StyledIcon>
        <TabMenuText isActive={activeTab === index} isHovered={hoveredTab === index}>{label}</TabMenuText>
    </TabMenuItem>
);


export default TabMenu


const TabMenuItem = styled.li`
    width: 25%;
    height: 8.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .8rem;
    border-bottom: 1px solid var(--Outer-Space-300, #A4B4BC);
    cursor: pointer;
    &:hover { background-color: #FBF7F1; }
    ${({ isActive }) => isActive && ` border-bottom: 3px solid #9E5330; background-color: #FBF7F1;  `}
`;

const TabMenuText = styled.p`
    color: var(--Albescent-White-950, #371C13);
    text-align: center;
    font-family: var(--font-family-primary);
    font-size: 16px;
    font-weight: 500;
    ${({ isActive }) => isActive && ` font-weight: 700; color: #9E5330; `}
`;

const StyledIcon = styled.div`
    color: ${({ isActive, isHovered }) => {
        if (isActive) return '#9E5330';
        if (isHovered) return '#9E5330';
        return '#371C13';
    }};
    font-size: 3.2rem;
    transition: color 0.3s ease; 
`;