import React from 'react';
import styled from 'styled-components';
import { mediaMax } from '@app/styles/themes/constants';
import { useAppSelector } from '@app/hooks/reduxHooks';
import TypeActivitiesLiquidatedYear from '@app/components/dashboards/dashboard/components/TypeActivitiesLiquidated/TypeActivitiesLiquidatedYear/TypeActivitiesLiquidatedYear';
import TypeActivitiesLiquidatedQuarter from '@app/components/dashboards/dashboard/components/TypeActivitiesLiquidated/TypeActivitiesLiquidatedQuarter/TypeActivitiesLiquidatedQuarter';
import TypeActivitiesLiquidatedAll from '@app/components/dashboards/dashboard/components/TypeActivitiesLiquidated/TypeActivitiesLiquidatedAll/TypeActivitiesLiquidatedAll';
import TypeActivitiesLiquidatedMonth from '@app/components/dashboards/dashboard/components/TypeActivitiesLiquidated/TypeActivitiesLiquidatedMonth/TypeActivitiesLiquidatedMonth';

const TypeActivities: React.FC = () => {
  const { isDate, isLegalEntity } = useAppSelector((state) => state.searchFilters.filters);

  return (
    <div>
      {isDate && isLegalEntity ? (
        <TypeActivitiesLiquidatedAll />
      ) : (
        <>
          <ContainerTypeActivities>
            <TypeActivitiesLiquidatedYear />
            <TypeActivitiesLiquidatedQuarter />
            <TypeActivitiesLiquidatedMonth />
          </ContainerTypeActivities>
          <TypeActivitiesLiquidatedAll />
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
