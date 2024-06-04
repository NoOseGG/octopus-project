import React from 'react';

import styled from 'styled-components';

import { Container, InnerContainer } from '../styles/MainLandingStyles';
import { serviceForItems } from './data';
import Item from '@app/components/dashboards/mainLanding/ServiceFor/Item';
import { ScrollType } from '@app/components/dashboards/mainLanding/Header/Header';

const ServiceFor: React.FC = () => {
  return (
    <Container backgroundColor={'#b9dbf4'} id={ScrollType.ServiceFor}>
      <InnerContainer>
        <ServiceForContainer>
          <Title>Для кого предназначен сервис</Title>
          <Info>
            {serviceForItems.map((item, index) => (
              <Item item={item} key={index} />
            ))}
          </Info>
        </ServiceForContainer>
      </InnerContainer>
    </Container>
  );
};

export default ServiceFor;

const ServiceForContainer = styled.div`
  width: 100%;
  padding: 20px 200px;

  @media (max-width: 1500px) {
    padding: 20px 100px;
  }

  @media (max-width: 1050px) {
    padding: 20px 50px;
  }

  @media (max-width: 1050px) {
    padding: 20px 10px;
  }
`;

const Info = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 30px;
  }
`;

const Title = styled.h2`
  font-size: 56px;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 40px;
  }

  @media (max-width: 800px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;
