import React from 'react';
import styled from 'styled-components';
import Header from '@app/components/dashboards/mainLanding/Header/Header';
import TopMain from '@app/components/dashboards/mainLanding/TopMain/TopMain';
import SearchLine from '@app/components/dashboards/mainLanding/SearchLine/SearchLine';
import MainFunctionService from '@app/components/dashboards/mainLanding/MainFunctionService/MainFunctionService';

const MainLanding: React.FC = () => {
  return (
    <MainLandingContainer>
      <Header />
      <TopMain />
      <SearchLine />
      <MainFunctionService />
    </MainLandingContainer>
  );
};

export default MainLanding;

const MainLandingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
