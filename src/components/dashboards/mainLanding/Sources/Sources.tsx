import React from 'react';
import styled from 'styled-components';
import { InnerContainer } from '../styles/MainLandingStyles';
import SourceItem, {
  GradientType,
  SourceItemObject,
} from '@app/components/dashboards/mainLanding/Sources/SourceItem/SourceItem';

const SocialItem: SourceItemObject = {
  gradient: GradientType.BLUE,
  title: 'Социальные медиа',
  number: '3 млрд',
  value: 'сообщений в месяц',
  description:
    'Соцсети: ВКонтакте, Instagram*, Одноклассники, Facebook*, Rutube, YouTube, TikTok и др.\n' +
    'Блоги, форумы, сайты отзывов\n' +
    'Telegram-каналы и открытые чаты',
};

const SMIItem: SourceItemObject = {
  gradient: GradientType.GREEN,
  title: 'СМИ',
  number: '60 тыс.',
  value: 'источников',
  description: 'Информагентства, онлайн-СМИ, отраслевые порталы, агрегаторы, газеты, журналы, ТВ и радио',
};

const ArchiveItem: SourceItemObject = {
  gradient: GradientType.SILVER,
  title: 'Архив',
  number: '220 млрд',
  value: 'сообщений',
  description: 'Архив сообщений из соцмедиа с 2012 года',
};

const Sources: React.FC = () => {
  return (
    <Container>
      <InnerContainer>
        <SourcesContainer>
          <Title>Источники</Title>
          <SourceItemContainer>
            <SourceItem item={SocialItem} />
            <SourceItem item={SMIItem} />
            <SourceItem item={ArchiveItem} />
          </SourceItemContainer>
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
`;
