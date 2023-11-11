import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content, Percent } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { doGetTotalCountCreatedLastYear } from '@app/store/slices/legalEntityDashboard/mainInfo/createdYearSlice';
import { Skeleton } from 'antd';

const CountYear: React.FC = () => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const { count, loading } = useAppSelector((state) => state.mainInfo.createdYear);
  const percent = useAppSelector((state) => state.mainInfo.calculatePercent.percent);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountCreatedLastYear({ filters }));
  }, [dispatch, filters]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} active />
      ) : (
        <>
          {!filters.isDate && (
            <Block>
              <Title>Количество созданных компаний (год)</Title>
              <Content>
                {count} <Percent number={percent}>({percent}%)</Percent>
              </Content>
            </Block>
          )}
        </>
      )}
    </>
  );
};

export default CountYear;
