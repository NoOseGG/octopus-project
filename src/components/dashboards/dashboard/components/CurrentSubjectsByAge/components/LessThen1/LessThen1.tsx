import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { DashboardProps } from '@app/components/dashboards/dashboard/DashboardTypes';
import {
  Block,
  Title,
  Content,
} from '@app/components/dashboards/dashboard/components/CurrentSubjectsByAge/CurrentSubjectsByAgeStyle';
import { doGetCurrentByAgeLessThen1 } from '@app/store/slices/legalEntityDashboard/currentByAge/lessThen1Slice';

const LessThen1: React.FC<DashboardProps> = ({ legal_entity }) => {
  const { age } = useAppSelector((state) => state.currentByAge.lessThen1);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCurrentByAgeLessThen1({ filters, legal_entity }));
  }, [dispatch, filters, legal_entity]);

  return (
    <Block>
      <Title>менее года</Title>
      <Content>{age}</Content>
    </Block>
  );
};

export default LessThen1;
