import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


const Sidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    const goToMainPage = () => { navigate('/'); };
    const goToAreaPage = () => { navigate('/area'); };
    const goToMapPage = () => { navigate('/map'); };
    const goToRecommendPage = () => { navigate('/recommend'); };


    return (
        <>
            <DimLayer isOpen={isOpen} onClick={onClose} />
            <SidebarWrapper isOpen={isOpen}>
                <SidebarContent>
                    <CloseButton onClick={onClose}>
                        <CloseRoundedIcon style={{ fontSize: '24px', color: 'var(--AlbescentWhite-950, #371C13)' }} />
                    </CloseButton>
                    <MenuItemWrapper>
                        <MenuItem onClick={goToMainPage}>Home</MenuItem>
                        <MenuItem onClick={goToAreaPage}>지역별 장례식장 보기</MenuItem>
                        <MenuItem onClick={goToMapPage}>장례식장 지도보기</MenuItem>
                        <MenuItem onClick={goToRecommendPage}>장례식장 추천받기</MenuItem>
                    </MenuItemWrapper>
                </SidebarContent>
            </SidebarWrapper>
        </>
    );
};

export default Sidebar;


const DimLayer = styled.div`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
`;

const SidebarWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
    padding: 2rem;
    background: #ffffff;
    box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
`;

const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20rem;
`;

const CloseButton = styled.button`
    align-self: flex-start;
    background: none;
    border: none;
    font-size: 1.6rem;
    cursor: pointer;
`;
const MenuItemWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;
    align-self: stretch;
`;
const MenuItem = styled.li`
    align-self: stretch;
    color: var(--AlbescentWhite-950, #371C13);
    font-family: var(--font-family-primary);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; 
    cursor: pointer;

    &:hover {
        color: var( --AlbescentWhite-300);
    }
`;
