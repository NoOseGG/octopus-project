import React from 'react';
import { InnerContainer } from '../styles/MainLandingStyles';
import styled from 'styled-components';

const TopMain: React.FC = () => {
  return (
    <TopMainContainer>
      <InnerContainer>
        <Text>
          <strong>Analytix</strong> - сервис для оценки и анализа потенциальных и существующих деловых партнеров, а
          также конкурентов. Сервис основан на использовании передовых технологий и методов анализа данных, включая
          искусственный интеллект, позволяющий получить всестороннюю информацию и принять обоснованные решения на основе
          разнообразных данных, полученных из открытых источников, собранных в единый профиль.
        </Text>
      </InnerContainer>
    </TopMainContainer>
  );
};

export default TopMain;

const TopMainContainer = styled.div`
  background-image: url('/LendingTopMainBackground.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-color: #b9dbf4;
  padding: 50px 0;
  height: 500px;
`;

const Text = styled.p`
  color: #000;
  font-size: 16px;
  width: 500px;

  @media (max-width: 700px) {
    font-size: 12px;
    width: 300px;
  }
`;
