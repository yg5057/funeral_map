import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import InputText from '../input/InputText';
import InputSearch from '../input/InputSearch';
import ListView from '../list/ListView';
import Button from '../button/Button';
import ToggleButton from '../button/ToggleButton';
import ParagraphM from '../typo/ParagraphM';

const BottomSheet = ({ showOverlay, calculateRoute, endAddress, setEndAddress, rearrangeMarker }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [startAddress, setStartAddress] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleRouteCalculation = () => {
        calculateRoute(startAddress, endAddress);
    };


    return (
        <>
            <ToggleButton isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <BottomSheetContainer isOpen={isOpen}>
                <BottomSheetTop>
                    <InputText label={'출발'} placeholder={'정확한 도로명 주소를 입력해주세요.'} onChange={(e) => setStartAddress(e.target.value)} />
                    <InputText label={'도착'} placeholder={'아래 리스트에서 장소를 선택해주세요.'} value={endAddress} onChange={(e) => setEndAddress(e.target.value)} />
                    <BottomSheetResult id='result'></BottomSheetResult>
                    <BtnWrap>
                        <Button onClick={handleRouteCalculation} width='100%'>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="center" fontWeight="600" color="var(--White)">
                                경로 찾기
                            </ParagraphM>
                        </Button>
                        <Button onClick={rearrangeMarker} width='100%'>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="center" fontWeight="600" color="var(--White)">
                                지도 정렬하기
                            </ParagraphM>
                        </Button>
                    </BtnWrap>
                </BottomSheetTop>
                <BottomSheetBottom>
                    <InputSearch placeholder={'정확한 도로명 주소를 입력해주세요.'} onChange={(e) => setSearchQuery(e.target.value)} />
                    <ListView
                        showOverlay={showOverlay}
                        setEndAddress={setEndAddress}
                        searchQuery={searchQuery}
                        calculateRoute={calculateRoute}
                        setIsOpen={setIsOpen} />
                </BottomSheetBottom>
            </BottomSheetContainer>
        </>
    );
};


export default BottomSheet;

const clickAnimationOpen = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-2rem); }
`;

const clickAnimationClose = keyframes`
  0% { transform: translateY(-2rem); }
  100% { transform: translateY(0); }
`;


const BottomSheetContainer = styled.div`
    width: 50rem;
    height: ${(props) => (props.isOpen ? '50rem' : '0')};
    background-color: var(--White);
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    padding: ${(props) => (props.isOpen ? '1.6rem' : '0')};
    transition: width 0.3s ease, padding 0.3s ease;
    overflow: hidden;
    z-index: 1;
    animation: ${(props) => (props.isOpen ? clickAnimationOpen : clickAnimationClose)} 1s ease-out;
`;

const BottomSheetTop = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    width: 100%;
    height: fit-content;
`;

const BtnWrap = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    align-items: flex-start;
    gap: 1rem;
    align-self: stretch;
`;


const BottomSheetBottom = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    width: 100%;
    height: calc(100% - ${({ topHeight }) => topHeight}px);
    overflow-y: auto;  
`;

const BottomSheetResult = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: .8rem;
`;