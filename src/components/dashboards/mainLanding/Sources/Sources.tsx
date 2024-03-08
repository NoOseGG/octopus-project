import React from 'react';
import styled from 'styled-components';
import { InnerContainer } from '../styles/MainLandingStyles';
import SourceItem, {
  GradientType,
  SourceItemObject,
} from '@app/components/dashboards/mainLanding/Sources/SourceItem/SourceItem';
import Geography from '@app/components/dashboards/mainLanding/Sources/Geography/Geography';
import { ScrollType } from '@app/components/dashboards/mainLanding/Header/Header';

const SocialItem: SourceItemObject = {
  gradient: GradientType.BLUE,
  upperTitle: 'более',
  title: '> 400 тыс. организаций и ИП',
  number: '70 тыс.',
  value: 'сообщений в месяц',
  description: 'ЕГР, МНС, Вакансии, Резюме, Закупки, Банкротства, Ликвидации',
};

const SMIItem: SourceItemObject = {
  gradient: GradientType.GREEN,
  upperTitle: 'более',
  title: 'СМИ',
  number: '10',
  value: 'источников',
  description: 'Информагентства, онлайн-СМИ, отраслевые порталы, агрегаторы, газеты, журналы',
};

const ArchiveItem: SourceItemObject = {
  gradient: GradientType.SILVER,
  upperTitle: 'более',
  title: 'Архив',
  number: '30 млн',
  value: 'сообщений',
  description: 'Архив сообщений с 2018 года',
};

const Sources: React.FC = () => {
  return (
    <Container id={ScrollType.Sources}>
      <InnerContainer>
        <SourcesContainer>
          <Title>Источники</Title>
          <SourceItemContainer>
            <SourceItem item={SocialItem} />
            <SourceItem item={SMIItem} />
            <SourceItem item={ArchiveItem} />
          </SourceItemContainer>
          <Geography />
        </SourcesContainer>
      </InnerContainer>
    </Container>
  );
};

export default Sources;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  background-image: linear-gradient(to bottom, #090818, #0b2d2d 100%);
  :before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.24;
    background-image: radial-gradient(circle at 0 0, #0f00ff, rgba(0, 0, 0, 0) 44%);
  }

  @media (max-width: 500px) {
    padding: 5px 0;
  }
`;

const SourcesContainer = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  padding: 72px 0 41px;
`;

const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  color: #fff;
  margin: 0;
  font-weight: 800;
`;

const SourceItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  width: 100%;
  margin: 0 auto;
  padding: 48px 48px 0;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 400px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 20px;
    grid-column-gap: 10px;
    padding: 0;
  }

  @media (max-width: 360px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 10px;
  }
`;
