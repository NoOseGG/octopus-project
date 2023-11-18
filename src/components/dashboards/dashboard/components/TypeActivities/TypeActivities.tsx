import React from 'react';
import styled from 'styled-components';
import { mediaMax } from '@app/styles/themes/constants';
import { useAppSelector } from '@app/hooks/reduxHooks';
import TypeActivity from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivity/TypeActivity';
import { TYPE_ACTIVITY_TYPE } from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivityTypes';

const TypeActivities: React.FC = () => {
  const { isDate, isLegalEntity } = useAppSelector((state) => state.searchFilters.filters);

  return (
    <div>
      {isDate && isLegalEntity ? (
        <TypeActivity typeActivity={TYPE_ACTIVITY_TYPE.LE_CREATED_ALL} />
      ) : (
        <>
          <ContainerTypeActivities>
            <TypeActivity typeActivity={TYPE_ACTIVITY_TYPE.LE_CREATED_YEAR} />
            <TypeActivity typeActivity={TYPE_ACTIVITY_TYPE.LE_CREATED_QUARTER} />
            <TypeActivity typeActivity={TYPE_ACTIVITY_TYPE.LE_CREATED_MONTH} />
          </ContainerTypeActivities>
          <TypeActivity typeActivity={TYPE_ACTIVITY_TYPE.LE_CREATED_ALL} />
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
