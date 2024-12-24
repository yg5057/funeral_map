import React from 'react';
import styled from 'styled-components';

import H6 from '../typo/H6';
import ParagraphM from '../typo/ParagraphM';
import Caption from '../typo/Caption';
import Placeholder from '../typo/Placeholder';
import Button from '../button/Button';
import BtnOutLine from '../button/BtnOutLine';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ProgressBar from '../progressBar/ProgressBar';


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
                <>
                    <TabContentWrapper>
                        <H6 fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="700" color="#21262B">
                            장례식장 대표 후기
                        </H6>
                        <BoxWrap>
                            <BoxConts onClick={() => {
                                if (place.review1) {
                                    window.open(place.review1, '_blank');
                                } else {
                                    alert('리뷰 링크가 없습니다.');
                                }
                            }}>
                                <BoxImageWrapper>
                                    <Image src='/data/images/mainbanner.png' alt={'review-img'} />
                                </BoxImageWrapper>
                                <BoxTextWrapper>
                                    <ParagraphM textAlign='left' fontWeight='500' color='#21262B'>
                                        반려동물장례식장 펫포레스트 김포 고양이 장례후기(상실아, 잘가)
                                    </ParagraphM>
                                </BoxTextWrapper>
                            </BoxConts>
                            <RateBoxWrap>
                                <RateBoxRow>
                                    <RateBoxColumn>
                                        <Caption width='100%' textAlign='left' fontWeight='600' color='#371C13'>작성 신뢰도</Caption>
                                        <RateWrap>
                                            <RatePercent>
                                                <ProgressBar score={place.score} />
                                            </RatePercent>
                                            <span>{place.score ? `${(place.score / 10) * 100}%` : '정보 없음'}</span>
                                        </RateWrap>
                                    </RateBoxColumn>
                                    <RateBoxColumn>
                                        <Caption width='100%' textAlign='left' fontWeight='600' color='#371C13'>서비스 만족도</Caption>
                                        <RateWrap>
                                            <RateStar>
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <StarRoundedIcon
                                                        key={index}
                                                        sx={{
                                                            color: index < Math.round(place.score) ? '#D59962' : '#e0e0e0',
                                                            fontSize: '1.2rem'
                                                        }}
                                                    />
                                                ))}
                                            </RateStar>
                                            <span>{place.score || '정보 없음'}점</span>
                                        </RateWrap>
                                    </RateBoxColumn>
                                </RateBoxRow>
                                <RateBoxRow>
                                    <RateBoxColumn>
                                        <Caption width='100%' textAlign='left' fontWeight='600' color='#371C13'>가격 만족도</Caption>
                                        <RateWrap>
                                            <RateStar>
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <StarRoundedIcon
                                                        key={index}
                                                        sx={{
                                                            color: index < Math.round(place.score) ? '#D59962' : '#e0e0e0',
                                                            fontSize: '1.2rem'
                                                        }}
                                                    />
                                                ))}
                                            </RateStar>
                                            <span>{place.score || '정보 없음'}점</span>
                                        </RateWrap>
                                    </RateBoxColumn>
                                    <RateBoxColumn>
                                        <Caption width='100%' textAlign='left' fontWeight='600' color='#371C13'>분위기 만족도</Caption>
                                        <RateWrap>
                                            <RateStar>
                                                {Array.from({ length: 5 }, (_, index) => (
                                                    <StarRoundedIcon
                                                        key={index}
                                                        sx={{
                                                            color: index < Math.round(place.score) ? '#D59962' : '#e0e0e0',
                                                            fontSize: '1.2rem'
                                                        }}
                                                    />
                                                ))}
                                            </RateStar>
                                            <span>{place.score || '정보 없음'}점</span>
                                        </RateWrap>
                                    </RateBoxColumn>
                                </RateBoxRow>
                                <RateBoxRow>
                                    <Placeholder width='100%' textAlign='left' fontWeight='500' color='#D59962'>
                                        * 장례식장 후기의 모든 평점은 AI 분석을 통해 소비자  리뷰를 분석하여 산출된 점수임을 밝힙니다.
                                    </Placeholder>
                                </RateBoxRow>
                            </RateBoxWrap>
                        </BoxWrap>
                    </TabContentWrapper>
                </>
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

// 후기 컨텐츠 
const BoxWrap = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    padding: 2rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
    align-self: stretch;
    border-radius: 10px;
    background: var(--Albescent-White-100, #F5E9D7);
`;
const BoxConts = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 10px;
    background: var(--Default-White, #fff);
    cursor: pointer;
`;
const BoxImageWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 23rem;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
    background: lightgray 50% / cover no-repeat;
`;
const BoxTextWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 1.6rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
    align-self: stretch;
    border-radius: 0px 0px 10px 10px;
`;
const RateBoxWrap = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    padding: 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: .8rem;
    align-self: stretch;
    border-radius: 10px;
    background: var(--Default-White, #fff);
`;
const RateBoxRow = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    gap: 2rem;
    align-self: stretch;
`;
const RateBoxColumn = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 0;
`;
const RateWrap = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   gap: .8rem;
`;
const RatePercent = styled.div`
    width: 7.5rem;
    display: flex;
    align-items: center;
`;
const RateStar = styled.div`
    width: 7.5rem;
    display: flex;
    align-items: center;
    gap: .4rem;
`;