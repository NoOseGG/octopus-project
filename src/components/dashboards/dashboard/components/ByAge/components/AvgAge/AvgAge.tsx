import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import {
  Title,
  Content,
  AverageAgeContainer,
} from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetCurrentByAgeAvgAge } from '@app/store/slices/legalEntityDashboard/byAge/current/avgAgeSlice';
import {
  AVG_AGE_TYPES,
  AvgAgeProps,
  getStateForAvgAge,
  getTitleForAvgAge,
} from '@app/components/dashboards/dashboard/components/ByAge/components/AvgAge/AvgAgeTypes';
import { doGetCurrentByAgeAvgAgeSoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/current/avgAgeSoleTradeSlice';

const AvgAge: React.FC<AvgAgeProps> = ({ avgAge }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();
  const dynamicState = useAppSelector((state) => getStateForAvgAge(state, avgAge));
  const count = dynamicState?.count;

  const getData = useCallback(
    (avgAge) => {
      switch (avgAge) {
        case AVG_AGE_TYPES.LE_CURRENT:
          dispatch(doGetCurrentByAgeAvgAge({ filters }));
          break;
        case AVG_AGE_TYPES.ST_CURRENT:
          dispatch(doGetCurrentByAgeAvgAgeSoleTrade({ filters }));
          break;
      }
    },
    [dispatch, filters],
  );

  useEffect(() => {
    getData(avgAge);
  }, [getData, avgAge]);

  useEffect(() => {
    dispatch(doGetCurrentByAgeAvgAge({ filters }));
  }, [dispatch, filters]);

  return (
    <AverageAgeContainer>
      <Title>{getTitleForAvgAge(avgAge)}</Title>
      <Content>{count?.toFixed(1)}</Content>
    </AverageAgeContainer>
  );
};

export default AvgAge;
