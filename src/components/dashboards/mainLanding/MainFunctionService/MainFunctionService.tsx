import React from 'react';
import styled from 'styled-components';
import { Container, InnerContainer } from '../styles/MainLandingStyles';
import dataImage from '../../../../assets/landing/mainFunction/1data.png';
import purchasesImage from '../../../../assets/landing/mainFunction/2purchases.png';
import newsImage from '../../../../assets/landing/mainFunction/3news.png';
import inspectionImage from '../../../../assets/landing/mainFunction/4inspection.png';
import diagramsImage from '../../../../assets/landing/mainFunction/5diagrams.png';
import resumesImage from '../../../../assets/landing/mainFunction/6resumes.png';
import FunctionCard from '@app/components/dashboards/mainLanding/MainFunctionService/FunctionCard/FunctionCard';

const MainFunctionService: React.FC = () => {
  const dataText =
    'Сбор и обработка данных: Сервис автоматически собирает информацию о контрагентах из различных открытых источников, таких как регистры компаний, базы данных налоговых служб, новостные порталы и социальные сети. Затем данные проходят процесс обработки и структурирования для дальнейшего анализа.';
  const purchaseText =
    'Анализ финансовой стабильности: Сервис проводит глубокий анализ финансовых показателей контрагентов, включая доходы, расходы, прибыль, задолженности и другие финансовые показатели. Это позволяет оценить финансовую устойчивость контрагента и предсказать его вероятность банкротства или финансовых проблем.';
  const newsText =
    'Оценка репутации: Сервис анализирует репутацию контрагента, основываясь на общественном мнении, отзывах клиентов, оценках и рейтингах. Это позволяет пользователям получить представление о надежности и надлежащем исполнении контрагента.';
  const inspectionText =
    'Проверка юридической чистоты: Сервис проводит проверку наличия судебных исков, нарушений законодательства, налоговых преступлений или других юридических проблем, связанных с контрагентом. Это помогает избежать возможных правовых рисков и конфликтов.';
  const diagramText =
    ' Визуализация данных: Сервис предоставляет пользователю удобный интерфейс для визуализации и анализа данных. Графики, диаграммы и отчеты позволяют легко интерпретировать результаты анализа и принимать обоснованные решения';
  const analytixText =
    'Аналитический сервис для анализа контрагентов является незаменимым инструментом для бизнес-аналитиков, финансовых аналитиков, руководителей компаний и всех, кто заинтересован в оценке надежности и рисков при выборе деловых партнеров. Он помогает сократить время и усилия, затрачиваемые на поиск и анализ информации о контрагентах, и повышает эффективность принятия решений.';

  return (
    <Container backgroundColor={'#b9dbf4'}>
      <InnerContainer>
        <MainFunctionServiceContainer>
          <Title>Возможности платформы</Title>
          <TopLine>
            <FunctionCard image={dataImage} text={dataText} />
            <FunctionCard image={purchasesImage} text={purchaseText} />
          </TopLine>
          <MiddleLine>
            <FunctionCard image={newsImage} text={newsText} />
            <FunctionCard image={inspectionImage} text={inspectionText} />
          </MiddleLine>
          <BottomLine>
            <FunctionCard image={diagramsImage} text={diagramText} />
            <FunctionCard image={resumesImage} text={analytixText} />
          </BottomLine>
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

const Title = styled.h3`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
`;

const TopLine = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
`;

const MiddleLine = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: end;
  gap: 20px;
`;

const BottomLine = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: start;
  gap: 20px;
`;
