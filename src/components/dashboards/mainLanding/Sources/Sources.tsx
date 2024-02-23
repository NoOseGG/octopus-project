import React from 'react';
import styled from 'styled-components';
import { InnerContainer } from '../styles/MainLandingStyles';

const Sources: React.FC = () => {
  return (
    <Container>
      <InnerContainer>
        <SourcesContainer>
          <Title>Источники</Title>
          <SourceItemContainer>
            <Item>
              <ItemTitle>СМИ</ItemTitle>
              <ItemStats>
                <ItemStatsNumber>60 тыс.</ItemStatsNumber>
                <ItemStatsValue>источников</ItemStatsValue>
              </ItemStats>
              <ItemDescription>
                Информагентства, онлайн-СМИ, отраслевые порталы, агрегаторы, газеты, журналы, ТВ и радио
              </ItemDescription>
            </Item>
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

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 24px 48px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const ItemTitle = styled.div`
  font-size: 18px;
  line-height: 1.33;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin: 0;
  padding-bottom: 11px;
`;

const ItemStats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 700;
  text-align: center;
  color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 30px 0 32px;
  background-image: linear-gradient(to right, #b7ff49, #77ba12);
`;

const ItemStatsNumber = styled.span`
  font-size: 50px;
  line-height: 1.08;
  font-weight: 800;
  margin-bottom: 4px;
  text-align: center;
  color: transparent;
`;

const ItemStatsValue = styled.span`
  font-size: 18px;
  line-height: 1.56;
  font-weight: 700;
  text-align: center;
  color: transparent;
`;

const ItemDescription = styled.div`
  font-size: 14px;
  line-height: 1.43;
  text-align: center;
  color: #979ca9;
  margin: 0 0 7px;
`;
