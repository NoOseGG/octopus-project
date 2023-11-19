import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { doGetTotalCountCreatedLastQuarter } from '@app/store/slices/legalEntityDashboard/mainInfo/created/createdQuarterSlice';
import { Skeleton } from 'antd';

const CountQuarter: React.FC = () => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const { count, loading } = useAppSelector((state) => state.mainInfo.createdQuarter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountCreatedLastQuarter({ filters }));
  }, [dispatch, filters]);

  return (
    <>
      {!filters.isDate && (
        <>
          {loading ? (
            <Skeleton style={{ padding: 5 }} active />
          ) : (
            <Block>
              <Title>Общее количество созданных компаний</Title>
              <Content>{count}</Content>
            </Block>
          )}
        </>
      )}
    </>
  );
};

export default CountQuarter;
