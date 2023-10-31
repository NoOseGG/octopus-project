import React from 'react';
import styled from 'styled-components';
import SettlementFilter from '@app/components/dashboards/dashboard/components/SearchFilters/components/SettlementFilter/SettlementFilter';
import DistrictFilter from '@app/components/dashboards/dashboard/components/SearchFilters/components/DistrictFilter/DistrictFilter';
import RegionFilter from '@app/components/dashboards/dashboard/components/SearchFilters/components/RegionFilter/RegionFilter';

const SearchFilters: React.FC = () => {
  return (
    <Container>
      <SettlementFilter />
      <RegionFilter />
      <DistrictFilter />
      {/*<Search placeholder="Район" />*/}
      {/*<Search placeholder="Область" />*/}
      {/*<Search placeholder="ОКЭД" />*/}
      {/*<Search placeholder="Код ОКЭД" />*/}
    </Container>
  );
};

export default SearchFilters;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;
`;
