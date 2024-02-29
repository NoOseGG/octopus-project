import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetCurrentByAgeMoreThen20 } from '@app/store/slices/legalEntityDashboard/byAge/current/moreThen20Slice';
import { formatNumberWithCommas } from '@app/utils/utils';

const MoreThen20: React.FC = () => {
  const { age } = useAppSelector((state) => state.currentByAge.moreThen20);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCurrentByAgeMoreThen20({ filters }));
  }, [dispatch, filters]);

  return (
    <Block>
      <Title>20 лет и более</Title>
      <Content>{formatNumberWithCommas(age)}</Content>
    </Block>
  );
};

export default MoreThen20;
