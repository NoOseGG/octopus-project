import React from 'react';
import styled from 'styled-components';
import * as S from '../styles/MainLandingStyles';
import { ScrollType } from '@app/components/dashboards/mainLanding/utils/utils';
import Card from '@app/components/dashboards/mainLanding/Tariffs/Cards/Card';
import { CardType } from '@app/components/dashboards/mainLanding/Tariffs/Cards/utils';

const Tariffs: React.FC = () => {
  return (
    <S.Container backgroundColor={'linear-gradient(to bottom, #000814, #001a40);'} id={ScrollType.Tariffs}>
      <S.InnerContainer>
        <TariffsContainer>
          <S.Title>Тарифные планы</S.Title>
          <Subtitle>Выберите тарифный план</Subtitle>
          <CardContainer>
            <Card cardType={CardType.DEMO} />
            <Card cardType={CardType.STANDARD} />
            <Card cardType={CardType.SPECIAL} />
          </CardContainer>
        </TariffsContainer>
      </S.InnerContainer>
    </S.Container>
  );
};

export default Tariffs;

const TariffsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  text-align: center;
  color: #fff;
  margin: 0;
  font-weight: 400;
`;

const CardContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
`;
