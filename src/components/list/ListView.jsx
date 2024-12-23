import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ParagraphM from '../typo/ParagraphM';
import ParagraphS from '../typo/ParagraphS';
import Caption from '../typo/Caption';

const ListView = ({ setEndAddress, searchQuery, showOverlay, setIsOpen }) => {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);

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
            } finally {
                setLoading(false);
            }
        };

        fetchPlaces();
    }, []);

    const setDestination = (place) => {
        setEndAddress(place.address);
        showOverlay(place.address);
    };

    if (loading) {
        return <div>로딩 중...</div>;
    }

    const filteredPlaces = places.filter(place =>
        place.title.includes(searchQuery) || place.address.includes(searchQuery)
    );

    return (
        <ListContainer>
            {filteredPlaces.map((place, index) => {
                const color = areaColors[place.area] || '#E2BB8F';
                return (
                    <ListItem key={index} onClick={() => setDestination(place)}>
                        <Eclipse color={color}>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="center" fontWeight="600" color="var(--Default-White)">{place.area}</ParagraphM>
                        </Eclipse>
                        <TextWrap>
                            <ParagraphM fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600">{place.title}</ParagraphM>
                            <ParagraphS fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="500">{place.address}</ParagraphS>
                            <Chip>
                                <Caption fontFamily='var(--font-family-primary)' color='var(--AlbescentWhite-900)' textAlign="center" fontWeight="600">
                                    소비자 평균 만족도 {place.score}/5점</Caption>
                            </Chip>
                        </TextWrap>
                    </ListItem>
                );
            })}
        </ListContainer>
    );
};

export default ListView;



const areaColors = {
    '강원': '#fb7fcc',
    '경기': '#10C0DF',
    '경남': '#D9BD4C',
    '경북': '#004AAD',
    '광주': '#FF5758',
    '대구': '#004AAD',
    '부산': '#D9BD4C',
    '세종': '#58CD94',
    '울산': '#D9BD4C',
    '인천': '#10C0DF',
    '전남': '#FF5758',
    '전북': '#FF5758',
    '충남': '#58CD94',
    '충북': '#58CD94'
};

const ListContainer = styled.ul`
  height: 100%;
  overflow-y: scroll;
`;

const ListItem = styled.li`
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 7rem;
    padding: 1rem;
    align-items: center;
    gap: 1.6rem;
    border-bottom: 1px solid var(--Grey);
    background: var(--Default-White);
    cursor: pointer;
`;

const Eclipse = styled.div`
    display: flex;
    width: 5rem;
    height: 5rem;
    padding: 1.4rem 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 50px;
    background-color: var(--AlbescentWhite-300);
    color: var(--Default-White);
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 72%;
  align-items: flex-start;
  gap: .6rem;
`;
const Chip = styled.div`
    display: flex;
    padding: .4rem .8rem;
    align-items: flex-start;
    gap: 1rem;
    border-radius: 3px;
    background: var(--AlbescentWhite-100, #F5E9D7);
`;
