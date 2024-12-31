import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import H6 from '../typo/H6';
import ParagraphM from '../typo/ParagraphM';
import Button from '../button/Button';
import Chip from '../chips/Chip';
import ListDetailView from './ListDetailView';
import NonThumbNail from '../../assets/images/non_thumbnail.png';

import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';




const ListCard = () => {
    const [places, setPlaces] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const itemsPerPage = 10;


    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/stores`);
                const placesWithArea = response.data.data.map(place => ({
                    ...place,
                    area: mapArea(place.storeAddress),
                }));
                setPlaces(placesWithArea || []);
                setFilteredPlaces(placesWithArea || []);
            } catch (error) {
                console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
            }
        };

        fetchPlaces();
    }, []);


    // 지역 추출 함수
    const mapArea = (storeAddress) => {
        if (!storeAddress) return '기타';
        if (storeAddress.includes('강원')) return '강원도';
        if (storeAddress.includes('서울') || storeAddress.includes('경기') || storeAddress.includes('인천')) return '서울/경기/인천';
        if (storeAddress.includes('대전') || storeAddress.includes('세종') || storeAddress.includes('충남') || storeAddress.includes('충북') || storeAddress.includes('충청남도') || storeAddress.includes('충청북도')) return '대전/세종/충남북';
        if (storeAddress.includes('대구') || storeAddress.includes('경북') || storeAddress.includes('경상북도')) return '대구/경북';
        if (storeAddress.includes('부산') || storeAddress.includes('울산') || storeAddress.includes('경남') || storeAddress.includes('경상남도')) return '부산/울산/경남';
        if (storeAddress.includes('광주') || storeAddress.includes('전남') || storeAddress.includes('전북') || storeAddress.includes('전라남도') || storeAddress.includes('전라북도')) return '광주/전남/전북';
        return '기타';
    };



    const displayInfo = (info) => info ? ` ${info}` : '정보 없음';
    const displayPrice = (price) => {
        const numericPrice = Number(price);
        if (isNaN(numericPrice)) {
            return '정보 없음';
        }
        return `${numericPrice.toLocaleString()} 원`;
    };
    const displaySkill = (skill) => skill ? ` ${skill} 면허 보유` : '정보 없음';


    // 페이지네이션 처리
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = Array.isArray(filteredPlaces)
        ? filteredPlaces.slice(indexOfFirstItem, indexOfLastItem)
        : [];

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



    // 지역별 화면 표시 필터
    const filterPlaces = (areaFilter) => {
        if (!areaFilter) {
            setFilteredPlaces(places);
        } else {
            const filtered = places.filter(place => place.area === areaFilter);
            setFilteredPlaces(filtered);
        }
        setCurrentPage(1);
    };

    const handleViewDetails = (place) => {
        setSelectedPlace(place); // 선택된 장소 설정
    };

    const handleBackToList = () => {
        setSelectedPlace(null); // 선택 해제
    };

    return (
        <ListContainer>
            {selectedPlace ? (
                <ListDetailView place={selectedPlace} onBack={handleBackToList} />
            ) : (
                <>
                    <ChipWrapper>
                        <Chip onClick={() => filterPlaces(null)}>전체 보기</Chip>
                        <Chip onClick={() => filterPlaces('강원도')}>강원도</Chip>
                        <Chip onClick={() => filterPlaces('서울/경기/인천')}>서울/경기/인천</Chip>
                        <Chip onClick={() => filterPlaces('대전/세종/충남북')}>대전/세종/충남북</Chip>
                        <Chip onClick={() => filterPlaces('대구/경북')}>대구/경북</Chip>
                        <Chip onClick={() => filterPlaces('부산/울산/경남')}>부산/울산/경남</Chip>
                        <Chip onClick={() => filterPlaces('광주/전남/전북')}>광주/전남/전북</Chip>
                    </ChipWrapper>
                    {currentItems.length === 0 ? (
                        <ListItemNull>
                            <H6>등록된 장소가 없습니다.</H6>
                        </ListItemNull>
                    ) : (
                        currentItems.map((place, index) => (
                            <ListItem key={index}>
                                <ContentsPhoto>
                                    <ImageWrapper>
                                        <Image
                                            src={place.thumbnail || NonThumbNail}
                                            alt={`image_thumbnail`}
                                            onError={(e) => e.target.src = NonThumbNail}
                                        />
                                    </ImageWrapper>
                                </ContentsPhoto>
                                <H6 fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="700">
                                    [{place.area}] {place.storeName}
                                </H6>
                                <TextWrap>
                                    <TextRow>
                                        <PlaceRoundedIcon sx={{ color: '#371C13', fontSize: '1.8rem' }} />
                                        <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">{displayInfo(place.storeAddress)}</ParagraphM>
                                    </TextRow>
                                    <TextRow>
                                        <LocalPhoneRoundedIcon sx={{ color: '#371C13', fontSize: '1.8rem' }} />
                                        <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">{displayInfo(place.storeTel)}</ParagraphM>
                                    </TextRow>
                                    <TextRow>
                                        <LocalPhoneRoundedIcon sx={{ color: '#371C13', fontSize: '1.8rem' }} />
                                        <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">{displayInfo(place.storeTelSecond)}</ParagraphM>
                                    </TextRow>
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
                                    <TextRowTop>
                                        <CreditCardRoundedIcon sx={{ color: '#371C13', fontSize: '1.8rem' }} />
                                        <InfoRowWrap>
                                            <InfoRow>
                                                <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                                    1kg 소동물
                                                </ParagraphM>
                                                <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                                    {displayPrice(place.smallAnimal)}
                                                </ParagraphM>
                                            </InfoRow>
                                            <InfoRow>
                                                <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                                    5kg
                                                </ParagraphM>
                                                <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                                    {displayPrice(place.fiveKg)}
                                                </ParagraphM>
                                            </InfoRow>
                                            <InfoRow>
                                                <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                                    15kg
                                                </ParagraphM>
                                                <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500" color="#371c13">
                                                    {displayPrice(place.fifteenKg)}
                                                </ParagraphM>
                                            </InfoRow>
                                        </InfoRowWrap>
                                    </TextRowTop>
                                </TextWrap>
                                <Button onClick={() => handleViewDetails(place)} background="#E2BB8F" borderRadius='10px'>
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
                </>
            )}
        </ListContainer>
    );
};

export default ListCard;



const ListContainer = styled.ul`
    width: 100%;
    max-width: 50rem;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;
const ChipWrapper = styled.div`
    width: 100%;
    max-width: 50rem;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;
    padding: 0 2.4rem;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 50rem;
    min-height: 7rem;
    padding: 3.2rem 2.4rem;
    align-items: flex-start;
    gap: 2.4rem;
    border-bottom: 1px solid var(--Grey);
    background: var(--Default-White);
    cursor: pointer;
`;
const ListItemNull = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    padding: 3.2rem 2.4rem;
    align-items: center;
    justify-content: center;
    background: var(--Default-White);
`;

const ContentsPhoto = styled.div`
    width: 100%;
    max-width: 50rem;
    height: 32rem;
    border-radius: 10px;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    width: 100%;
    height: 32rem;
    max-height: 100%;
    object-fit: cover;
    border-radius: 15px;
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
    margin: 3.2rem;
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
