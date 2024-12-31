import React from 'react'
import styled from 'styled-components'

import Header from './Header'

const MainView = ({ children }) => {
    return (
        <MainViewWrapper>
            <Header />
            {children}
        </MainViewWrapper>
    )
}

export default MainView


const MainViewWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
    height: fit-content;
    max-width: 50rem;
    background: var(--Default-Whit);
    box-shadow: 25px 0px 60px -10px rgba(28, 39, 49, 0.12);
    overflow-y: auto; 
    overflow-x: hidden; 
    -ms-overflow-style: none; 
    scrollbar-width: none; 

    &::-webkit-scrollbar {
        display: none; 
    }
`;