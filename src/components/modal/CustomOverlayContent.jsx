import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faTimes, faCircleRight, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

import ParagraphS from '../typo/ParagraphS';
import Caption from '../typo/Caption';
import InfoRow from './InfoRow';
import NonThumbNail from '../../assets/images/non_thumbnail.png';


const CustomOverlayContent = ({ additionalInfo }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);
    const [placesDetail, setPlacesDetail] = useState([]);


    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/store/${additionalInfo.id}`);
                setPlacesDetail(response.data.data || []);
            } catch (error) {
                console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
            }
        };

        fetchPlaces();
    }, []);

    const storeReviews = placesDetail?.storeReviews || [];


    const handleClose = () => { setIsVisible(false); };
    const toggleDetails = () => { setIsDetailsVisible(prev => !prev); };
    const displayInfo = (info) => { return info ? info : '정보 없음'; };
    const displayPrice = (price) => {
        const numericPrice = Number(price);
        if (isNaN(numericPrice)) {
            return '정보 없음';
        }
        return `${numericPrice.toLocaleString()} 원`;
    };

    const goToHomepage = () => { if (additionalInfo.homePage) { window.open(additionalInfo.funeralPriceUrl, '_blank'); } };
    const goToPrice = () => { if (additionalInfo.funeralPriceUrl) { window.open(additionalInfo.funeralPriceUrl, '_blank'); } };
    const goToReview1 = () => { if (storeReviews?.[0]?.originLink) { window.open(storeReviews?.[0]?.originLink, '_blank'); } };
    const goToReview2 = () => { if (storeReviews?.[1]?.originLink) { window.open(storeReviews?.[1]?.originLink, '_blank'); } };
    const goToReview3 = () => { if (storeReviews?.[2]?.originLink) { window.open(storeReviews?.[2]?.originLink, '_blank'); } };
    const goToStoreDetail = () => { if (additionalInfo.id) { window.location.href = `/area?id=${additionalInfo.id}`; } };



    if (!isVisible) return null;




    return (
        <OverlayContainer>
            <TitleWrapper>
                <FontAwesomeIcon icon={faPaw} size="xl" />
                <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--White)">
                    {displayInfo(additionalInfo.title)}
                </ParagraphS>
                <CloseButton onClick={handleClose}>
                    <FontAwesomeIcon icon={faTimes} size="xl" />
                </CloseButton>
            </TitleWrapper>
            <ContentsWrapper>
                <ContentsPhoto>
                    <ImageWrapper>
                        <Image
                            src={additionalInfo.photo || NonThumbNail}
                            alt={`image_thumbnail`}
                            onError={(e) => e.target.src = NonThumbNail}
                        />
                    </ImageWrapper>
                </ContentsPhoto>
                <ContentsTop>
                    <TextRowTableHover onClick={toggleDetails} style={{ cursor: 'pointer' }}>
                        <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
                            상세 정보 보기
                        </ParagraphS>
                        <FontAwesomeIcon icon={faCircleChevronDown} size="xl" style={{ color: " #D59962", transform: isDetailsVisible ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                    </TextRowTableHover>
                </ContentsTop>
                <ContentsBottom style={{ maxHeight: isDetailsVisible ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease-out' }}>
                    {/* <InfoRow title="평점">{displayInfo(additionalInfo.score)} 점</InfoRow> */}
                    <InfoRow title="면허 보유">{displayInfo(additionalInfo.license)}</InfoRow>
                    <TextRow onClick={goToHomepage} style={{ cursor: 'pointer' }}>
                        <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
                            홈페이지 주소
                        </ParagraphS>
                        <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                            {displayInfo(additionalInfo.homePage)}
                        </Caption>
                    </TextRow>
                    <InfoRow title="주소">{displayInfo(additionalInfo.address)}</InfoRow>
                    <InfoRow title="연락처">{displayInfo(additionalInfo.phone1)}</InfoRow>
                    <TextRowNonHover>
                        <div />
                        <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                            {displayInfo(additionalInfo.phone2)}
                        </Caption>
                    </TextRowNonHover>
                    <TextRowNonHover>
                        <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
                            장례 가격표
                        </ParagraphS>
                        <TextRowTable>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                1kg 소동물
                            </Caption>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                {displayPrice(additionalInfo.funeralPrice1kg)}
                            </Caption>
                        </TextRowTable>
                    </TextRowNonHover>
                    <TextRowNonHover>
                        <div />
                        <TextRowTable>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                5kg
                            </Caption>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                {displayPrice(additionalInfo.funeralPrice5kg)}
                            </Caption>
                        </TextRowTable>
                    </TextRowNonHover>
                    <TextRowNonHover>
                        <div />
                        <TextRowTable>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                15kg
                            </Caption>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                {displayPrice(additionalInfo.funeralPrice15kg)}
                            </Caption>
                        </TextRowTable>
                    </TextRowNonHover>
                    <TextRow>
                        <div />
                        <TextRowTable onClick={goToPrice} style={{ cursor: 'pointer' }}>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
                                가격 고지 자세히 보기
                            </Caption>
                            <FontAwesomeIcon icon={faCircleRight} size="xl" style={{ color: "#D59962", }} />
                        </TextRowTable>
                    </TextRow>
                    {/* <InfoRow title="관, 수의 준비">{displayInfo(additionalInfo.funeralSupplies)}</InfoRow>
                    <InfoRow title="봉안 비용표">{displayInfo(additionalInfo.enshrinementPriceTag)}</InfoRow> */}
                    <TextRow>
                        <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
                            대표 후기
                        </ParagraphS>
                        <TextRowReviewTable onClick={goToReview1} style={{ cursor: 'pointer' }}>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                후기 1
                            </Caption>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                {displayInfo(storeReviews?.[0]?.title.replace(/_/g, ' '))}
                            </Caption>
                        </TextRowReviewTable>
                    </TextRow>
                    <TextRow>
                        <div />
                        <TextRowReviewTable onClick={goToReview2} style={{ cursor: 'pointer' }}>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                후기 2
                            </Caption>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                {displayInfo(storeReviews?.[1]?.title.replace(/_/g, ' '))}
                            </Caption>
                        </TextRowReviewTable>
                    </TextRow>
                    <TextRow>
                        <div />
                        <TextRowReviewTable onClick={goToReview3} style={{ cursor: 'pointer' }}>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                후기 3
                            </Caption>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">
                                {displayInfo(storeReviews?.[2]?.title.replace(/_/g, ' '))}
                            </Caption>
                        </TextRowReviewTable>
                    </TextRow>
                    <TextRow>
                        <div />
                        <TextRowTable onClick={goToStoreDetail} style={{ cursor: 'pointer' }}>
                            <Caption fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--InfoWindow-conts-title)">
                                업체 상세 보기
                            </Caption>
                            <FontAwesomeIcon icon={faCircleRight} size="xl" style={{ color: "#D59962", }} />
                        </TextRowTable>
                    </TextRow>
                </ContentsBottom>
            </ContentsWrapper>
        </OverlayContainer>
    );
};

export default CustomOverlayContent;

const OverlayContainer = styled.div`
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     max-width: 30rem;
     min-width: 25rem;
     width: fit-content;
     height: fit-content;
     border: none;  
     box-shadow: var(--DropShadow-Bottom-M);
     position: relative;
     z-index: 99999; 
        &::after {
            content: '';
            position: absolute;
            top: 100%; 
            left: 50%; 
            transform: translateX(-50%); 
            border-width: 1.6rem;
            border-style: solid;
            border-color: #ffff transparent transparent transparent; 
        }
        .slick-prev:before, .slick-next:before {
            font-family: 'slick';
            font-size: 20px;
            line-height: 1;
            opacity: .6;
            color: var(--InfoWindow-conts-title);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        @media (max-width: 480px) {
            max-width: 25rem;
            min-width: 20rem;
            width: fit-content;
            .slick-dots {
                position: absolute;
                bottom: -18px;
                display: block;
                width: 100%;
                padding: 0;
                margin: 0;
                list-style: none;
                text-align: center;
            }
        }
`;
const TitleWrapper = styled.div`
    width: 100%;
    display: flex;
    padding: 1rem 1.4rem;
    align-items: center;
    align-self: stretch;
    gap: .8rem;
    border-radius: .6rem .6rem 0 0;
    background: var(--InfoWindow-title-bg);
    color: var(--White);
`;
const CloseButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--White);
    margin-left: auto; 
`;
const ContentsWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    align-self: stretch;
    padding: 1.4rem;
    gap: 1.6rem;
    border-radius: 0 0 .6rem .6rem;
    background: var(--White);
    @media (max-width: 480px) {
        gap: .8rem;
    }
`;
const ContentsPhoto = styled.div`
    width: 100%;
    height: 15rem; 
    @media (max-width: 480px) {
        height: 13rem; 
    }
`;
const ImageWrapper = styled.div`
    height: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Image = styled.img`
    width: 100%;
    height:  13rem; 
    max-height: 100%; 
    object-fit: cover; 
    @media (max-width: 480px) {
        height: 11rem; 
    }
`;
const ContentsTop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;
const ContentsBottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: .4rem;
    border-radius: 0 0 .6rem .6rem;
    @media (max-width: 480px) {
        gap: .3rem;
    }
`;
const TextRow = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    cursor: pointer;

    & > :first-child {
        width: 8rem; 
    }
    & > :nth-child(2) {
        flex-grow: 1;         
        flex-shrink: 1;       
        flex-basis: 0;        
        word-break: break-all; 
        overflow-wrap: break-word; 
        overflow: hidden;      
        white-space: normal;  
        min-width: 0;         
    }
    &:hover {
        background: rgba(36, 140, 225, 0.13);
        border-radius: 0.4rem; 
    }
`;
const TextRowNonHover = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    & > :first-child {
        width: 8rem; 
    }
    & > :nth-child(2) {
        flex-grow: 1;         
        flex-shrink: 1;       
        flex-basis: 0;        
        word-break: break-all; 
        overflow-wrap: break-word; 
        overflow: hidden;      
        white-space: normal;  
        min-width: 0;         
    }
`;
const TextRowTable = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const TextRowTableHover = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &:hover {
        background: rgba(36, 140, 225, 0.13);
        border-radius: 0.4rem; 
    }
`
const TextRowReviewTable = styled.div`
    width: 100%; 
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    text-align: center;
    gap: .8rem;
    cursor: pointer; 

    & > :first-child {
        width: 4rem; 
    }
    & > :nth-child(2) {
        flex-grow: 1;         
        flex-shrink: 1;       
        flex-basis: 0;        
        word-break: break-all; 
        overflow-wrap: break-word; 
        overflow: hidden;      
        white-space: nowrap; 
        min-width: 0;         
        text-overflow: ellipsis;     
    }
    &:hover {
        background: rgba(36, 140, 225, 0.13);
        border-radius: 0.4rem;
    }
`