import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import H6 from '../typo/H6';
import ParagraphM from '../typo/ParagraphM';
import Caption from '../typo/Caption';
import Button from '../button/Button';


import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';



const ListReservationCard = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                // const response = await fetch('/data/places.json');
                const response = await fetch('/data/places_copy.json');
                if (!response.ok) {
                    throw new Error('네트워크 응답이 좋지 않습니다.');
                }
                const data = await response.json();
                setPlaces(data);
            } catch (error) {
                console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
            } finally {
            }
        };

        fetchPlaces();
    }, []);

    const displayInfo = (info) => { return info ? info : '정보 없음'; };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <ListContainer>
            {places.map((places, index) => (
                <ListItem key={index}>
                    <ContentsPhoto>
                        <Slider {...settings}>
                            {Object.values(places.photo || {}).map((img, imgIndex) => (
                                <ImageWrapper key={imgIndex}>
                                    <Image src={img} alt={`Image ${imgIndex + 1}`} />
                                </ImageWrapper>
                            ))}
                        </Slider>
                    </ContentsPhoto>
                    <H6 fontFamily='var(--font-family-primary)' textAlign="center" fontWeight="700">
                        [{places.area}] {places.title}
                    </H6>
                    <TextWrap>
                        <TextRow>
                            <PlaceRoundedIcon sx={{ color: '#371C13', fontSize: '1.8rem' }} />
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">{displayInfo(places.address)}</ParagraphM>
                        </TextRow>
                        <TextRow>
                            <LocalPhoneRoundedIcon sx={{ color: '#371C13', fontSize: '1.8rem' }} />
                            <InfoRowWrap>
                                <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">{displayInfo(places.phone1)}</ParagraphM>
                                <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">{displayInfo(places.phone2)}</ParagraphM>
                            </InfoRowWrap>
                        </TextRow>
                        <TextRow>
                            <StarsRoundedIcon sx={{ color: '#371C13', fontSize: '1.8rem' }} />
                            <InfoRowWrap>
                                <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                    소비자 평균 만족도 <Span>{displayInfo(places.score)}/10점</Span>
                                </ParagraphM>
                            </InfoRowWrap>
                        </TextRow>
                        <TextRow>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="#D59962">
                                * 소비자 평균 만족도는 AI 분석을 통해 소비자 리뷰를 평가하여 산출된 점수 임을 밝힙니다.
                            </Caption>
                        </TextRow>
                        <TextRow>
                            <BookmarkAddedRoundedIcon sx={{ color: '#371C13', fontSize: '1.8rem' }} />
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                {displayInfo(places.license)} 면허 보유
                            </ParagraphM>
                        </TextRow>
                        <TextRow>
                            <CreditCardRoundedIcon sx={{ color: '#371C13', fontSize: '1.8rem' }} />
                            <InfoRowWrap>
                                <InfoRow>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                        5kg
                                    </ParagraphM>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                        {displayInfo(places.funeralPrice5kg)}
                                    </ParagraphM>
                                </InfoRow>
                                <InfoRow>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                        15kg
                                    </ParagraphM>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                        {displayInfo(places.funeralPrice15kg)}
                                    </ParagraphM>
                                </InfoRow>
                                <InfoRow>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                        1kg 소동물
                                    </ParagraphM>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                        {displayInfo(places.funeralPrice1kg)}
                                    </ParagraphM>
                                </InfoRow>
                            </InfoRowWrap>
                        </TextRow>
                    </TextWrap>
                    <Button background="#E2BB8F" borderRadius='10px'>
                        <ButtonConts>
                            <CalendarMonthRoundedIcon sx={{ color: '#fff', fontSize: '2.4rem' }} />
                            예약하기
                        </ButtonConts>
                    </Button>
                </ListItem>
            ))}
        </ListContainer>
    );
}

export default ListReservationCard



const ListContainer = styled.ul`
  height: 100%;
  overflow-y: scroll;
`;
const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 7rem;
    padding: 1rem;
    align-items: flex-start;
    gap: 1.6rem;
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
    height:  32rem; 
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
align-items: center;
`;

const Span = styled.span`
  color: var(--Albescent-White-700, #9E5330);
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