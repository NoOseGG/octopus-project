import React from 'react';
import styled from 'styled-components';
import MainInfo from '@app/components/dashboards/dashboard/components/MainInfo/MainInfo';
import LineChartYears from '@app/components/dashboards/dashboard/components/LineChartYears/LineChartYears';
import ColumnChartMonth from '@app/components/dashboards/dashboard/components/ColumnChartMonth/ColumnChartMonth';
import SearchFilters from '@app/components/dashboards/dashboard/components/SearchFilters/SearchFilters';
import TypeActivities from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivities';
import CurrentSubjectsByAge from '@app/components/dashboards/dashboard/components/CurrentSubjectsByAge/CurrentSubjectsByAge';
import DetailedInformationCompany from '@app/components/dashboards/dashboard/components/DetailedInformationCompany/DetailedInformationCompany';
import LiquidatedMainInfo from '@app/components/dashboards/dashboard/components/LiquidatedMainInfo/LiquidatedMainInfo';
import LineChartLiquidatedYears from '@app/components/dashboards/dashboard/components/LineChartLiquidatedYear/LineChartLiquidatedYears';
import ColumnChartLiquidatedMonth from '@app/components/dashboards/dashboard/components/ColumnChartLiquidatedMoth/ColumnChartLiquidatedMonth';
import { EntityType } from '@app/constants/Constants';

const DashboardLegalEntity: React.FC = () => {
  return (
    <Container>
      <SearchFilters />
      <Title>Юридические лица</Title>
      <MainInfo legal_entity={EntityType.LEGAl_ENTITY} />
      <ChartsContainer>
        <LineChartYears legal_entity={EntityType.LEGAl_ENTITY} />
        <ColumnChartMonth legal_entity={EntityType.LEGAl_ENTITY} />
      </ChartsContainer>
      <TypeActivities legal_entity={EntityType.LEGAl_ENTITY} />
      <CurrentSubjectsByAge legal_entity={EntityType.LEGAl_ENTITY} />
      <DetailedInformationCompany legal_entity={EntityType.LEGAl_ENTITY} />
      <LiquidatedMainInfo legal_entity={EntityType.LEGAl_ENTITY} />
      <ChartsContainer>
        <LineChartLiquidatedYears legal_entity={EntityType.LEGAl_ENTITY} />
        <ColumnChartLiquidatedMonth legal_entity={EntityType.LEGAl_ENTITY} />
      </ChartsContainer>
    </Container>
  );
};

export default DashboardLegalEntity;

const Container = styled.div`
  flex-grow: 1;
`;

const ChartsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;

  @media only screen and (max-width: 1800px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 700;
`;
