import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { ContainerTypeActivities } from '@app/components/dashboards/dashboard/styles/TypeActivitiesStyle';
import TypeActivity from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivity/TypeActivity';
import { TYPE_ACTIVITY_TYPE } from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivityTypes';

const TypeActivities: React.FC = () => {
  const { isDate, isLegalEntity } = useAppSelector((state) => state.searchFilters.filters);

  return (
    <div>
      {isDate && isLegalEntity ? (
        <TypeActivity typeActivity={TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_ALL} />
      ) : (
        <>
          <ContainerTypeActivities>
            <TypeActivity typeActivity={TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_YEAR} />
            <TypeActivity typeActivity={TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_QUARTER} />
            <TypeActivity typeActivity={TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_MONTH} />
          </ContainerTypeActivities>
          <TypeActivity typeActivity={TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_ALL} />
        </>
      )}
    </div>
  );
};

export default TypeActivities;
