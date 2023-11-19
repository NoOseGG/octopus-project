import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content, Percent } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { doGetTotalCountLiquidatedLastYear } from '@app/store/slices/legalEntityDashboard/mainInfo/liquidated/liquidatedYearSlice';
import { Skeleton } from 'antd';

const LiquidatedYear: React.FC = () => {
  const filters = useAppSelector((state) => state.searchFilters.filters);

  const { count, loading } = useAppSelector((state) => state.liquidatedMainInfo.liquidatedYear);
  const { percent } = useAppSelector((state) => state.liquidatedMainInfo.liquidatedPercent);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountLiquidatedLastYear({ filters }));
  }, [dispatch, filters]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} active />
      ) : (
        <>
          {!filters.isDate && (
            <Block>
              <Title>Количество ликвидированных компаний (год)</Title>
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

export default LiquidatedYear;
