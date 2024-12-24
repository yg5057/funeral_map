import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

import MainView from '../layout/MainView'
import Footer from '../layout/Footer'
import BtnOutLine from '../components/button/BtnOutLine'
import H6 from '../components/typo/H6'
import ParagraphM from '../components/typo/ParagraphM'
import ParagraphL from '../components/typo/ParagraphL'
import Modal from '../components/modal/Modal';

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

const FuneralRecommend = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const navigate = useNavigate();
    const goBack = () => { navigate(-1); };

    const openModal = () => { setModalOpen(true); };
    const closeModal = () => { setModalOpen(false); };

    const handleSubmit = (formData) => {
        console.log('Form Submitted:', formData);
        alert('폼 데이터가 제출되었습니다!');
    };

    return (
        <Wrapper>
            <MainView>
                <BackBtnWrapper>
                    <ArrowBackIosRoundedIcon onClick={goBack} style={{ fontSize: '28px', color: 'var(--AlbescentWhite-950)' }} />
                </BackBtnWrapper>
                <ImageWrapper>
                    <img src='/data/images/thumbnail01.png' alt='mainbanner' />
                </ImageWrapper>
                <ListWrapper>
                    <ListItem>
                        <H6 color={'#1b1b1b'} fontWeight={'700'} textAlign={'left'}>
                            마음을 나누는 마지막 여정을 함께합니다.<br />
                            반려동물 장례식장 추천서비스,<br />
                            <Span>#무지개별#</Span> 입니다.
                        </H6>
                        <ParagraphL color={'#3D454D'} fontWeight={'500'} textAlign={'left'}>
                            #무지개별#은 소중했던 반려동물과의 마지막 순간을 조금 더 평화롭고 아름답게 보내실 수 있도록 돕기위해 만들어졌습니다.
                        </ParagraphL>
                        <ParagraphL color={'#3D454D'} fontWeight={'500'} textAlign={'left'}>
                            저희는 보호자님들께<br />
                            가장 소중한 마지막 시간을 반려동물과 충분히 나누실 수 있도록 꼭 필요한 장례정보를 쉽게 제공하고자 합니다.
                        </ParagraphL>
                        <ParagraphL color={'#3D454D'} fontWeight={'500'} textAlign={'left'}>
                            아이들과의 이별은 언제나 힘겹지만,<br />
                            저희가 준비한 서비스가 조금이나마 도움이 되길 바랍니다.<br />
                            정보를 간단히 입력하시면, 입력하신 정보를 참고하여<br />
                            추천된 장례식장을 확인하실 수 있습니다.
                        </ParagraphL>
                        <ParagraphL color={'#3D454D'} fontWeight={'600'} textAlign={'left'}>
                            그 마지막 순간, <Span>#무지개별#</Span>이 곁에 있겠습니다.
                        </ParagraphL>
                        <BtnOutLine width={'100%'} onClick={openModal}>
                            <ParagraphM color={'var(--AlbescentWhite-300)'} fontWeight={'600'}>정보 입력하고 장례식장 추천 받기</ParagraphM>
                            <ArrowForwardIosRoundedIcon style={{ fontSize: '18px', color: 'var(--AlbescentWhite-300)' }} />
                        </BtnOutLine>
                    </ListItem>
                </ListWrapper>
                <Footer />
            </MainView>

            {/* 모달 */}
            <Modal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmit}>

            </Modal>
        </Wrapper>
    )
}

export default FuneralRecommend;


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
const ImageWrapper = styled.div`
    width: 100%;
    height: 50rem;
    display: flex;
    justify-content: center;
    background-color: var(--Default-White);
    img {
        max-width: 100%;
        height: 500px;
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
const Span = styled.span`
    font-family: var(--font-family-secondary);
    font-weight: 300;
`;