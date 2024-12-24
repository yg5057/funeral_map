import React, { useState } from 'react';
import styled from 'styled-components';

import ParagraphL from '../typo/ParagraphL';
import ParagraphM from '../typo/ParagraphM';
import Caption from '../typo/Caption';
import BtnOutLine from '../button/BtnOutLine';
import MenuBtn from '../button/MenuBtn'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Modal = ({ isOpen, onClose, onSubmit }) => {

    const [formData, setFormData] = useState({
        phoneNumber: '',
        location: '',
        address: '',
        petName: '',
        requestTime: '',
        animalType: '',
        petBreed: '',
        size: { width: '', height: '', depth: '' },
        animalWight: '',
        searchType: '',
        productOption: {
            memorialStone: false,
            urn: false,
            burial: false,
            flowers: false,
            coffin: false,
            basket: false
        },
        additionalNotes: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prev) => ({
                ...prev,
                productOption: { ...prev.productOption, [name]: checked }
            }));
        } else if (name in formData.size) {
            setFormData((prev) => ({
                ...prev,
                size: { ...prev.size, [name]: value }
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = () => {
        onSubmit(formData);
    };

    if (!isOpen) return null;


    return (
        <>
            <DimLayer onClick={onClose} />
            <ModalWrapper>
                <ModalContent>
                    <CloseButton onClick={onClose}>×</CloseButton>
                    <ParagraphL color={'#1B1B1B'} fontWeight={'600'} textAlign={'left'}>
                        <Span>#무지개별#</Span><br />
                        간단한 정보를 입력해주세요.
                    </ParagraphL>

                    <InputRow>
                        <Caption color='var(--AlbescentWhite-950)' fontWeight='600' textAlign='left'>
                            연락처
                        </Caption>
                        <Input
                            type="text"
                            placeholder="반려동물 종류를 입력해주세요"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </InputRow>

                    <InputRow>
                        <Caption color='var(--AlbescentWhite-950)' fontWeight='600' textAlign='left'>
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
                        <Input
                            type="text"
                            placeholder="상세 주소를 입력해주세요"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </InputRow>

                    <InputRow>
                        <Caption color='var(--AlbescentWhite-950)' fontWeight='600' textAlign='left'>
                            장례 희망 시간
                        </Caption>
                        <Input
                            type="text"
                            placeholder="장례 희망 시간을 입력해주세요"
                            name="requestTime"
                            value={formData.requestTime}
                            onChange={handleChange}
                        />
                    </InputRow>

                    <InputRow>
                        <Caption color='var(--AlbescentWhite-950)' fontWeight='600' textAlign='left'>
                            반려동물 이름
                        </Caption>
                        <Input
                            type="text"
                            placeholder="반려동물 이름을 입력해주세요"
                            name="petName"
                            value={formData.petName}
                            onChange={handleChange}
                        />
                    </InputRow>


                    <InputRow>
                        <Caption color='var(--AlbescentWhite-950)' fontWeight='600' textAlign='left'>
                            반려동물 종류
                        </Caption>
                        <SelectWrapper>
                            <Select name="animalType" value={formData.animalType} onChange={handleChange}>
                                <option value="">반려동물 종류</option>
                                <option value="강아지">강아지</option>
                                <option value="고양이">고양이</option>
                                <option value="햄스터">햄스터</option>
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
                        <Caption color='var(--AlbescentWhite-950)' fontWeight='600' textAlign='left'>
                            반려동물 종류 (**기타를 선택하신 분들만 입력해주세요)
                        </Caption>
                        <Input
                            type="text"
                            placeholder="반려동물 종류를 입력해주세요"
                            name="petBreed"
                            value={formData.petBreed}
                            onChange={handleChange}
                        />
                    </InputRow>

                    <InputRow>
                        <Caption color='var(--AlbescentWhite-950)' fontWeight='600' textAlign='left'>
                            반려동물 크기(cm) **숫자만 입력해주세요
                        </Caption>
                        <SizeInputWrapper>
                            <Input
                                type="text"
                                placeholder="가로 (cm)"
                                name="width"
                                value={formData.size.width}
                                onChange={handleChange}
                            />
                            <Input
                                type="text"
                                placeholder="세로 (cm)"
                                name="height"
                                value={formData.size.height}
                                onChange={handleChange}
                            />
                            <Input
                                type="text"
                                placeholder="높이 (cm)"
                                name="depth"
                                value={formData.size.depth}
                                onChange={handleChange}
                            />
                        </SizeInputWrapper>
                    </InputRow>

                    <InputRow>
                        <Caption color='var(--AlbescentWhite-950)' fontWeight='600' textAlign='left'>
                            반려동물 무게(kg) **숫자만 입력해주세요
                        </Caption>
                        <Input
                            type="text"
                            placeholder="반려동물 무게 (kg)"
                            name="animalWight"
                            value={formData.animalWight}
                            onChange={handleChange}
                        />
                    </InputRow>

                    <InputRow>
                        <Caption color='var(--AlbescentWhite-950)' fontWeight='600' textAlign='left'>
                            반려동물 장례식장 선택 우선순위
                        </Caption>
                        <SelectWrapper>
                            <Select name="searchType" value={formData.searchType} onChange={handleChange}>
                                <option value="">우선순위</option>
                                <option value="가격">가격</option>
                                <option value="수익">서비스</option>
                                <option value="기타">거리</option>
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
                        <Caption color='var(--AlbescentWhite-950)' fontWeight='600' textAlign='left'>
                            반려동물 장례식장 옵션 선택 (다중 선택 가능)
                        </Caption>
                        <CheckboxWrapper>
                            <CheckboxLabel>
                                <CheckboxInput
                                    type="checkbox"
                                    name="memorialStone"
                                    checked={formData.productOption.memorialStone}
                                    onChange={handleChange}
                                />
                                <CustomCheckbox checked={formData.productOption.memorialStone} />
                                메모리얼 스톤
                            </CheckboxLabel>
                            <CheckboxLabel>
                                <CheckboxInput
                                    type="checkbox"
                                    name="urn"
                                    checked={formData.productOption.urn}
                                    onChange={handleChange}
                                />
                                <CustomCheckbox checked={formData.productOption.urn} />
                                유골함
                            </CheckboxLabel>
                            <CheckboxLabel>
                                <CheckboxInput
                                    type="checkbox"
                                    name="burial"
                                    checked={formData.productOption.burial}
                                    onChange={handleChange}
                                />
                                <CustomCheckbox checked={formData.productOption.burial} />
                                수의, 덮개
                            </CheckboxLabel>
                            <CheckboxLabel>
                                <CheckboxInput
                                    type="checkbox"
                                    name="flowers"
                                    checked={formData.productOption.flowers}
                                    onChange={handleChange}
                                />
                                <CustomCheckbox checked={formData.productOption.flowers} />
                                꽃
                            </CheckboxLabel>
                            <CheckboxLabel>
                                <CheckboxInput
                                    type="checkbox"
                                    name="coffin"
                                    checked={formData.productOption.coffin}
                                    onChange={handleChange}
                                />
                                <CustomCheckbox checked={formData.productOption.coffin} />
                                관
                            </CheckboxLabel>
                            <CheckboxLabel>
                                <CheckboxInput
                                    type="checkbox"
                                    name="basket"
                                    checked={formData.productOption.basket}
                                    onChange={handleChange}
                                />
                                <CustomCheckbox checked={formData.productOption.basket} />
                                바구니 요람
                            </CheckboxLabel>
                        </CheckboxWrapper>
                    </InputRow>

                    <InputRow>
                        <Caption color='var(--AlbescentWhite-950)' fontWeight='600' textAlign='left'>
                            추가 요청사항
                        </Caption>
                        <TextArea
                            placeholder="자유롭게 작성해주세요"
                            name="additionalNotes"
                            value={formData.additionalNotes}
                            onChange={handleChange}
                        />
                    </InputRow>

                    <BtnWrapper>
                        <BtnOutLine onClick={handleSubmit} width={'100%'}  >
                            <ParagraphM color='var(--AlbescentWhite-300)' fontWeight='600'>
                                장례식장 추천 받기
                            </ParagraphM>
                        </BtnOutLine>
                        <MenuBtn width='100%' borderRadius='1rem'>
                            <ParagraphM color='var(--Default-White)' fontWeight='600'>
                                예약 하기
                            </ParagraphM>
                        </MenuBtn>
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

const SizeInputWrapper = styled.div`
    display: flex;
    gap: 0.8rem;
`;

const CheckboxWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const CheckboxLabel = styled.label`
    width: 33%;
    display: flex;
    padding-right: 0.2rem;
    padding-bottom: 0.4rem;
    align-items: center;
    gap: 0.8rem;
    position: relative;
    cursor: pointer;
    color: var(--AlbescentWhite-950);
    font-family: var(--font-family-primary);
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2rem;
`;

const CheckboxInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;

const CustomCheckbox = styled.span`
    width: 1.4rem;
    height: 1.4rem;
    background: ${(props) => (props.checked ? '#E2BB8F' : 'transparent')};
    border: 1px solid #ccc;
    border-radius: 4px;
    display: inline-block;
    box-shadow: inset 0 0 0 0.2rem white;
`;

const TextArea = styled.textarea`
    width: 100%;
    height: fit-content;
    padding: 0.8rem 1.6rem;
    border-radius: 5px;
    border: 1px solid var(--Outer-Space-400, #778C99);
    font-family: var(--font-family-primary);
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
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