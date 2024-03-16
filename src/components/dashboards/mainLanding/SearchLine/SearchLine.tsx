import React from 'react';
import styled from 'styled-components';
import { Container, InnerContainer } from '../styles/MainLandingStyles';
import Search from 'antd/es/input/Search';

const SearchLine: React.FC = () => {
  return (
    <Container backgroundColor={'#dbe1ea'}>
      <InnerContainer>
        <SearchLineContainer>
          <Search placeholder={'Введите УНП или название проверяемого субъекта'} enterButton={'Проверить'} />
        </SearchLineContainer>
      </InnerContainer>
    </Container>
  );
};

export default SearchLine;

const SearchLineContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
