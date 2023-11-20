import React from 'react';
import { ContainerTypeActivities } from '@app/components/dashboards/dashboard/styles/TypeActivitiesStyle';
import { useAppSelector } from '@app/hooks/reduxHooks';
import TypeActivity from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivity/TypeActivity';
import { TYPE_ACTIVITY_TYPE } from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivity/TypeActivityTypes';

const TypeActivitiesSoleTrade: React.FC = () => {
  const { isDate, isLegalEntity } = useAppSelector((state) => state.searchFilters.filters);

  return (
    <div>
      {isDate && isLegalEntity ? (
        <TypeActivity typeActivity={TYPE_ACTIVITY_TYPE.ST_CREATED_ALL} />
      ) : (
        <>
          <ContainerTypeActivities>
            <TypeActivity typeActivity={TYPE_ACTIVITY_TYPE.ST_CREATED_YEAR} />
            <TypeActivity typeActivity={TYPE_ACTIVITY_TYPE.ST_CREATED_QUARTER} />
            <TypeActivity typeActivity={TYPE_ACTIVITY_TYPE.ST_CREATED_MONTH} />
          </ContainerTypeActivities>
          <TypeActivity typeActivity={TYPE_ACTIVITY_TYPE.ST_CREATED_ALL} />
        </>
      )}
    </div>
  );
};

export default TypeActivitiesSoleTrade;
