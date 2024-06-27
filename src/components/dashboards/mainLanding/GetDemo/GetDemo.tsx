import React from 'react';

import * as S from '../styles/MainLandingStyles';
import styled from 'styled-components';
import DemoForm from '@app/components/dashboards/mainLanding/GetDemo/DemoForm/DemoForm';
import DemoInfo from '@app/components/dashboards/mainLanding/GetDemo/DemoInfo/DemoInfo';
import { ScrollType } from '@app/components/dashboards/mainLanding/utils/utils';

const GetDemo: React.FC = () => {
  return (
    <S.Container backgroundColor={'linear-gradient(to bottom, #001a40, #232528);'} id={ScrollType.Demo}>
      <S.InnerContainer>
        <GetDemoContainer>
          <Title>Демо доступ</Title>
          <DemoContainer>
            <DemoInfo />
            <DemoForm />
          </DemoContainer>
        </GetDemoContainer>
      </S.InnerContainer>
    </S.Container>
  );
};

export default GetDemo;

const GetDemoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const DemoContainer = styled.div`
  max-width: 900px;
  height: auto;
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-radius: 12px;
  gap: 20px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 56px;
  text-align: center;
  color: #fff;
  font-weight: 800;

  @media (max-width: 1200px) {
    font-size: 40px;
  }

  @media (max-width: 800px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;
