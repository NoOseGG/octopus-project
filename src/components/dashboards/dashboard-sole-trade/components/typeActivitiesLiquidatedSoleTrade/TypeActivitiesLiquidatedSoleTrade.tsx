import React from 'react';
import styled from 'styled-components';
import { mediaMax } from '@app/styles/themes/constants';
import { useAppSelector } from '@app/hooks/reduxHooks';
import TypeActivitiesLiquidatedSoleTradeAll from '@app/components/dashboards/dashboard-sole-trade/components/typeActivitiesLiquidatedSoleTrade/TypeActivitiesLiquidatedSoleTradeAll/TypeActivitiesLiquidatedSoleTradeAll';
import TypeActivitiesLiquidatedSoleTradeYear from '@app/components/dashboards/dashboard-sole-trade/components/typeActivitiesLiquidatedSoleTrade/TypeActivitiesLiquidatedSoleTradeYear/TypeActivitiesLiquidatedSoleTradeYear';
import TypeActivitiesLiquidatedSoleTradeMonth from '@app/components/dashboards/dashboard-sole-trade/components/typeActivitiesLiquidatedSoleTrade/TypeActivitiesLiquidatedSoleTradeMonth/TypeActivitiesLiquidatedSoleTradeMonth';
import TypeActivitiesLiquidatedSoleTradeQuarter from '@app/components/dashboards/dashboard-sole-trade/components/typeActivitiesLiquidatedSoleTrade/TypeActivitiesLiquidatedSoleTradeQuarter/TypeActivitiesLiquidatedSoleTradeQuarter';

const TypeActivities: React.FC = () => {
  const { isDate, isLegalEntity } = useAppSelector((state) => state.searchFilters.filters);

  return (
    <div>
      {isDate && isLegalEntity ? (
        <TypeActivitiesLiquidatedSoleTradeAll />
      ) : (
        <>
          <ContainerTypeActivities>
            <TypeActivitiesLiquidatedSoleTradeYear />
            <TypeActivitiesLiquidatedSoleTradeQuarter />
            <TypeActivitiesLiquidatedSoleTradeMonth />
          </ContainerTypeActivities>
          <TypeActivitiesLiquidatedSoleTradeAll />
        </>
      )}
    </div>
  );
};

export default TypeActivities;

const ContainerTypeActivities = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media only screen and ${mediaMax.lg} {
    display: flex;
    flex-direction: column;
  }
`;
