import React from 'react';
import styled from 'styled-components';

import ParagraphL from '../typo/ParagraphL';



const InputText = ({ id, label, value, onChange, placeholder, disabled, readOnly, required }) => (
    <InputWrapper>
        <ParagraphL fontFamily='var(--font-family-primary)' textAlign="left" fontWeight="600" color="var(--Albescent-White-300)">
            <Label htmlFor={id}>{label}</Label>
        </ParagraphL>
        <StyledInput
            type="text"
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
        >
        </StyledInput>

    </InputWrapper>
);

export default InputText;



const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .8rem;
    width: 100%;
    height: 4.4rem;
    padding: 0.8rem 1.6rem;
    border-radius: 20px;
    border: 0.5px solid var(--Albescent-White-300, #E2BB8F);
    background: var(--Almond-50, #FBF7F1);
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  width: 15%;
`;

const StyledInput = styled.input`
    flex: 1; 
    padding: 0.4rem 0.8rem;
    border: none;
    background: transparent;
    color: var(--Black);
    font-family: var(--font-family-primary);
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem; 
    box-sizing: border-box;
`;
