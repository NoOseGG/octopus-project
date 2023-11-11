import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetCurrentByAgeLessThen1 } from '@app/store/slices/legalEntityDashboard/currentByAge/lessThen1Slice';

const LessThen1: React.FC = () => {
  const { age } = useAppSelector((state) => state.currentByAge.lessThen1);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCurrentByAgeLessThen1({ filters }));
  }, [dispatch, filters]);

  return (
    <Block>
      <Title>менее года</Title>
      <Content>{age}</Content>
    </Block>
  );
};

export default LessThen1;
