import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import {
  Title,
  Content,
  AverageAgeContainer,
} from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetCurrentByAgeAvgAge } from '@app/store/slices/legalEntityDashboard/byAge/current/avgAgeSlice';

const LiquidatedAvgAge: React.FC = () => {
  const avgAge = useAppSelector((state) => state.liquidatedByAge.liquidateAvgAge.count);

  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCurrentByAgeAvgAge({ filters }));
  }, [dispatch, filters]);

  return (
    <AverageAgeContainer>
      <Title>Средний возраст компаний</Title>
      <Content>{avgAge?.toFixed(1)}</Content>
    </AverageAgeContainer>
  );
};

export default LiquidatedAvgAge;
