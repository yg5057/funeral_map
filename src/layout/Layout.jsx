import React from 'react';
import styled from 'styled-components';


const MainWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Layout = ({ children }) => {

    return (
        <MainWrapper>
            {children}
        </MainWrapper>
    );
};

export default Layout;