import React from 'react';
import styled from 'styled-components';
import { Container, InnerContainer } from '../styles/MainLandingStyles';
import dataImage from '../../../../assets/landing/mainFunction/1data.png';
import purchasesImage from '../../../../assets/landing/mainFunction/2purchases.png';

const MainFunctionService: React.FC = () => {
  return (
    <Container backgroundColor={'#b9dbf4'}>
      <InnerContainer>
        <MainFunctionServiceContainer>
          <Title>Возможности платформы</Title>
          <TopLine>
            <DataContainer>
              <ImageCard src={dataImage} alt={'data'} />
              <Text>
                Сбор и обработка данных: Сервис автоматически собирает информацию о контрагентах из различных открытых
                источников, таких как регистры компаний, базы данных налоговых служб, новостные порталы и социальные
                сети. Затем данные проходят процесс обработки и структурирования для дальнейшего анализа.
              </Text>
            </DataContainer>
            <DataContainer>
              <ImageCard src={purchasesImage} alt={'data'} />
              <Text>
                Анализ финансовой стабильности: Сервис проводит глубокий анализ финансовых показателей контрагентов,
                включая доходы, расходы, прибыль, задолженности и другие финансовые показатели. Это позволяет оценить
                финансовую устойчивость контрагента и предсказать его вероятность банкротства или финансовых проблем.
              </Text>
            </DataContainer>
          </TopLine>
        </MainFunctionServiceContainer>
      </InnerContainer>
    </Container>
  );
};

export default MainFunctionService;

const MainFunctionServiceContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DataContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
`;

const Text = styled.p`
  width: 350px;
`;

const ImageCard = styled.img`
  width: 300px;
  height: 300px;
`;

const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
`;
