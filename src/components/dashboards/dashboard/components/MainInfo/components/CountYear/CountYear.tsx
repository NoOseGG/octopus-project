import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content, Percent } from '@app/components/dashboards/dashboard/components/MainInfo/MainInfoStyle';
import { doGetTotalCountCreatedLastYear } from '@app/store/slices/legalEntityDashboard/mainInfo/createdYearSlice';
import { Skeleton } from 'antd';
import { getEntityName } from '@app/utils/utils';
import { DashboardProps } from '@app/components/dashboards/dashboard/DashboardTypes';

const CountYear: React.FC<DashboardProps> = ({ legal_entity }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const entity = getEntityName(legal_entity);
  const { count, loading } = useAppSelector((state) => state.mainInfo.createdYear);
  const percent = useAppSelector((state) => state.mainInfo.calculatePercent.percent);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountCreatedLastYear({ filters, legal_entity }));
  }, [dispatch, filters, legal_entity]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} />
      ) : (
        <>
          {!filters.isDate && (
            <Block>
              <Title>Количество созданных {entity} (год)</Title>
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
