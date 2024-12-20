import React from 'react';
import styled from 'styled-components';

import H6 from '../typo/H6';
import ParagraphM from '../typo/ParagraphM';
import Button from '../button/Button';
import BtnOutLine from '../button/BtnOutLine';


const TabContent = ({ activeTab, place }) => {
    switch (activeTab) {
        case 0:
            return (
                <>
                    <TabContentWrapper>
                        <H6 fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="700" color="#21262B">
                            장례식장 업체 소개
                        </H6>
                        <TabContentTextWrapper>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="#21262B">
                                업체소개
                            </ParagraphM>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#343A40">
                                행복한 만남이 있었습니다. 이제 아름다운 이별을 준비하세요.
                                가족의 슬픔을 함께하는 마음으로 저희 펫바라기가 함께합니다.
                                펫바라기는 서울 서부지역에서 가장 가까운 일산에 있는 반려동물 전용 화장장 및 장례식장 입니다.
                                정부(농림부) 동물장묘 정식 허가 업체이며, 장례부터 화장이 끝날 때 까지 전 과정 모두 보호자 직접 참관하에 철저한 개별 화장을 진행합니다.
                            </ParagraphM>
                        </TabContentTextWrapper>
                        <TabContentTextWrapper>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="#21262B">
                                장례절차
                            </ParagraphM>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#343A40">
                                1.장례 예약 → 2.방문 또는 픽업 → 3.추모실 안치 → 4.보호자 참관 하에 화장 → 5.유골함 전달 → 6.납골당, 반려석(유골스톤화), 수목장 선택해 진행 가능
                            </ParagraphM>
                        </TabContentTextWrapper>
                        <TabContentTextWrapper>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="#21262B">
                                특징
                            </ParagraphM>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#343A40">
                                ‍• 호텔 인테리어에 준하는 프리미엄급 시설<br />
                                • 봉안당, 분향소 등 시설 완비
                            </ParagraphM>
                        </TabContentTextWrapper>
                    </TabContentWrapper>

                    <TabContentWrapper>
                        <H6 fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="700" color="#21262B">
                            장례식장 상세정보
                        </H6>
                        <TabContentTextWrapper>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="#21262B">
                                면허 보유
                            </ParagraphM>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#343A40">
                                {place.license || '정보 없음'}
                            </ParagraphM>
                        </TabContentTextWrapper>
                        <TabContentTextWrapper>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="#21262B">
                                관, 수의 준비
                            </ParagraphM>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#343A40">
                                {place.funeralSupplies || '정보 없음'}
                            </ParagraphM>
                        </TabContentTextWrapper>
                        <TabContentTextWrapper>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="#21262B">
                                메모리얼 스톤 제작 가능 여부
                            </ParagraphM>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#343A40">
                                {place.memorialStone || '정보 없음'}
                            </ParagraphM>
                        </TabContentTextWrapper>
                        <TabContentTextWrapper>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="#21262B">
                                동물 장묘 인증번호
                            </ParagraphM>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#343A40">
                                제 5540000-038-2014-0001호
                            </ParagraphM>
                        </TabContentTextWrapper>
                        <Button background="#E2BB8F" borderRadius='10px'>
                            <ButtonConts> 예약하기 </ButtonConts>
                        </Button>
                    </TabContentWrapper>
                </>
            );
        case 1:
            return (
                <>
                    <TabContentWrapper>
                        <H6 fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="700" color="#21262B">
                            가격 보기
                        </H6>
                        <TabContentTextWrapper>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="#21262B">
                                장례 가격표
                            </ParagraphM>
                            <InfoRowWrap>
                                <InfoRow>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        5kg
                                    </ParagraphM>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        {place.funeralPrice5kg || '정보 없음'}
                                    </ParagraphM>
                                </InfoRow>
                                <InfoRow>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        15kg
                                    </ParagraphM>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        {place.funeralPrice15kg || '정보 없음'}
                                    </ParagraphM>
                                </InfoRow>
                                <InfoRow>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        1kg 소동물
                                    </ParagraphM>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        {place.funeralPrice1kg || '정보 없음'}
                                    </ParagraphM>
                                </InfoRow>
                            </InfoRowWrap>
                        </TabContentTextWrapper>
                        <TabContentTextWrapper>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="#21262B">
                                봉안 비용표
                            </ParagraphM>
                            <InfoRowWrap>
                                <InfoRow>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        5kg
                                    </ParagraphM>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        {place.funeralPrice5kg || '정보 없음'}
                                    </ParagraphM>
                                </InfoRow>
                                <InfoRow>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        15kg
                                    </ParagraphM>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        {place.funeralPrice15kg || '정보 없음'}
                                    </ParagraphM>
                                </InfoRow>
                                <InfoRow>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        1kg 소동물
                                    </ParagraphM>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        {place.funeralPrice1kg || '정보 없음'}
                                    </ParagraphM>
                                </InfoRow>
                            </InfoRowWrap>
                        </TabContentTextWrapper>
                        <TabContentTextWrapper>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="#21262B">
                                메모리얼 스톤 제작 가능 비용표
                            </ParagraphM>
                            <InfoRowWrap>
                                <InfoRow>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        {place.memorialStone || '정보 없음'}
                                    </ParagraphM>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        {place.memorialStonePrice || '정보 없음'}
                                    </ParagraphM>
                                </InfoRow>
                            </InfoRowWrap>
                        </TabContentTextWrapper>
                        <TabContentTextWrapper>
                            <BtnOutLine width='100%' borderRadius='10px'>
                                <ButtonContsRv> 장례비용 확인하기 </ButtonContsRv>
                            </BtnOutLine>
                            <Button background="#E2BB8F" borderRadius='10px'>
                                <ButtonConts> 예약하기 </ButtonConts>
                            </Button>
                        </TabContentTextWrapper>
                    </TabContentWrapper>
                </>
            );
        case 2:
            return (
                <div>
                    <h2>장례식장 후기</h2>
                    <p>{place.reviews || '후기가 없습니다.'}</p>
                </div>
            );
        case 3:
            return (
                <div>

                </div>
            );
        default:
            return null;
    }
};

export default TabContent;

const TabContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;
    width: 100%;
    height: fit-content;
    padding: 2.4rem 2.4rem 4.8rem 2.4rem;
    border-bottom: 1px solid var(--Outer-Space-300, #A4B4BC);
`;
const TabContentTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .8rem;
    align-self: stretch;
    width: 100%;
    height: fit-content;
`;
const InfoRowWrap = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: .8rem;
`;
const InfoRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
`;

const ButtonConts = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: .8rem;
    align-self: stretch;
    font-family: var(--font-family-primary);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    color: var(--Default-White);
`;
const ButtonContsRv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: .8rem;
    align-self: stretch;
    font-family: var(--font-family-primary);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    color: var(--Albescent-White-300);
`;
