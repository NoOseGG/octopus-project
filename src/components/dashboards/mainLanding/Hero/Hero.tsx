import React from 'react';

import * as S from '../styles/MainLandingStyles';
import styled from 'styled-components';

const Hero: React.FC = () => {
  return (
    <S.Container backgroundColor={'linear-gradient(to bottom, #0a0a19, #1d1d47);'}>
      <S.InnerContainer>
        <HeroContainer>
          <Title>Аналитикс</Title>
          <Description>
            сервис для оценки и анализа потенциальных и существующих деловых партнеров, а также конкурентов. Сервис
            основан на использовании передовых технологий и методов анализа данных, включая искусственный интеллект,
            позволяющий получить всестороннюю информацию и принять обоснованные решения на основе разнообразных данных,
            полученных из открытых источников, собранных в единый профиль.
          </Description>
          <ButtonDemo>Запрос Демо</ButtonDemo>
        </HeroContainer>
      </S.InnerContainer>
    </S.Container>
  );
};

export default Hero;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 800;
  color: #fff;
  font-size: 58px;
`;

const Description = styled.p`
  width: 800px;
  text-align: center;
  font-size: 18px;
  color: #fff;
`;

const ButtonDemo = styled.button`
  margin-top: 50px;
  padding: 10px 59px 12px;
  background-color: #60a200;
  color: #fff;
  border: 1px solid #76b41b;
  border-radius: 14px;
  cursor: pointer;

  &:hover {
    background-color: #568f02;
  }
`;
