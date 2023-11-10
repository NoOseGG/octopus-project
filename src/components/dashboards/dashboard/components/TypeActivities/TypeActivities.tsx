import React from 'react';
import styled from 'styled-components';
import { mediaMax } from '@app/styles/themes/constants';
import TypeActivitiesYear from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesYear/TypeActivitiesYear';
import TypeActivitiesQuarter from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesQuarter/TypeActivitiesQuarter';
import TypeActivitiesMonth from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesMonth/TypeActivitiesMonth';
import { useAppSelector } from '@app/hooks/reduxHooks';
import TypeActivitiesAll from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesAll/TypeActivitiesAll';
import { DashboardProps } from '@app/components/dashboards/dashboard/DashboardTypes';

const TypeActivities: React.FC<DashboardProps> = ({ legal_entity }) => {
  const { isDate, isLegalEntity } = useAppSelector((state) => state.searchFilters.filters);

  return (
    <div>
      {isDate && isLegalEntity ? (
        <TypeActivitiesAll legal_entity={legal_entity} />
      ) : (
        <>
          <ContainerTypeActivities>
            <TypeActivitiesYear legal_entity={legal_entity} />
            <TypeActivitiesQuarter legal_entity={legal_entity} />
            <TypeActivitiesMonth legal_entity={legal_entity} />
          </ContainerTypeActivities>
          <TypeActivitiesAll legal_entity={legal_entity} />
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
