import React from 'react';
import styled from 'styled-components';
import { Container, InnerContainer } from '../styles/MainLandingStyles';
import mapBelarus from '../../../../assets/landing/map/belarus-map.svg';
import { ScrollType } from '@app/components/dashboards/mainLanding/Header/Header';

const MapBelarus: React.FC = () => {
  return (
    <Container backgroundColor={'#b9dbf4'} id={ScrollType.Map}>
      <InnerContainer>
        <MapBelarusContainer>
          <Image src={mapBelarus} alt={'Карта'} />
        </MapBelarusContainer>
      </InnerContainer>
    </Container>
  );
};

export default MapBelarus;

const MapBelarusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 500px;
`;
