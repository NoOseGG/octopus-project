import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { DashboardProps } from '@app/components/dashboards/dashboard/DashboardTypes';
import {
  Block,
  Title,
  Content,
} from '@app/components/dashboards/dashboard/components/CurrentSubjectsByAge/CurrentSubjectsByAgeStyle';
import { doGetCurrentByAgeMoreThen20 } from '@app/store/slices/legalEntityDashboard/currentByAge/moreThen20Slice';

const MoreThen20: React.FC<DashboardProps> = ({ legal_entity }) => {
  const { age } = useAppSelector((state) => state.currentByAge.moreThen20);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCurrentByAgeMoreThen20({ filters, legal_entity }));
  }, [dispatch, filters, legal_entity]);

  return (
    <Block>
      <Title>20 лет и более</Title>
      <Content>{age}</Content>
    </Block>
  );
};

export default MoreThen20;
