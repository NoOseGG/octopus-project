import React from 'react';
import { Container, InnerContainer } from '../styles/MainLandingStyles';
import styled from 'styled-components';
import oneImage from '../../../../assets/images/landing/mainFunction/one.svg';
import twoImage from '../../../../assets/images/landing/mainFunction/two.svg';
import threeImage from '../../../../assets/images/landing/mainFunction/three.svg';
import fourImage from '../../../../assets/images/landing/mainFunction/four.svg';
import fiveImage from '../../../../assets/images/landing/mainFunction/five.svg';
import sixImage from '../../../../assets/images/landing/mainFunction/six.svg';
import FunctionCard from '@app/components/dashboards/mainLanding/MainFunction/FunctionCard/FunctionCard';
import { ScrollType } from '@app/components/dashboards/mainLanding/utils/utils';

const oneTitle = 'Сбор и обработка данных';
const oneContent =
  'Сервис автоматически собирает информацию о контрагентах из различных открытых источников, таких как регистры компаний, базы данных налоговых служб, новостные порталы и социальные сети. Затем данные проходят процесс обработки и структурирования для дальнейшего анализа.';
const twoTitle = 'Анализ финансовой стабильности';
const twoContent =
  'Сервис проводит глубокий анализ финансовых показателей контрагентов включая, задолженности и другие финансовые показатели. Это позволяет оценить финансовую устойчивость контрагента и предсказать его вероятность банкротства или финансовых проблем';
const threeTitle = 'Оценка репутации';
const threeContent =
  'Сервис анализирует репутацию контрагента, основываясь на общественном мнении, отзывах клиентов, оценках и рейтингах. Это позволяет пользователям получить представление о надежности и надлежащем исполнении обязательств контрагентом.';
const fourTitle = 'Проверка юридической чистоты';
const fourContent =
  'Сервис проводит проверку наличия правовых проблем, связанных с контрагентом. Это помогает избежать возможных рисков и конфликтов, обеспечивая тем самым безопасность и надежность деловых отношений.';
const fiveTitle = 'Визуализация данных';
const fiveContent =
  'Сервис предоставляет пользователю удобный интерфейс для визуализации и анализа данных. Графики, диаграммы и отчеты позволяют легко интерпретировать результаты анализа и принимать обоснованные решения.';
const sixTitle = 'Мониторинг изменений и обновлений';
const sixContent =
  'Сервис предоставляет функцию мониторинга, которая автоматически отслеживает изменения в данных о контрагентах и информации из открытых источников. Это позволяет пользователям быть в курсе актуальной информации и своевременно реагировать на любые изменения, которые могут повлиять на их бизнес или решения.';

const MainFunction: React.FC = () => {
  return (
    <Container backgroundColor={'linear-gradient(to bottom, #1d1d47, #0d0d20);'} id={ScrollType.MainFunction}>
      <InnerContainer>
        <MainFunctionContainer>
          <FunctionCard image={oneImage} title={oneTitle} content={oneContent} />
          <FunctionCard image={twoImage} title={twoTitle} content={twoContent} />
          <FunctionCard image={threeImage} title={threeTitle} content={threeContent} />
          <FunctionCard image={fourImage} title={fourTitle} content={fourContent} />
          <FunctionCard image={fiveImage} title={fiveTitle} content={fiveContent} />
          <FunctionCard image={sixImage} title={sixTitle} content={sixContent} />
        </MainFunctionContainer>
      </InnerContainer>
    </Container>
  );
};

export default MainFunction;

const MainFunctionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  width: 100%;
  padding: 32px 48px;

  @media (max-width: 1450px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1120px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 800px) {
    padding: 32px 5px;
  }
`;
