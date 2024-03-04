import React from 'react';
import styled from 'styled-components';
import { Container, InnerContainer } from '../styles/MainLandingStyles';
import { ScrollType } from '@app/components/dashboards/mainLanding/Header/Header';

const Tariffs: React.FC = () => {
  return (
    <Container backgroundColor={'#b9dbf4'} id={ScrollType.Tariffs}>
      <InnerContainer>
        <TariffsContainer>
          <Title>Тарифы</Title>
          <RatesContainer>
            <RateContainer>
              <LeftColumn>
                <TitlePRO>PRO</TitlePRO>
              </LeftColumn>
              <RightColumn></RightColumn>
            </RateContainer>
            <RateContainer>
              <LeftColumn>
                <TitlePRO>PRO+</TitlePRO>
              </LeftColumn>
              <RightColumn></RightColumn>
            </RateContainer>
          </RatesContainer>
        </TariffsContainer>
      </InnerContainer>
    </Container>
  );
};

export default Tariffs;

const TariffsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  color: #000;
  margin: 0;
  font-weight: 800;
`;

const RatesContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

const RateContainer = styled.div`
  width: 580px;
  height: 600px;
  background-color: #fff;
  display: flex;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 8px 10px rgba(53, 152, 219, 0.2);
  cursor: pointer;
`;

const LeftColumn = styled.div`
  width: 40%;
  height: 100%;
  padding-left: 20px;
`;

const RightColumn = styled.div`
  width: 60%;
  height: 100%;
  background-color: #dddee1;
`;

const TitlePRO = styled.h4`
  font-size: 28px;
  margin: 30px 0 15px;
`;
