import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import H6 from '../typo/H6';
import ParagraphM from '../typo/ParagraphM';
import Caption from '../typo/Caption';
import Placeholder from '../typo/Placeholder';
import Button from '../button/Button';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ProgressBar from '../progressBar/ProgressBar';


const TabContent = ({ activeTab, place }) => {
    const [placesDetail, setPlacesDetail] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/store/${place.id}`);
                setPlacesDetail(response.data.data || []);
            } catch (error) {
                console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
            }
        };

        fetchPlaces();
    }, []);


    const storeDetail = placesDetail?.storeDetail || [];
    const storeReviews = placesDetail?.storeReviews || [];

    console.log(storeDetail)

    const displayInfo = (info) => info ? ` ${info}` : '정보 없음';
    const displayPrice = (price) => price ? ` ${price} 원` : '정보 없음';
    const displaySkill = (skill) => skill ? ` ${skill} 면허 보유` : '정보 없음';


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
                                {displayInfo(`${storeDetail.length > 0 ? storeDetail[0].description : '정보 없음.'}`)}
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
                                {displaySkill(place.skill)}
                            </ParagraphM>
                        </TabContentTextWrapper>
                        <TabContentTextWrapper>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="#21262B">
                                관, 수의 준비
                            </ParagraphM>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#343A40">
                                {displayInfo(`${storeDetail.length > 0 ? storeDetail[0].storeProduction : '정보 없음.'}`)}
                            </ParagraphM>
                        </TabContentTextWrapper>
                        <TabContentTextWrapper>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="#21262B">
                                추모 보석 제작
                            </ParagraphM>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#343A40">
                                {storeDetail.length > 0 ? storeDetail[0].memorial : '정보 없음.'}
                            </ParagraphM>
                        </TabContentTextWrapper>
                        <TabContentTextWrapper>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="#21262B">
                                동물 장묘 인증번호
                            </ParagraphM>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#343A40">
                                {storeDetail.length > 0 ? storeDetail[0].authenticationNumber : '정보 없음.'}
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
                                        1kg 소동물
                                    </ParagraphM>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        {displayPrice(place.smallAnimal)}
                                    </ParagraphM>
                                </InfoRow>
                                <InfoRow>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        5kg
                                    </ParagraphM>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        {displayPrice(place.fiveKg)}
                                    </ParagraphM>
                                </InfoRow>
                                <InfoRow>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        15kg
                                    </ParagraphM>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        {displayPrice(place.fifteenKg)}
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
                                        {displayInfo(place.memorialStone)}
                                    </ParagraphM>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#44505A">
                                        {displayInfo(place.memorialStonePrice)}
                                    </ParagraphM>
                                </InfoRow>
                            </InfoRowWrap>
                        </TabContentTextWrapper>
                        <TabContentTextWrapper>
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
                                            <span>{place.score ? `${(place.score / 10) * 100}%` : ''}</span>
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
                                            <span>{place.score || ''}점</span>
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
                                            <span>{place.score || ''}점</span>
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
                                            <span>{place.score || ''}점</span>
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