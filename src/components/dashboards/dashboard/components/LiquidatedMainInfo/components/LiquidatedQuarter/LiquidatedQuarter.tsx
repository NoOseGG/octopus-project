import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { doGetTotalCountLiquidatedLastQuarter } from '@app/store/slices/legalEntityDashboard/mainInfo/liquidated/liquidatedQuarterSlice';
import { Skeleton } from 'antd';

const LiquidatedQuarter: React.FC = () => {
  const filters = useAppSelector((state) => state.searchFilters.filters);

  const { count, loading } = useAppSelector((state) => state.liquidatedMainInfo.liquidatedQuarter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountLiquidatedLastQuarter({ filters }));
  }, [dispatch, filters]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} active />
      ) : (
        <>
          {!filters.isDate && (
            <Block>
              <Title>Количество ликвидированных компаний (квартал)</Title>
              <Content>{count}</Content>
            </Block>
          )}
        </>
      )}
    </>
  );
};

export default LiquidatedQuarter;
