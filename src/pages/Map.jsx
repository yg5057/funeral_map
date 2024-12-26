import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

import BottomSheet from '../components/bottomSheet/BottomSheet';
import InfoWindowContent from '../components/modal/InfoWindowContent';
import CustomOverlayContent from '../components/modal/CustomOverlayContent';
import ParagraphL from '../components/typo/ParagraphL';



// 마커 이미지
import pink from '../assets/images/pink.png';
import skyblue from '../assets/images/skyblue.png';
import yellow from '../assets/images/yellow.png';
import blue from '../assets/images/blue.png';
import red from '../assets/images/red.png';
import green from '../assets/images/green.png';

const { kakao } = window;

const Map = () => {
    const [map, setMap] = useState(null);
    const [geocoder, setGeocoder] = useState(null);
    const [currentPolyline, setCurrentPolyline] = useState(null);
    const [currentOverlay, setCurrentOverlay] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [places, setPlaces] = useState([]);
    const [endAddress, setEndAddress] = useState('');
    const [loading, setLoading] = useState(false);

    const areaImageMap = {
        '강원': pink,
        '경기': skyblue, '인천': skyblue,
        '경북': blue, '대구': blue,
        '경남': yellow, '부산': yellow, '울산': yellow,
        '광주': red, '전남': red, '전북': red,
        '충남': green, '충북': green, '세종': green
    };



    //지도 초기 설정
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(37.5665, 126.9780),
            level: 13,
            draggable: true,
            scrollwheel: true,
            disableDoubleClickZoom: false
        };
        const newMap = new kakao.maps.Map(container, options);
        setMap(newMap);

        const newGeocoder = new kakao.maps.services.Geocoder();
        setGeocoder(newGeocoder);
    }, []);




    // 마커 추가 함수
    const addMarkersFromPlaces = async () => {
        if (!geocoder || !map) return;

        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/stores`);
            const data = response.data?.data || [];

            setPlaces(data);

            data.forEach(place => {
                geocoder.addressSearch(place.storeAddress, (result, status) => {
                    if (status === kakao.maps.services.Status.OK) {
                        const position = new kakao.maps.LatLng(result[0].y, result[0].x);

                        const area = extractAreaFromAddress(place.storeAddress);
                        const imageSrc = areaImageMap[area] || 'default_marker.png';
                        const markerImage = new kakao.maps.MarkerImage(imageSrc, new kakao.maps.Size(25, 36.2));

                        const marker = new kakao.maps.Marker({
                            position,
                            title: place.storeName,
                            image: markerImage,
                        });

                        marker.setMap(map);
                        marker.setClickable(true);
                        marker.kakaoPlaceData = place;

                        kakao.maps.event.addListener(marker, 'click', () => handleMarkerClick(marker, place));
                        setMarkers(prev => [...prev, marker]);
                    }
                });
            });
        } catch (error) {
            console.error('장소 마커 추가 중 오류 발생:', error);
        }
    };

    // 주소에서 지역 이름을 추출하는 함수
    const extractAreaFromAddress = (address) => {
        const match = address.match(/(강원|경기|인천|경북|대구|경남|부산|울산|광주|전남|전북|충남|충북|세종)/);
        return match ? match[0] : '기타';
    };




    // 마커 클릭 핸들러 함수
    const handleMarkerClick = (marker, place) => {
        addCustomOverlay(marker, place);
    };

    const addCustomOverlay = (marker, place) => {
        setEndAddress(place.storeAddress);
        console.log(place.storeAddress)

        const additionalInfo = {
            id: place.id,
            title: place.storeName,
            license: place.skill,
            photo: place.thumbnail,
            homePage: place.link,
            address: place.storeAddress,
            phone1: place.storeTel,
            phone2: place.storeTelSecond,
            funeralPrice1kg: place.funeralPrice1kg,
            funeralPrice5kg: place.fiveKg,
            funeralPrice15kg: place.fifteenKg,
            funeralPriceUrl: place.link,
        };

        const overlayContent = document.createElement('div');
        ReactDOM.render(
            <CustomOverlayContent
                additionalInfo={additionalInfo}
            />,
            overlayContent
        );

        const customOverlay = new kakao.maps.CustomOverlay({
            position: marker.getPosition(),
            content: overlayContent,
            xAnchor: 0.6,
            yAnchor: 1.15,
            zIndex: 2,
        });

        if (currentOverlay) {
            currentOverlay.setMap(null);
        }
        customOverlay.setMap(map);
        setCurrentOverlay(customOverlay);
    };

    useEffect(() => {
        return () => {
            if (currentOverlay) {
                currentOverlay.setMap(null);
            }
        };
    }, [currentOverlay]);


    useEffect(() => {
        if (map && geocoder) {
            addMarkersFromPlaces();
        }
    }, [map, geocoder]);



    // 리스트 클릭 함수
    const showOverlay = (storeAddress) => {
        const selectedPlace = places.find(place => place.storeAddress === storeAddress);
        if (!selectedPlace) return;

        geocoder.addressSearch(storeAddress, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
                const position = new kakao.maps.LatLng(result[0].y, result[0].x);

                const additionalInfo = {
                    // area: selectedPlace.area,
                    // title: selectedPlace.title,
                    // license: selectedPlace.license,
                    // photo: selectedPlace.photo,
                    // homePage: selectedPlace.homePage,
                    // address: selectedPlace.address,
                    // phone1: selectedPlace.phone1,
                    // phone2: selectedPlace.phone2,
                    // score: selectedPlace.score,
                    // funeralPrice5kg: selectedPlace.funeralPrice5kg,
                    // funeralPrice15kg: selectedPlace.funeralPrice15kg,
                    // funeralPrice1kg: selectedPlace.funeralPrice1kg,
                    // funeralPriceUrl: selectedPlace.funeralPriceUrl,
                    // funeralSupplies: selectedPlace.funeralSupplies,
                    // enshrinementPriceTag: selectedPlace.enshrinementPriceTag,
                    // memorialStone: selectedPlace.memorialStone,
                    // memorialStonePrice: selectedPlace.memorialStonePrice,
                    // review1: selectedPlace.review1,
                    // review2: selectedPlace.review2,
                    // review3: selectedPlace.review3,
                    // url: selectedPlace.url,

                    id: selectedPlace.id,
                    title: selectedPlace.storeName,
                    license: selectedPlace.skill,
                    photo: selectedPlace.thumbnail,
                    homePage: selectedPlace.link,
                    address: selectedPlace.storeAddress,
                    phone1: selectedPlace.storeTel,
                    phone2: selectedPlace.storeTelSecond,
                    funeralPrice1kg: selectedPlace.funeralPrice1kg,
                    funeralPrice5kg: selectedPlace.fiveKg,
                    funeralPrice15kg: selectedPlace.fifteenKg,
                    funeralPriceUrl: selectedPlace.link,
                };


                const overlayContent = document.createElement('div');
                ReactDOM.render(
                    <CustomOverlayContent
                        additionalInfo={additionalInfo}
                    />,
                    overlayContent
                );

                const customOverlay = new kakao.maps.CustomOverlay({
                    position,
                    content: overlayContent,
                    xAnchor: 0.6,
                    yAnchor: 1.15,
                    zIndex: 2,
                });

                if (currentOverlay) {
                    currentOverlay.setMap(null);
                }

                customOverlay.setMap(map);
                setCurrentOverlay(customOverlay);
            }
        });
    };


    // 경로 계산 함수
    const calculateRoute = (startAddress, endAddress) => {
        if (!startAddress || !endAddress) return;

        setLoading(true);

        if (currentPolyline) {
            currentPolyline.setMap(null);
            setCurrentPolyline(null);
        }

        markers.forEach(marker => marker.setMap(null));
        setMarkers([]);
        if (currentOverlay) {
            currentOverlay.setMap(null);
            setCurrentOverlay(null);
        }

        geocoder.addressSearch(startAddress, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
                const startPosition = new kakao.maps.LatLng(result[0].y, result[0].x);
                map.setCenter(startPosition);

                geocoder.addressSearch(endAddress, (result, status) => {
                    if (status === kakao.maps.services.Status.OK) {
                        const endPosition = new kakao.maps.LatLng(result[0].y, result[0].x);

                        const selectedPlace = places.find(place => place.storeAddress === endAddress);
                        if (!selectedPlace) {
                            console.error("해당 주소에 대한 장소를 찾을 수 없습니다:", endAddress);
                            setLoading(false);
                            return;
                        }

                        const additionalInfo = {
                            id: selectedPlace.id,
                            title: selectedPlace.storeName,
                            license: selectedPlace.skill,
                            photo: selectedPlace.thumbnail,
                            homePage: selectedPlace.link,
                            address: selectedPlace.storeAddress,
                            phone1: selectedPlace.storeTel,
                            phone2: selectedPlace.storeTelSecond,
                            funeralPrice1kg: selectedPlace.funeralPrice1kg,
                            funeralPrice5kg: selectedPlace.fiveKg,
                            funeralPrice15kg: selectedPlace.fifteenKg,
                            funeralPriceUrl: selectedPlace.link,
                        };

                        const apiUrl = `https://apis-navi.kakaomobility.com/v1/directions?origin=${startPosition.getLng()},${startPosition.getLat()}&destination=${endPosition.getLng()},${endPosition.getLat()}&priority=RECOMMEND&vehicle=car`;

                        fetch(apiUrl, {
                            headers: {
                                "Authorization": "KakaoAK 8e2c134c22f8c379da88ce3fc7bc85a4"
                            }
                        })
                            .then(response => response.json())
                            .then(data => {
                                const route = data.routes[0];
                                const distance = route.summary.distance;
                                const duration = route.summary.duration;

                                const path = route.sections.flatMap(section =>
                                    section.roads.flatMap(road =>
                                        road.vertexes.map((v, i) => i % 2 === 0 ? new kakao.maps.LatLng(road.vertexes[i + 1], v) : null).filter(v => v)
                                    )
                                );

                                const polyline = new kakao.maps.Polyline({
                                    path: path,
                                    strokeWeight: 5,
                                    strokeColor: '#E2BB8F',
                                    strokeOpacity: 0.8,
                                    strokeStyle: 'solid'
                                });

                                polyline.setMap(map);
                                setCurrentPolyline(polyline);

                                const startMarker = new kakao.maps.Marker({
                                    position: startPosition,
                                    title: '출발지',
                                    image: new kakao.maps.MarkerImage('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', new kakao.maps.Size(30, 40))
                                });
                                startMarker.setMap(map);
                                setMarkers(prev => [...prev, startMarker]);

                                const endMarker = new kakao.maps.Marker({
                                    position: endPosition,
                                    title: '도착지'
                                });
                                endMarker.setMap(map);
                                setMarkers(prev => [...prev, endMarker]);

                                const distanceInKm = (distance / 1000).toFixed(1);
                                const hours = Math.floor(duration / 3600);
                                const minutes = Math.floor((duration % 3600) / 60);
                                const durationString = `${hours}시간 ${minutes}분`;

                                const overlayContent = document.createElement('div');

                                ReactDOM.render(
                                    <InfoWindowContent
                                        startAddress={startAddress}
                                        endAddress={endAddress}
                                        distance={distanceInKm}
                                        duration={durationString}
                                        additionalInfo={additionalInfo}
                                    />,
                                    overlayContent
                                );

                                const customOverlay = new kakao.maps.CustomOverlay({
                                    position: endPosition,
                                    content: overlayContent,
                                    xAnchor: 0.6,
                                    yAnchor: 1.15,
                                    zIndex: 2,
                                });

                                customOverlay.setMap(map);
                                setCurrentOverlay(customOverlay);

                                setLoading(false);
                            })
                            .catch(error => {
                                console.error('경로 검색 중 오류 발생:', error);
                                setLoading(false);
                            });
                    } else {
                        setLoading(false);
                    }
                });
            } else {
                setLoading(false);
            }
        });
    };


    const rearrangeMarker = () => {
        window.location.reload();
    };


    return (
        <>
            <BottomSheet calculateRoute={calculateRoute} endAddress={endAddress} setEndAddress={setEndAddress} rearrangeMarker={rearrangeMarker} showOverlay={showOverlay} />
            <MapSection id="map"></MapSection>
            {loading && (
                <LoadingOverlay>
                    <Loader />
                    <ParagraphL color='var(--AlbescentWhite-600)' fontWeight='600' textAlign='center'>
                        경로를 찾는 중입니다.
                    </ParagraphL>
                </LoadingOverlay>
            )}
        </>
    );
};

export default Map;

const MapSection = styled.section`
    display: flex;
    width: 50rem;
    max-width: 100%;
    height: calc(100vh - 7rem);
    padding: 3rem;
    align-items: flex-start;
    gap: 1rem;
    position: relative;  
    z-index: 0; 
`;


const LoadingOverlay = styled.div`
    position: absolute; 
    top: 50%;
    left: 50%; 
    transform: translate(-50%, -50%); 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%; 
    height: 100%; 
    padding: 2rem; 
    background: rgba(255, 255, 255, 0.7); 
    border-radius: 8px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 10; 
    @media (max-width: 768px) {
        padding: 5rem; 
    }
`;

const Loader = styled.div`
    border: 8px solid rgba(255, 255, 255, 0.3); 
    border-top: 8px solid var(--AlbescentWhite-600);
    border-radius: 50%;
    width: 50px; 
    height: 50px;
    animation: spin 1s linear infinite; 
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

