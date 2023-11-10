import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { DashboardProps } from '@app/components/dashboards/dashboard/DashboardTypes';
import {
  Block,
  Title,
  Content,
} from '@app/components/dashboards/dashboard/components/CurrentSubjectsByAge/CurrentSubjectsByAgeStyle';
import { doGetCurrentByAgeFrom5To10 } from '@app/store/slices/legalEntityDashboard/currentByAge/from5To10Slice';

const From5To10: React.FC<DashboardProps> = ({ legal_entity }) => {
  const { age, loading } = useAppSelector((state) => state.currentByAge.from5To10);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCurrentByAgeFrom5To10({ filters, legal_entity }));
  }, [dispatch, filters, legal_entity]);

  return (
    <Block>
      <Title>от 5 до 10 лет</Title>
      <Content>{age}</Content>
    </Block>
  );
};

export default From5To10;
