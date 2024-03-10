import React from 'react';
import styled from 'styled-components';
import Header from '@app/components/dashboards/mainLanding/Header/Header';
import TopMain from '@app/components/dashboards/mainLanding/TopMain/TopMain';
import SearchLine from '@app/components/dashboards/mainLanding/SearchLine/SearchLine';
import Footer from '@app/components/dashboards/mainLanding/Footer/Footer';
import MainFunction from '@app/components/dashboards/mainLanding/MainFunction/MainFunction';
import Sources from '@app/components/dashboards/mainLanding/Sources/Sources';
import ScrollButton from '@app/components/dashboards/profile-info/components/components/Buttons/ScrollButton/ScrollButton';
import PayAttentionModal from '@app/components/dashboards/mainLanding/PayAttentionModal/PayAttentionModal';

const MainLanding: React.FC = () => {
  return (
    <MainLandingContainer>
      <Header />
      <TopMain />
      <SearchLine />
      <MainFunction />
      <Sources />
      {/*<Tariffs />*/}
      <Footer />
      <PayAttentionModal />
      <ScrollButton />
    </MainLandingContainer>
  );
};

export default MainLanding;

const MainLandingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
