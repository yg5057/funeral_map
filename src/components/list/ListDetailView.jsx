import React, { useState } from 'react';
import styled from 'styled-components';


import H6 from '../typo/H6';
import ParagraphM from '../typo/ParagraphM';
import BtnOutLine from '../button/BtnOutLine';
import TabMenu from '../tab/TabMenu';
import TabContent from '../tab/TabContent';
import NonThumbNail from '../../assets/images/non_thumbnail.png';

import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';


const ListDetailView = ({ place, onBack }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [hoveredTab, setHoveredTab] = useState(null);

    const displayInfo = (info) => info ? ` ${info}` : '정보 없음';
    const displayPrice = (price) => price ? ` ${price} 원` : '정보 없음';
    const displaySkill = (skill) => skill ? ` ${skill} 면허 보유` : '정보 없음';

    const handleTabClick = (index) => { setActiveTab(index); };
    const handleTabHover = (index) => { setHoveredTab(index); };
    const handleTabLeave = () => { setHoveredTab(null); };


    return (
        <DetailContainer>
            <ListItem >
                <ContentsPhoto>
                    <ImageWrapper>
                        <Image
                            src={place.thumbnail || NonThumbNail}
                            alt={`image_thumbnail`}
                            onError={(e) => e.target.src = NonThumbNail}
                        />
                    </ImageWrapper>
                </ContentsPhoto>
                <H6 fontFamily='var(--font-family-primary)' textAlign="center" fontWeight="700">
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
                <BtnOutLine onClick={onBack} width='100%' borderRadius='10px'>
                    <ButtonConts> 목록으로 돌아가기 </ButtonConts>
                </BtnOutLine>
            </ListItem>
            <TabMenuWrap>
                <TabMenu
                    index={0}
                    activeTab={activeTab}
                    hoveredTab={hoveredTab}
                    onClick={handleTabClick}
                    onMouseEnter={handleTabHover}
                    onMouseLeave={handleTabLeave}
                    icon={InfoOutlinedIcon}
                    label="상세정보"
                />
                <TabMenu
                    index={1}
                    activeTab={activeTab}
                    hoveredTab={hoveredTab}
                    onClick={handleTabClick}
                    onMouseEnter={handleTabHover}
                    onMouseLeave={handleTabLeave}
                    icon={CreditCardRoundedIcon}
                    label="가격 보기"
                />
                <TabMenu
                    index={2}
                    activeTab={activeTab}
                    hoveredTab={hoveredTab}
                    onClick={handleTabClick}
                    onMouseEnter={handleTabHover}
                    onMouseLeave={handleTabLeave}
                    icon={RateReviewOutlinedIcon}
                    label="장례식장 후기"
                />
                <TabMenu
                    index={3}
                    activeTab={activeTab}
                    hoveredTab={hoveredTab}
                    onClick={() => {
                        if (place.link) {
                            window.open(place.link, '_blank');
                        } else {
                            alert('홈페이지 정보가 없습니다.');
                        }
                    }}
                    onMouseEnter={handleTabHover}
                    onMouseLeave={handleTabLeave}
                    icon={LanguageOutlinedIcon}
                    label="홈페이지 방문"
                />
            </TabMenuWrap>
            <TabContent activeTab={activeTab} place={place} />
        </DetailContainer>
    )
}

export default ListDetailView



const DetailContainer = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    gap: 2.4rem;
`;

const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 7rem;
    padding: 0 2.4rem .8rem 2.4rem;
    align-items: flex-start;
    gap: 2.4rem;
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
    object-fit: cover;
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
  color: var(--Albescent-White-700, #9E5330);
`;

const ButtonConts = styled.div`
    width: 100%;
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

const TabMenuWrap = styled.ul`
    width: 100%;
    height: 8.4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;
