import React from 'react';
import styled from 'styled-components';

const Geography: React.FC = () => {
  return (
    <GeographyContainer>
      <Title>География</Title>
      <CountCountries>Беларусь</CountCountries>
      <Content>
        Analytix предназначен для сбора и анализа информации из открытых источников о всех субъектах РБ.
      </Content>
    </GeographyContainer>
  );
};

export default Geography;

const GeographyContainer = styled.div`
  margin: 88px auto 0;
  padding: 13px 0 97px;
  width: 100%;
  max-width: 831px;
  background-image: url('/geography.svg');
  background-position: top center;
  background-size: contain;
  background-repeat: no-repeat;
  text-align: center;
`;

const Title = styled.h2`
  margin: 0 auto 45px;
  color: #fff;
  font-weight: 800;
  font-size: 48px;
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
`;
