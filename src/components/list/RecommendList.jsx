import React from 'react';
import styled from 'styled-components';

import H6 from '../typo/H6';
import ParagraphM from '../typo/ParagraphM';
import Button from '../button/Button';
import NonThumbNail from '../../assets/images/non_thumbnail.png';

import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';




const RecommendList = ({ data }) => {
    const dataArray = data?.data || [];
    const limitedData = dataArray.slice(0, 10);

    const displayInfo = (info) => info ? ` ${info}` : '정보 없음';
    const displayPrice = (price) => {
        const numericPrice = Number(price);
        if (isNaN(numericPrice)) {
            return '정보 없음';
        }
        return `${numericPrice.toLocaleString()}원`;
    };
    const displaySkill = (skill) => skill ? ` ${skill} 면허 보유` : '정보 없음';

    const goToReservation = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };


    return (
        <ListContainer>
            {limitedData.map((place, index) => (
                <ListItem key={index}>
                    <ContentsPhoto>
                        <ImageWrapper>
                            <Image
                                src={place.thumbnail || NonThumbNail}
                                alt={`image_thumbnail`}
                                referrerPolicy="no-referrer"
                                onError={(e) => e.target.src = NonThumbNail
                                }
                            />
                        </ImageWrapper>
                    </ContentsPhoto>
                    <H6 fontFamily='var(--font-family-primary)' textAlign="center" fontWeight="700">
                        [{place.address ? place.address.slice(0, 2) : ' '}] {place.storeName}
                    </H6>
                    <TextWrap>
                        <TextRow>
                            <PlaceRoundedIcon sx={{ color: '#371C13', fontSize: '1.8rem' }} />
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">{displayInfo(place.address)}</ParagraphM>
                        </TextRow>
                        <TextRow>
                            <LocalPhoneRoundedIcon sx={{ color: '#371C13', fontSize: '1.8rem' }} />
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">{displayInfo(place.storeTel)}</ParagraphM>
                        </TextRow>
                        {/* <TextRow>
                            <StarsRoundedIcon sx={{ color: '#371C13', fontSize: '1.8rem' }} />
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                소비자 평균 만족도 <Span>{displayInfo(place.score)}/10점</Span>
                            </ParagraphM>
                        </TextRow>
                        <TextRow>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="#D59962">
                                * 소비자 평균 만족도는 AI 분석을 통해 소비자 리뷰를 평가하여 산출된 점수 임을 밝힙니다.
                            </Caption>
                        </TextRow> */}
                        <TextRow>
                            <AccessTimeRoundedIcon sx={{ color: '#371C13', fontSize: '1.8rem' }} />
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                {displayInfo(place.businessHours)}
                            </ParagraphM>
                        </TextRow>
                        <TextRow>
                            <BookmarkAddedRoundedIcon sx={{ color: '#371C13', fontSize: '1.8rem' }} />
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                {displaySkill(place.skill)}
                            </ParagraphM>
                        </TextRow>
                        {/* <TextRowTop>
                            <CreditCardRoundedIcon sx={{ color: '#371C13', fontSize: '1.8rem' }} />
                            <InfoRowWrap>
                                <InfoRow>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                        1kg 소동물
                                    </ParagraphM>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                        {displayPrice(place.funeralPrice1kg)}
                                    </ParagraphM>
                                </InfoRow>
                                <InfoRow>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                        5kg
                                    </ParagraphM>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                        {displayPrice(place.funeralPrice5kg)}
                                    </ParagraphM>
                                </InfoRow>
                                <InfoRow>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                        15kg
                                    </ParagraphM>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                        {displayPrice(place.funeralPrice15kg)}
                                    </ParagraphM>
                                </InfoRow>
                            </InfoRowWrap>
                        </TextRowTop> */}
                    </TextWrap>
                    <BottomWrap>
                        {place.calculatePrice && (
                            <CostBox>
                                예상 장례비용은 <Span>{displayPrice(place.calculatePrice)}</Span> 입니다.
                            </CostBox>
                        )}
                        <Button
                            onClick={() => goToReservation(place.reservationLink)}
                            background="#E2BB8F"
                            borderRadius='10px'
                        >
                            <ButtonConts> 예약하기 </ButtonConts>
                        </Button>
                    </BottomWrap>
                </ListItem>
            ))}
        </ListContainer>
    );
};

export default RecommendList;



const ListContainer = styled.ul`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;
const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 7rem;
    padding: 3.2rem 2.4rem;
    align-items: flex-start;
    gap: 2.4rem;
    border-bottom: 1px solid var(--Grey);
    background: var(--Default-White);
    cursor: pointer;
`;

const ContentsPhoto = styled.div`
    width: 100%;
    height: 32rem;
    border-radius: 10px;
`;

const ImageWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    width: 100%;
    height: 32rem;
    max-height: 100%;
    object-fit: contain;
`;

const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    gap: 0.4rem;
`;

const TextRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .8rem;
    align-self: stretch;
`;

const TextRowTop = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: .8rem;
    align-self: stretch;
`;

const InfoRowWrap = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
`;
const InfoRow = styled.div`
    display: flex;
    width: 20rem;
    max-width: 100%;
    justify-content: space-between;
    align-items: flex-start;
`;

const Span = styled.span`
  font-weight: 700;
  color: var(--AlbescentWhite-600);
`;

const BottomWrap = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .8rem;
    align-self: stretch;
`;
const CostBox = styled.div`
    display: flex;
    width: 100%;
    height: 4.5rem;
    padding: 0.80rem 1.6rem;
    justify-content: center;
    align-items: center;
    gap: .8rem;
    border-radius: 10px;
    background: var(--Default-White);
    border: 1px solid var(--AlbescentWhite-400);
    text-align: center;
    color: var(--AlbescentWhite-400);
    font-family: var(--font-family-primary);
    font-size: 16px;
    font-style: normal;
    line-height: 24px; 
    word-wrap: break-word;
    word-break: keep-all;
    text-align: center;
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