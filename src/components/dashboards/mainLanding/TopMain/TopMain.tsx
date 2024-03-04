import React from 'react';
import { InnerContainer } from '../styles/MainLandingStyles';
import styled from 'styled-components';

const TopMain: React.FC = () => {
  return (
    <TopMainContainer>
      <InnerContainer>
        <Text>
          <strong>Analytix</strong> - сервис для анализа контрагентов представляет собой инструмент, разработанный для
          оценки и анализа потенциальных или существующих деловых партнеров. Сервис основан на использовании передовых
          технологий и методов анализа данных, позволяющих пользователям получить всестороннюю информацию о контрагентах
          и принять обоснованные решения.
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
