import React from 'react';
import styled from 'styled-components';
import MapBelarus from '@app/components/dashboards/mainLanding/MapBelarus/MapBelarus';
import { ScrollType } from '@app/components/dashboards/mainLanding/Header/Header';

const Geography: React.FC = () => {
  return (
    <GeographyContainer id={ScrollType.Map}>
      <Title>Интерактивная карта</Title>
      <CountCountries>Беларуси</CountCountries>
      <Content>Количество дейтвующих субъектов по регионам.</Content>
      <MapBelarus />
    </GeographyContainer>
  );
};

export default Geography;

const GeographyContainer = styled.div`
  margin: 88px auto 0;
  padding-top: 14px;
  width: 100%;
  //background-image: url('/geography.svg');
  background-position: top center;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;

  @media (max-width: 400px) {
    margin: 30px auto 0;
    padding: 10px 0 20px;
  }
`;

const Title = styled.h2`
  margin: 0 auto 20px;
  color: #fff;
  font-weight: 800;
  font-size: 48px;

  @media (max-width: 500px) {
    font-size: 30px;
  }

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const CountCountries = styled.span`
  margin: 0 auto;
  font-size: 80px;
  font-weight: 800;
  line-height: 0.68;
  color: transparent;
  background-image: linear-gradient(to right, #74a6ff, #2775ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 500px) {
    font-size: 60px;
  }

  @media (max-width: 400px) {
    font-size: 50px;
  }
`;

const Content = styled.span`
  margin: 40px auto 0;
  color: #fff;
  font-size: 16px;
  line-height: 26px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  text-align: center;

  @media (max-width: 400px) {
    font-size: 10px;
  }
`;
