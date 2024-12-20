import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

import H6 from '../typo/H6';
import ParagraphM from '../typo/ParagraphM';
import Caption from '../typo/Caption';
import Button from '../button/Button';
import Chip from '../chips/Chip';

import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';

const ListCard = () => {
    const [places, setPlaces] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedArea, setSelectedArea] = useState('');  // 선택된 지역 상태
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await fetch('/data/places_copy.json');
                if (!response.ok) {
                    throw new Error('네트워크 응답이 좋지 않습니다.');
                }
                const data = await response.json();
                setPlaces(data);
            } catch (error) {
                console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
            }
        };

        fetchPlaces();
    }, []);

    const displayInfo = (info) => info ? info : '정보 없음';

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    // 페이지네이션 처리
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // 지역 필터링
    const areaFilters = {
        '강원도': ['강원'],
        '서울/경기/인천': ['서울', '경기', '인천'],
        '대전/세종/충남북': ['충남', '충북', '세종'],
        '대구/경북': ['대구', '경북'],
        '부산/울산/경남': ['부산', '울산', '경남'],
        '광주/전남/전북': ['광주', '전남', '전북'],
    };

    const filteredPlaces = selectedArea
        ? places.filter(place => areaFilters[selectedArea]?.includes(place.area))
        : places;

    const currentItems = filteredPlaces.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(filteredPlaces.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const chipAreas = [
        { label: '강원도', value: '강원도' },
        { label: '서울/경기/인천', value: '서울/경기/인천' },
        { label: '대전/세종/충남북', value: '대전/세종/충남북' },
        { label: '대구/경북', value: '대구/경북' },
        { label: '부산/울산/경남', value: '부산/울산/경남' },
        { label: '광주/전남/전북', value: '광주/전남/전북' },
    ];

    const handleChipClick = (area) => {
        setSelectedArea(area);
        setCurrentPage(1);  // 필터링 후 첫 페이지로 리셋
    };

    return (
        <ListContainer>
            <ChipWrapper>
                {chipAreas.map((chip, index) => (
                    <Chip key={index} onClick={() => handleChipClick(chip.value)}>
                        {chip.label}
                    </Chip>
                ))}
            </ChipWrapper>
            {currentItems.length === 0 ? (
                <p>선택한 지역에 해당하는 장소가 없습니다.</p>
            ) : (
                currentItems.map((place, index) => (
                    <ListItem key={index}>
                        <ContentsPhoto>
                            <Slider {...settings}>
                                {Object.values(place.photo || {}).map((img, imgIndex) => (
                                    <ImageWrapper key={imgIndex}>
                                        <Image src={img} alt={`Image ${imgIndex + 1}`} />
                                    </ImageWrapper>
                                ))}
                            </Slider>
                        </ContentsPhoto>
                        <H6 fontFamily='var(--font-family-primary)' textAlign="center" fontWeight="700">
                            [{place.area}] {place.title}
                        </H6>
                        <TextWrap>
                            <TextRow>
                                <PlaceRoundedIcon sx={{ color: '#371C13', fontSize: '1.8rem' }} />
                                <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">{displayInfo(place.address)}</ParagraphM>
                            </TextRow>
                            <TextRow>
                                <LocalPhoneRoundedIcon sx={{ color: '#371C13', fontSize: '1.8rem' }} />
                                <InfoRowWrap>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">{displayInfo(place.phone1)}</ParagraphM>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">{displayInfo(place.phone2)}</ParagraphM>
                                </InfoRowWrap>
                            </TextRow>
                            <TextRow>
                                <StarsRoundedIcon sx={{ color: '#371C13', fontSize: '1.8rem' }} />
                                <InfoRowWrap>
                                    <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                        소비자 평균 만족도 <Span>{displayInfo(place.score)}/10점</Span>
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
                                    {displayInfo(place.license)} 면허 보유
                                </ParagraphM>
                            </TextRow>
                            <TextRowTop>
                                <CreditCardRoundedIcon sx={{ color: '#371C13', fontSize: '1.8rem' }} />
                                <InfoRowWrap>
                                    <InfoRow>
                                        <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                            5kg
                                        </ParagraphM>
                                        <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                            {displayInfo(place.funeralPrice5kg)}
                                        </ParagraphM>
                                    </InfoRow>
                                    <InfoRow>
                                        <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                            15kg
                                        </ParagraphM>
                                        <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                            {displayInfo(place.funeralPrice15kg)}
                                        </ParagraphM>
                                    </InfoRow>
                                    <InfoRow>
                                        <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                            1kg 소동물
                                        </ParagraphM>
                                        <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                            {displayInfo(place.funeralPrice1kg)}
                                        </ParagraphM>
                                    </InfoRow>
                                </InfoRowWrap>
                            </TextRowTop>
                        </TextWrap>
                        <Button background="#E2BB8F" borderRadius='10px'>
                            <ButtonConts> 상세보기 </ButtonConts>
                        </Button>
                    </ListItem>
                ))
            )}
            <Pagination>
                <PageButton onClick={handlePrevPage} disabled={currentPage === 1}>&lt;</PageButton>
                {[...Array(totalPages).keys()].map((number) => (
                    <PageButton
                        key={number}
                        onClick={() => handlePageChange(number + 1)}
                        isActive={currentPage === number + 1}
                    >
                        {number + 1}
                    </PageButton>
                ))}
                <PageButton onClick={handleNextPage} disabled={currentPage === totalPages}>&gt;</PageButton>
            </Pagination>
        </ListContainer>
    );
}

export default ListCard;


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


const ListContainer = styled.ul`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`;

const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 7rem;
    padding: 3.2rem 0;
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

const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;
`;

const PageButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: ${(props) => (props.isActive ? '#D59962' : 'transparent')}; 
    border: 1px solid #E2BB8F;
    border-radius: 5px;
    cursor: pointer;
    font-family: var(--font-family-primary);
    font-weight: 600;
    color: ${(props) => (props.isActive ? '#fff' : '#D59962')}; 
    &:hover {
        background-color: #C4A57D;
        color: #fff;
    }
    &:disabled {
        background-color: #ddd;
        cursor: not-allowed;
    }
`;