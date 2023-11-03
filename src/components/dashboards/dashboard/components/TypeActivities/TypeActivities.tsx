import React from 'react';
import styled from 'styled-components';
import { mediaMax } from '@app/styles/themes/constants';
import TypeActivitiesYear from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesYear/TypeActivitiesYear';
import TypeActivitiesQuarter from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesQurter/TypeActivitiesQuarter';
import TypeActivitiesMonth from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesMonth/TypeActivitiesMonth';
import { useAppSelector } from '@app/hooks/reduxHooks';
import TypeActivitiesAll from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesAll/TypeActivitiesAll';

const TypeActivities: React.FC = () => {
  const isDate = useAppSelector((state) => state.searchFilters.filters.isDate);

  return (
    <div>
      {isDate ? (
        <TypeActivitiesAll />
      ) : (
        <>
          <ContainerTypeActivities>
            <TypeActivitiesYear />
            <TypeActivitiesQuarter />
            <TypeActivitiesMonth />
          </ContainerTypeActivities>
          <TypeActivitiesAll />
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
