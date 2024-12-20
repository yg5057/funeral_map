import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const InputSearch = ({ id, value, onChange }) => (
  <SearchBar>
    <SearchInput
      type="text"
      id={id}
      value={value}
      onChange={onChange}
      placeholder={"장례식장 이름을 검색해 주세요."}
    />
    <SearchIcon icon={faSearch} />
  </SearchBar>
);

export default InputSearch;



const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 4rem;
  padding: 0.8rem 1.6rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 40px;
  border: 1px solid var(--Albescent-White-400, #D59962);
  background: var(--Default-White);
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-family: var(--font-family-primary);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
  font-size: 1.6rem;
  color: var(--Black);
`;
