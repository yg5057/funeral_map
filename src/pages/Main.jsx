import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

import MainView from '../layout/MainView'
import Footer from '../layout/Footer'
import BtnOutLine from '../components/button/BtnOutLine'
import Chip from '../components/chips/Chip'
import H6 from '../components/typo/H6'
import ParagraphS from '../components/typo/ParagraphS'

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

const Main = () => {

    const navigate = useNavigate();

    const goToMapPage = () => { navigate('/map'); };
    const goToAreaPage = () => { navigate('/area'); };
    const goToRainbowShop = () => { window.open('https://www.rainbowstar.shop/shopinfo/company.html', '_blank'); };
    const goToRecommendPage = () => { navigate('/recommend'); };

    return (
        <Wrapper>
            <MainView>
                <ImageWrapper>
                    <img src='/data/images/mainbanner.png' alt='mainbanner' />
                </ImageWrapper>
                <ListWrapper>
                    <ListItem>
                        <H6 color={'var(--AlbescentWhite-950)'} fontWeight={'700'}>
                            내 주변 반려동물 장례식장 찾기
                        </H6>
                        <ChipWrapper>
                            <Chip>강원도</Chip>
                            <Chip>서울/경기/인천</Chip>
                            <Chip>대전/세종/충남북</Chip>
                            <Chip>대구/경북</Chip>
                            <Chip>부산/울산/경남</Chip>
                            <Chip>광주/전남/전북</Chip>
                        </ChipWrapper>
                        <BtnWrap>
                            <BtnOutLine onClick={goToAreaPage} width={'100%'} fontWeight={'600'} >
                                지역별 장례식장 보기
                                <ArrowForwardIosRoundedIcon style={{ fontSize: '18px', color: 'var(--AlbescentWhite-300)' }} />
                            </BtnOutLine>
                            <BtnOutLine onClick={goToMapPage} width={'100%'} fontWeight={'600'} >
                                내 주변 장례식장 지도로 찾기
                                <ArrowForwardIosRoundedIcon style={{ fontSize: '18px', color: 'var(--AlbescentWhite-300)' }} />
                            </BtnOutLine>
                        </BtnWrap>
                    </ListItem>

                    <ListItem>
                        <H6 color={'var(--AlbescentWhite-950)'} fontWeight={'700'}>
                            반려동물 장례식장 추천 받기
                        </H6>
                        <ContsBoxWrapper>
                            <ThumbnailWrapper>
                                <img src='/data/images/thumbnail01.png' alt='thumbnail' />
                            </ThumbnailWrapper>
                            <TextWrapper>
                                <ParagraphS color={'var(--Outer-Space-600)'} fontWeight={'500'}>마음을 나누는 여정을 함께합니다.</ParagraphS>
                                <ParagraphS color={'var(--Outer-Space-600)'} fontWeight={'500'}>반려동물 장례식장 추천 서비스, #무지개별# 입니다.</ParagraphS>
                            </TextWrapper>
                        </ContsBoxWrapper>
                        <BtnOutLine width={'100%'} fontWeight={'600'} onClick={goToRecommendPage}>
                            반려동물 장례식장 추천 받기
                            <ArrowForwardIosRoundedIcon style={{ fontSize: '18px', color: 'var(--AlbescentWhite-300)' }} />
                        </BtnOutLine>
                    </ListItem>

                    <ListItem>
                        <H6 color={'var(--AlbescentWhite-950)'} fontWeight={'700'}>
                            #무지개별# 이야기 보러가기
                        </H6>
                        <ContsBoxWrapper>
                            <ThumbnailWrapper>
                                <img src='/data/images/thumbnail02.png' alt='thumbnail' />
                            </ThumbnailWrapper>
                            <TextWrapper>
                                <ParagraphS color={'var(--Outer-Space-600)'} fontWeight={'500'}>#무지개별#은 다른 곳에서 공감받지 못한 그 어떤 이야기, 어떤 감정도 공감</ParagraphS>
                                <ParagraphS color={'var(--Outer-Space-600)'} fontWeight={'500'}>받고 위로받고 치유받을 수 있는 공간입니다.</ParagraphS>
                            </TextWrapper>
                        </ContsBoxWrapper>
                        <BtnOutLine width={'100%'} fontWeight={'600'} onClick={goToRainbowShop}>
                            더 많은 #무지개별# 이야기 보러가기
                            <ArrowForwardIosRoundedIcon style={{ fontSize: '18px', color: 'var(--AlbescentWhite-300)' }} />
                        </BtnOutLine>
                    </ListItem>

                </ListWrapper>
                <Footer />
            </MainView>
        </Wrapper>
    )
}

export default Main;


const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: fit-content;
    background-color: var(--AlbescentWhite-50);
`;
const ImageWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    margin-bottom: 2.4rem; 
    background-color: var(--Default-White);
    img {
        max-width: 100%;
        height: fit-content; 
        object-fit: cover; 
    }
`;
const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: fit-content;
    gap: 3.2rem;
    padding: 2.4rem;
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
const ChipWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: fit-content;
    gap: 1.5rem;
    flex-wrap: wrap;
`;
const ContsBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 29.1rem;
    gap: 8px;
`;
const ThumbnailWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: var(--Default-White);
    overflow: hidden;
    img {
        width: 452px; 
        height: 235px; 
        object-fit: cover; 
        border-radius: 10px 10px 0px 0px;
    }
`;
const TextWrapper = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    padding: 4px;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    align-self: stretch;
`;
const BtnWrap = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .8rem;
    align-self: stretch;
`;
