import React from 'react';
import styled, { keyframes } from 'styled-components';

import Subtitle from '../typo/Subtitle';



const ToggleButton = ({ isOpen, toggleSidebar }) => {
  return (
    <Button isOpen={isOpen} onClick={toggleSidebar}>
      <Bar></Bar>
      <Subtitle fontFamily='var(--font-family-primary)' textAlign="center" fontWeight="600">
        장례식장 찾기
      </Subtitle>
    </Button>
  );
};

export default ToggleButton;




const clickAnimationOpen = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-2rem); }
`;

const clickAnimationClose = keyframes`
  0% { transform: translateY(-2rem); }
  100% { transform: translateY(0); }
`;

const Button = styled.button`
  position: absolute;
  left: 0;
  bottom: ${(props) => (props.isOpen ? '60%' : '0')};
  display: flex;
  width: 50rem;
  height: fit-content;
  max-width: 100%;
  padding: 1rem 1.6rem;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  border-radius: 30px 30px 0px 0px;
  background: var(--Default-White);
  cursor: pointer;
  transition: left 0.3s ease;
  font-size: 2rem;
  z-index: 1;
  animation: ${(props) => (props.isOpen ? clickAnimationOpen : clickAnimationClose)} 1s ease-out;  
`;
const Bar = styled.button`
  display: flex;
  width: 3.6rem;
  height: .5rem;
  border-radius: 5px;
  background:#C7C7CC;
`;
