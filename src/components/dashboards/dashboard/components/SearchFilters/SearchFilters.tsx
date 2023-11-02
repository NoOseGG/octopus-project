import React from 'react';
import styled from 'styled-components';
import SettlementFilter from '@app/components/dashboards/dashboard/components/SearchFilters/components/SettlementFilter/SettlementFilter';
import DistrictFilter from '@app/components/dashboards/dashboard/components/SearchFilters/components/DistrictFilter/DistrictFilter';
import RegionFilter from '@app/components/dashboards/dashboard/components/SearchFilters/components/RegionFilter/RegionFilter';
import ResetFilters from '@app/components/dashboards/dashboard/components/SearchFilters/components/ResetFilters/ResetFilters';
import DateFilter from '@app/components/dashboards/dashboard/components/SearchFilters/components/DateFilter/DateFilter';

const SearchFilters: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Container>
        <SettlementFilter />
        <RegionFilter />
        <DistrictFilter />
        <ResetFilters />
      </Container>
      <DateFilter />
    </div>
  );
};

export default SearchFilters;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
`;
