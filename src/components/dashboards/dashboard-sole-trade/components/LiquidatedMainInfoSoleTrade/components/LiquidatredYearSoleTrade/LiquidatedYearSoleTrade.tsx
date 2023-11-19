import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content, Percent } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { doGetTotalCountLiquidatedSoleTradeLastYear } from '@app/store/slices/soleTradeDashboard/mainInfo/liquidated/liquidatedSoleTradeYearSlice';

const LiquidatedYearSoleTrade: React.FC = () => {
  const filters = useAppSelector((state) => state.searchFilters.filters);

  const { count } = useAppSelector((state) => state.liquidatedMainInfoSoleTrade.liquidatedYearSoleTrade);
  const { percent } = useAppSelector((state) => state.liquidatedMainInfoSoleTrade.liquidatedPercentSoleTrade);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountLiquidatedSoleTradeLastYear({ filters }));
  }, [dispatch, filters]);

  return (
    <>
      {!filters.isDate && (
        <Block>
          <Title>Количество ликвидированных ИП (год)</Title>
          <Content>
            {count} <Percent number={percent}>({percent}%)</Percent>
          </Content>
        </Block>
      )}
    </>
  );
};

export default LiquidatedYearSoleTrade;
