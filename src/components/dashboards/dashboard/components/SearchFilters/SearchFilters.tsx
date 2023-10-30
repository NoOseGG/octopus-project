import React from 'react';
import styled from 'styled-components';
import Search from 'antd/es/input/Search';

const SearchFilters: React.FC = () => {
  return (
    <Container>
      <Search placeholder="Город" />
      <Search placeholder="Район" />
      <Search placeholder="Область" />
      <Search placeholder="ОКЭД" />
      <Search placeholder="Код ОКЭД" />
    </Container>
  );
};

export default SearchFilters;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 20px;
`;
