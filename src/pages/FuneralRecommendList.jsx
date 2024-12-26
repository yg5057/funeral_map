import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components'

import MainView from '../layout/MainView';
import Footer from '../layout/Footer';
import RecommendList from '../components/list/RecommendList';

import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

const FuneralRecommendList = () => {
    const location = useLocation();
    const recommendData = location.state?.recommendData || [];

    const navigate = useNavigate();
    const goBack = () => { navigate(-1); };



    return (
        <Wrapper>
            <MainView>
                <BackBtnWrapper>
                    <ArrowBackIosRoundedIcon onClick={goBack} style={{ fontSize: '28px', color: 'var(--AlbescentWhite-950)' }} />
                </BackBtnWrapper>
                <ListWrapper>
                    <ListItem>
                        <RecommendList data={recommendData} />
                    </ListItem>
                </ListWrapper>
                <Footer />
            </MainView>
        </Wrapper>
    )
}

export default FuneralRecommendList;


const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: fit-content;
    background-color: var(--AlbescentWhite-50);
`;
const BackBtnWrapper = styled.div`
    width: 100%;
    height: 7rem;
    padding: .8rem 1.6rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;
    background-color: var(--Default-White);
    cursor: pointer;
`;
const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: fit-content;
    background-color: var(--Default-White);
`;
const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: fit-content;
    gap: 2.4rem;
    background-color: var(--Default-White);
`;