import React from 'react';
import styled from 'styled-components';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import SettingDropdown from '@app/components/header/components/SearchInput/SettingDropdown/SettingDropdown';

export enum SearchType {
  STANDARD = 'Введите УНП или название организации',
  OTHER = 'Введите номер телефона, веб-сайт или е-мейл',
}

type SearchInputProps = {
  query: string;
  setQuery: (value: string) => void;
  handleCancelSearch: () => void;
  searchType: SearchType;
  setSearchType: (searchType: SearchType) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  query,
  setQuery,
  handleCancelSearch,
  searchType,
  setSearchType,
}) => {
  return (
    <Container>
      <SearchWrapper>
        <Search value={query} onChange={(event) => setQuery(event.target.value)} placeholder={searchType} />
        {Boolean(query.length) && <CloseOutlined style={{ cursor: 'pointer' }} onClick={handleCancelSearch} />}
        <SearchOutlined style={{ cursor: 'pointer' }} />
      </SearchWrapper>
      <SettingDropdown searchType={searchType} setSearchType={setSearchType} />
    </Container>
  );
};

export default SearchInput;

const Container = styled.div`
  margin-left: 30px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding: 10px 12px;
  gap: 8px;
  position: relative;
`;

const Search = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  background-color: transparent;
`;
