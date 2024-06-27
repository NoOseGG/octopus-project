import React from 'react';
import styled from 'styled-components';
import Header from '@app/components/dashboards/mainLanding/Header/Header';
import SearchLine from '@app/components/dashboards/mainLanding/SearchLine/SearchLine';
import Footer from '@app/components/dashboards/mainLanding/Footer/Footer';
import MainFunction from '@app/components/dashboards/mainLanding/MainFunction/MainFunction';
import Sources from '@app/components/dashboards/mainLanding/Sources/Sources';
import ScrollButton from '@app/components/dashboards/profile-info/components/components/Buttons/ScrollButton/ScrollButton';
import ServiceFor from '@app/components/dashboards/mainLanding/ServiceFor/ServiceFor';
import Hero from '@app/components/dashboards/mainLanding/Hero/Hero';
import GetDemo from '@app/components/dashboards/mainLanding/GetDemo/GetDemo';
import Tariffs from '@app/components/dashboards/mainLanding/Tariffs/Tariffs';

const MainLanding: React.FC = () => {
  return (
    <MainLandingContainer>
      <Header />
      <Hero />
      {/*<TopMain />*/}
      <SearchLine />
      <MainFunction />
      <Sources />
      <ServiceFor />
      <Tariffs />
      <GetDemo />
      <Footer />
      {/*<PayAttentionModal />*/}
      <ScrollButton />
    </MainLandingContainer>
  );
};

export default MainLanding;

const MainLandingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
