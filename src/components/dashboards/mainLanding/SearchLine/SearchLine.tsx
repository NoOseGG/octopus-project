import React from 'react';
import styled from 'styled-components';
import { Container, InnerContainer } from '../styles/MainLandingStyles';
import Search from 'antd/es/input/Search';

const SearchLine: React.FC = () => {
  return (
    <Container backgroundColor={'#dbe1ea'}>
      <InnerContainer>
        <SearchLineContainer>
          <Search placeholder={'Введите УНП или название проверяемого объекта'} enterButton={'Проверить'} />
        </SearchLineContainer>
      </InnerContainer>
    </Container>
  );
};

export default SearchLine;

const SearchLineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
`;
