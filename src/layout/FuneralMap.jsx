import React from 'react';
import styled from 'styled-components'

import MainView from './MainView'
import Map from '../pages/Map'


const FuneralMap = () => {



    return (
        <Wrapper>
            <MainView>
                <Map />
            </MainView>
        </Wrapper>
    )
};

export default FuneralMap;

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    background-color: var(--AlbescentWhite-50);
    overflow-y: scroll;
`;