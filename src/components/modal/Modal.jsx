import React, { useState } from 'react';
import styled from 'styled-components';

import ParagraphL from '../typo/ParagraphL';
import ParagraphM from '../typo/ParagraphM';
import Caption from '../typo/Caption';
import BtnOutLine from '../button/BtnOutLine';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Modal = ({ isOpen, onClose, onSubmit }) => {

    const [formData, setFormData] = useState({
        phoneNumber: '',
        location: '',
        address: '',
        requestTime: '',
        animalType: '',
        animalWight: '',
        searchType: '',
        productOption: '',
    });

    const [errorMessages, setErrorMessages] = useState({ location: '', address: '', animalWight: '' });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({ ...prev, [name]: value }));
    // };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // 실시간 에러 메시지 초기화
        if (errorMessages[name]) {
            setErrorMessages((prev) => ({ ...prev, [name]: '' }));
        }
    };

    // const handleSubmit = () => {
    //     if (!formData.animalWight) {
    //         setErrorMessage('반려동물 무게는 필수 입력 사항입니다.');
    //         return;
    //     }

    //     setErrorMessage('');
    //     onSubmit(formData);
    // };

    // const handleSubmit = () => {
    //     if (!formData.animalWight) {
    //         setErrorMessage('반려동물 무게는 필수 입력 사항입니다.');
    //         return;
    //     }
    //     if (!formData.location) {
    //         setErrorMessage('거주 지역은 필수 입력 사항입니다.');
    //         return;
    //     }
    //     if (!formData.address) {
    //         setErrorMessage('상세 주소는 필수 입력 사항입니다.');
    //         return;
    //     }

    //     const sanitizedData = { ...formData };
    //     Object.keys(sanitizedData).forEach((key) => {
    //         if (!sanitizedData[key]) {
    //             sanitizedData[key] = '';
    //         }
    //     });

    //     setErrorMessage('');
    //     onSubmit(sanitizedData);
    // };
    const handleSubmit = () => {
        const errors = {
            location: !formData.location ? '거주 지역은 필수 입력 사항입니다.' : '',
            address: !formData.address ? '상세 주소는 필수 입력 사항입니다.' : '',
            animalWight: !formData.animalWight ? '반려동물 무게는 필수 입력 사항입니다.' : '',
        };

        setErrorMessages(errors);

        // 에러가 없을 때만 제출
        const hasErrors = Object.values(errors).some((msg) => msg !== '');
        if (hasErrors) return;

        const sanitizedData = { ...formData };
        Object.keys(sanitizedData).forEach((key) => {
            if (!sanitizedData[key]) {
                sanitizedData[key] = '';
            }
        });

        onSubmit(sanitizedData);
    };

    if (!isOpen) return null;


    return (
        <>
            <DimLayer onClick={onClose} />
            <ModalWrapper>
                <ModalContent>
                    <CloseButton onClick={onClose}>×</CloseButton>
                    <ParagraphL color='#1b1b1b' fontWeight='600' textAlign='left'>
                        <Span>#무지개별#</Span><br />
                        간단한 정보를 입력해주세요.
                    </ParagraphL>

                    <InputRow>
                        <Caption color='var(--AlbescentWhite-950)' fontWeight='500' textAlign='left'>
                            연락처
                        </Caption>
                        <Input
                            type="text"
                            placeholder="연락처를 입력해주세요"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </InputRow>

                    <InputRow>
                        <Caption color='var(--AlbescentWhite-950)' fontWeight='500' textAlign='left'>
                            거주 지역
                        </Caption>
                        <SelectWrapper>
                            <Select name="location" value={formData.location} onChange={handleChange}>
                                <option value="">거주 지역</option>
                                <option value="강원도">강원도</option>
                                <option value="서울/경기/인천">서울/경기/인천</option>
                                <option value="대전/세종/충남북">대전/세종/충남북</option>
                                <option value="대구/경북">대구/경북</option>
                                <option value="부산/울산/경남">부산/울산/경남</option>
                                <option value="광주/전남/전북">광주/전남/전북</option>
                            </Select>
                            <ArrowDropDownIcon
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: '#44505A',
                                    fontSize: '20px',
                                    pointerEvents: 'none',
                                }}
                            />
                        </SelectWrapper>
                        {errorMessages.location && <ErrorMessage>{errorMessages.location}</ErrorMessage>}
                        <Input
                            type="text"
                            placeholder="상세 주소를 입력해주세요"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        {errorMessages.address && <ErrorMessage>{errorMessages.address}</ErrorMessage>}
                    </InputRow>

                    <InputRow>
                        <Caption color='var(--AlbescentWhite-950)' fontWeight='500' textAlign='left'>
                            반려동물 종류
                        </Caption>
                        <SelectWrapper>
                            <Select name="animalType" value={formData.animalType} onChange={handleChange}>
                                <option value="">반려동물 종류</option>
                                <option value="강아지">강아지</option>
                                <option value="고양이">고양이</option>
                                <option value="소동물">소동물 (햄스터, 토끼 등)</option>
                                <option value="기타">기타</option>
                            </Select>
                            <ArrowDropDownIcon
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: '#44505A',
                                    fontSize: '20px',
                                    pointerEvents: 'none',
                                }}
                            />
                        </SelectWrapper>
                    </InputRow>

                    <InputRow>
                        <Caption color='var(--AlbescentWhite-950)' fontWeight='500' textAlign='left'>
                            반려동물 무게(kg) **숫자만 입력해주세요
                        </Caption>
                        <Input
                            type="text"
                            placeholder="반려동물 무게 (kg)"
                            name="animalWight"
                            value={formData.animalWight}
                            onChange={handleChange}
                        />
                        {errorMessages.animalWight && <ErrorMessage>{errorMessages.animalWight}</ErrorMessage>}
                    </InputRow>

                    <InputRow>
                        <Caption color='var(--AlbescentWhite-950)' fontWeight='500' textAlign='left'>
                            반려동물 장례식장 선택 우선순위
                        </Caption>
                        <SelectWrapper>
                            <Select name="searchType" value={formData.searchType} onChange={handleChange}>
                                <option value="">우선순위</option>
                                <option value="비용">가격</option>
                                <option value="후기">서비스</option>
                                <option value="거리">거리</option>
                            </Select>
                            <ArrowDropDownIcon
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: '#44505A',
                                    fontSize: '20px',
                                    pointerEvents: 'none',
                                }}
                            />
                        </SelectWrapper>
                    </InputRow>

                    <BtnWrapper>
                        <BtnOutLine onClick={handleSubmit} width={'100%'}  >
                            <ParagraphM color='var(--AlbescentWhite-300)' fontWeight='600'>
                                장례식장 추천 받기
                            </ParagraphM>
                        </BtnOutLine>
                    </BtnWrapper>

                </ModalContent>
            </ModalWrapper >
        </>
    );
};

export default Modal;

const DimLayer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    cursor: pointer;
`;

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 40rem;
    max-height: 90%;
    background: var(--Default-White);
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1001;
    padding: 2rem;
    overflow-y: auto; 

    /* 스크롤바 커스텀 스타일 */
    &::-webkit-scrollbar { width: .8rem }
    &::-webkit-scrollbar-thumb { background-color: rgba(0, 0, 0, 0.3); border-radius: 4px;  transition: background-color 0.3s ease; }
    &::-webkit-scrollbar-thumb:hover { background-color: rgba(0, 0, 0, 0.5);  }
    &::-webkit-scrollbar-track { background-color: rgba(0, 0, 0, 0.1);  border-radius: 4px;  }
    scrollbar-width: thin; 
    scrollbar-color: rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.1);
`;

const ModalContent = styled.div`
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 1.6rem;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: #333;
    cursor: pointer;
    &:hover {
        color: var(--AlbescentWhite-400);
    }
`;

const Span = styled.span`
    font-family: var(--font-family-secondary);
    font-weight: 300;
`;

const InputRow = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .4rem;
    align-self: stretch;
`;

const Input = styled.input`
    width: 100%;
    padding: 0.8rem 1.6rem;
    border-radius: 5px;
    border: 1px solid var(--Outer-Space-400, #778C99);
    font-family: var(--font-family-primary);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    color: var(--AlbescentWhite-950);
`;

const SelectWrapper = styled.div`
    position: relative;
    width: 100%;
    height: fit-content;
`;

const Select = styled.select`
    width: 100%;
    padding: .8rem 1.6rem; 
    border-radius: 5px;
    border: 1px solid var(--Outer-Space-400, #778C99);
    font-family: var(--font-family-primary);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    background-color: var(--Default-White);
    appearance: none; 
    cursor: pointer;
    &:focus {
        outline: none;
        border-color: #5b9bd5;
    }
`;
const ErrorMessage = styled.div`
    color: red;
    font-size: 12px;
    margin-top: 0.5rem;
`;
const BtnWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    padding-top: 2.4rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    align-self: stretch;
`;