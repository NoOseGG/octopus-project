import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import {
  Block,
  Title,
  Content,
} from '@app/components/dashboards/dashboard/components/LiquidatedMainInfo/LiquidatedMainInfoStyle';
import { doGetTotalCountLiquidated } from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo/liquidatedAllSlice';

const LiquidatedAll: React.FC = () => {
  const filters = useAppSelector((state) => state.searchFilters.filters);

  const { count } = useAppSelector((state) => state.liquidatedMainInfo.liquidatedAll);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountLiquidated({ filters }));
  }, [dispatch, filters]);

  return (
    <Block>
      <Title>Общее количество ликвидированных компаний</Title>
      <Content>{count}</Content>
    </Block>
  );
};

export default LiquidatedAll;
