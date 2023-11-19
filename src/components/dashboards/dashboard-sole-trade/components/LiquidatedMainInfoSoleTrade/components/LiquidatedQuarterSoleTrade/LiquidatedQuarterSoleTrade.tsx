import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { doGetTotalCountLiquidatedSoleTradeLastQuarter } from '@app/store/slices/soleTradeDashboard/mainInfo/liquidated/liquidatedSoleTradeQuarterSlice';

const LiquidatedQuarterSoleTrade: React.FC = () => {
  const filters = useAppSelector((state) => state.searchFilters.filters);

  const { count } = useAppSelector((state) => state.liquidatedMainInfoSoleTrade.liquidatedQuarterSoleTrade);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountLiquidatedSoleTradeLastQuarter({ filters }));
  }, [dispatch, filters]);

  return (
    <>
      {!filters.isDate && (
        <Block>
          <Title>Количество ликвидированных ИП (квартал)</Title>
          <Content>{count}</Content>
        </Block>
      )}
    </>
  );
};

export default LiquidatedQuarterSoleTrade;
