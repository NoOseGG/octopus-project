import React from 'react';
import styled from 'styled-components';
import { mediaMax } from '@app/styles/themes/constants';
import { useAppSelector } from '@app/hooks/reduxHooks';
import TypeActivitiesAllSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/typeActivitiesSoleTrade/TypeActivitiesAllSoleTrade/TypeActivitiesAllSoleTrade';
import TypeActivitiesYearSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/typeActivitiesSoleTrade/TypeActivitiesYearSoleTrade/TypeActivitiesYearSoleTrade';
import TypeActivitiesQuarterSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/typeActivitiesSoleTrade/TypeActivitiesQuarterSoleTrade/TypeActivitiesQuarterSoleTrade';
import TypeActivitiesMonthSoleTrade from '@app/components/dashboards/dashboard-sole-trade/components/typeActivitiesSoleTrade/TypeActivitiesMonthSoleTrade/TypeActivitiesMonthSoleTrade';

const TypeActivitiesSoleTrade: React.FC = () => {
  const { isDate, isLegalEntity } = useAppSelector((state) => state.searchFilters.filters);

  return (
    <div>
      {isDate && isLegalEntity ? (
        <TypeActivitiesAllSoleTrade />
      ) : (
        <>
          <ContainerTypeActivities>
            <TypeActivitiesYearSoleTrade />
            <TypeActivitiesQuarterSoleTrade />
            <TypeActivitiesMonthSoleTrade />
          </ContainerTypeActivities>
          <TypeActivitiesAllSoleTrade />
        </>
      )}
    </div>
  );
};

export default TypeActivitiesSoleTrade;

const ContainerTypeActivities = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media only screen and ${mediaMax.lg} {
    display: flex;
    flex-direction: column;
  }
`;
