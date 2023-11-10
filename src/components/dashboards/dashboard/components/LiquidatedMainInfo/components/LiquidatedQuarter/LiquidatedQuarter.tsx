import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import {
  Block,
  Title,
  Content,
} from '@app/components/dashboards/dashboard/components/LiquidatedMainInfo/LiquidatedMainInfoStyle';
import { doGetTotalCountLiquidatedLastQuarter } from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo/liquidatedQuarterSlice';

const LiquidatedQuarter: React.FC = () => {
  const filters = useAppSelector((state) => state.searchFilters.filters);

  const { count } = useAppSelector((state) => state.liquidatedMainInfo.liquidatedQuarter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountLiquidatedLastQuarter({ filters }));
  }, [dispatch, filters]);

  return (
    <>
      {!filters.isDate && (
        <Block>
          <Title>Количество ликвидированных компаний (квартал)</Title>
          <Content>{count}</Content>
        </Block>
      )}
    </>
  );
};

export default LiquidatedQuarter;
