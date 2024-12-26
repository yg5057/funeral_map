import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import ParagraphM from '../typo/ParagraphM';
import ParagraphS from '../typo/ParagraphS';
import Caption from '../typo/Caption';


const ListView = ({ setEndAddress, searchQuery, showOverlay }) => {
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(true);


    // 주소에서 지역 이름을 추출하는 함수
    const extractAreaFromAddress = (address) => {
        const match = address.match(/(강원|경기|인천|경북|대구|경남|부산|울산|광주|전남|전북|충남|충북|세종)/);
        return match ? match[0] : '기타';
    };


    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/stores`);
                const data = response.data?.data || [];

                // 각 place에 area 값을 추가
                const placesWithArea = data.map(place => ({
                    ...place,
                    area: extractAreaFromAddress(place.storeAddress)
                }));

                setPlaces(placesWithArea);

            } catch (error) {
                console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlaces();
    }, []);

    const setDestination = (place) => {
        setEndAddress(place.storeAddress);  // 출발지 주소를 설정
        showOverlay(place.storeAddress);    // 지도에 오버레이 표시
    };

    if (loading) {
        return <div>로딩 중...</div>;
    }


    // 검색 필터링된 장소 목록
    const filteredPlaces = places.filter(place =>
        place.storeName.includes(searchQuery) || place.storeAddress.includes(searchQuery)
    );


    return (
        <ListContainer>
            {filteredPlaces.map((place, index) => {
                const color = '#E2BB8F';
                return (
                    <ListItem key={index} onClick={() => setDestination(place)}>
                        <Eclipse color={color}>
                            <ParagraphM
                                fontFamily='var(--font-family-primary)'
                                textAlign="center"
                                fontWeight="600"
                                color="var(--Default-White)"
                            >
                                {place.area}
                            </ParagraphM>
                        </Eclipse>
                        <TextWrap>
                            <ParagraphM
                                fontFamily='var(--font-family-primary)'
                                textAlign="left"
                                fontWeight="600"
                            >
                                {place.storeName}
                            </ParagraphM>
                            <ParagraphS
                                fontFamily='var(--font-family-primary)'
                                textAlign="left"
                                fontWeight="500"
                            >
                                {place.storeAddress}
                            </ParagraphS>
                            {/* <Chip>
                                <Caption
                                    fontFamily='var(--font-family-primary)'
                                    color='var(--AlbescentWhite-900)'
                                    textAlign="center"
                                    fontWeight="600"
                                >
                                    소비자 평균 만족도 {place.score}/5점
                                </Caption>
                            </Chip> */}
                        </TextWrap>
                    </ListItem>
                );
            })}
        </ListContainer>
    );
};

export default ListView;




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
