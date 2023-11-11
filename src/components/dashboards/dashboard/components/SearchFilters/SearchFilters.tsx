import React from 'react';
import styled from 'styled-components';
import SettlementFilter from '@app/components/dashboards/dashboard/components/SearchFilters/components/SettlementFilter/SettlementFilter';
import DistrictFilter from '@app/components/dashboards/dashboard/components/SearchFilters/components/DistrictFilter/DistrictFilter';
import RegionFilter from '@app/components/dashboards/dashboard/components/SearchFilters/components/RegionFilter/RegionFilter';
import ResetFilters from '@app/components/dashboards/dashboard/components/SearchFilters/components/ResetFilters/ResetFilters';
import DateFilter from '@app/components/dashboards/dashboard/components/SearchFilters/components/DateFilter/DateFilter';
import TypeActivityFilter from '@app/components/dashboards/dashboard/components/SearchFilters/components/TypeActivityFilter/TypeActivityFilter';
import CodeActivityFilter from '@app/components/dashboards/dashboard/components/SearchFilters/components/CodeActivityFilter/CodeActivityFilter';

const SearchFilters: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Container>
        <Title>Фильтрация</Title>
        <SettlementFilter />
        <RegionFilter />
        <DistrictFilter />
        <TypeActivityFilter />
        <CodeActivityFilter />
        <DateFilter />
        <ResetFilters />
      </Container>
    </div>
  );
};

export default SearchFilters;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const Container = styled.div`
  width: 250px;
  padding: 10px;
  height: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 1px solid #e8e4e4;
`;
