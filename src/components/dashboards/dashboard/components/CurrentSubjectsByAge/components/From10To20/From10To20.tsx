import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { doGetCurrentByAgeFrom10To20 } from '@app/store/slices/legalEntityDashboard/byAge/current/from10To20Slice';
import { formatNumberWithCommas } from '@app/utils/utils';

const From10To20: React.FC = () => {
  const { age } = useAppSelector((state) => state.currentByAge.from10To20);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetCurrentByAgeFrom10To20({ filters }));
  }, [dispatch, filters]);

  return (
    <Block>
      <Title>от 10 до 20 лет</Title>
      <Content>{formatNumberWithCommas(age)}</Content>
    </Block>
  );
};

export default From10To20;
