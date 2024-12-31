import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import MenuBtn from '../components/button/MenuBtn';
import Sidebar from './Sidebar';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


const Header = () => {
    const navigate = useNavigate();
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const goToMainPage = () => { navigate('/'); };
    const toggleSidebar = () => { setSidebarOpen(!isSidebarOpen); };
    const goToRecommendPage = () => { navigate('/recommend'); };

    return (
        <>
            <Wrapper>
                <LogoText onClick={goToMainPage}>#무지개별#</LogoText>
                <SubMenuWrapper>
                    <MenuBtn onClick={goToRecommendPage}>장례식장 추천받기</MenuBtn>
                    <StyledIcon onClick={toggleSidebar}>
                        <MenuRoundedIcon style={{ fontSize: '36px', color: 'var(--AlbescentWhite-950, #371C13)' }} />
                    </StyledIcon>
                </SubMenuWrapper>
            </Wrapper>
            <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </>
    );
};


export default Header;


const Wrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 7rem;
    padding: 0.8rem 1.6rem;
    background: var(--Default-White);
    border-bottom: 1px solid var(--Outer-Space-300, #A4B4BC);
`;

const LogoText = styled.h1`
    color: var(--AlbescentWhite-950, #371C13);
    font-family: var(--font-family-secondary);
    font-size: 32px;
    font-weight: 300;
    cursor: pointer;
    @media (max-width: 420px) {
        font-size: 20px;
    }
`;

const SubMenuWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.6rem;
`;

const StyledIcon = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
`;




