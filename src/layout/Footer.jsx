import React from 'react'
import styled from 'styled-components';


const Footer = () => {
    return (
        <Wrapper>
            <LogoText>#무지개별#</LogoText>
            <TextWrapper>
                <p>주소 : 광주 광역시 동구 금남로4가 6 유성빌딩 303호 | 대표자 : 정현우</p>
                <p>대표 전화 : 1644-9102 | E-mail : hahaha-mail@hanmail.net</p>
                <p>사업자등록번호 : 583-86-02341 | 통신판매업신고번호 : 제 2022-동구-0292호</p>
            </TextWrapper>
            <Copyright>Copyright ⓒ 2024 스페이스플래닝(주). All Rights Reserved</Copyright>
        </Wrapper>
    )
}

export default Footer


const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50rem;
    max-width: 100%;
    height: fit-content;
    padding: 3.2rem;
    gap: 2rem;
    background: var(--AlbescentWhite-50, #FBF7F1);
`;
const LogoText = styled.h1`
    color: var(--Outer-Space-500, #5C717E);
    font-family: var(--font-family-secondary);
    font-size: 32px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;
const TextWrapper = styled.section`
    color: var(--Outer-Space-500, #5C717E);
    font-family: var(--font-family-primary);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
`;
const Copyright = styled.p`
    color: var(--Outer-Space-500, #5C717E);
    font-family: var(--font-family-primary);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
`;