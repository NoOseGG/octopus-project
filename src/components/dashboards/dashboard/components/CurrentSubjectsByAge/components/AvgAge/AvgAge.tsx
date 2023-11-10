import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { DashboardProps } from '@app/components/dashboards/dashboard/DashboardTypes';
import {
  Title,
  Content,
  AverageAgeContainer,
} from '@app/components/dashboards/dashboard/components/CurrentSubjectsByAge/CurrentSubjectsByAgeStyle';
import { doGetCurrentByAgeAvgAge } from '@app/store/slices/legalEntityDashboard/currentByAge/avgAgeSlice';

const AvgAge: React.FC<DashboardProps> = ({ legal_entity }) => {
  const avgAge = useAppSelector((state) => state.currentByAge.avgAge.count);

  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCurrentByAgeAvgAge({ filters, legal_entity }));
  }, [dispatch, filters, legal_entity]);

  return (
    <AverageAgeContainer>
      <Title>Средний возраст компаний</Title>
      <Content>{avgAge?.toFixed(1)}</Content>
    </AverageAgeContainer>
  );
};

export default AvgAge;
