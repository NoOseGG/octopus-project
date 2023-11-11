import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetCurrentByAgeFrom5To10 } from '@app/store/slices/legalEntityDashboard/currentByAge/from5To10Slice';

const From5To10: React.FC = () => {
  const { age } = useAppSelector((state) => state.currentByAge.from5To10);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCurrentByAgeFrom5To10({ filters }));
  }, [dispatch, filters]);

  return (
    <Block>
      <Title>от 5 до 10 лет</Title>
      <Content>{age}</Content>
    </Block>
  );
};

export default From5To10;
