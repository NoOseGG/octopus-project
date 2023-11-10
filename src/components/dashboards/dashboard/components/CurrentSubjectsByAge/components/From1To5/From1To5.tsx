import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { DashboardProps } from '@app/components/dashboards/dashboard/DashboardTypes';
import {
  Block,
  Title,
  Content,
} from '@app/components/dashboards/dashboard/components/CurrentSubjectsByAge/CurrentSubjectsByAgeStyle';
import { doGetCurrentByAgeFrom1To5 } from '@app/store/slices/legalEntityDashboard/currentByAge/from1To5Slice';

const From1To5: React.FC<DashboardProps> = ({ legal_entity }) => {
  const { age, loading } = useAppSelector((state) => state.currentByAge.from1To5);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCurrentByAgeFrom1To5({ filters, legal_entity }));
  }, [dispatch, filters, legal_entity]);

  return (
    <Block>
      <Title>от 1 до 5 лет</Title>
      <Content>{age}</Content>
    </Block>
  );
};

export default From1To5;
