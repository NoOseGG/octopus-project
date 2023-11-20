import React from 'react';
import styled from 'styled-components';
import { mediaMax } from '@app/styles/themes/constants';
import { useAppSelector } from '@app/hooks/reduxHooks';
import TypeActivity from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivity/TypeActivity';
import { TypeActivitiesProps } from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivitiesTypes';

const TypeActivities: React.FC<TypeActivitiesProps> = ({ all, year, quarter, month }) => {
  const { isDate, isLegalEntity } = useAppSelector((state) => state.searchFilters.filters);

  return (
    <div>
      {isDate && isLegalEntity ? (
        <TypeActivity typeActivity={all} />
      ) : (
        <>
          <ContainerTypeActivities>
            <TypeActivity typeActivity={year} />
            <TypeActivity typeActivity={quarter} />
            <TypeActivity typeActivity={month} />
          </ContainerTypeActivities>
          <TypeActivity typeActivity={all} />
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
