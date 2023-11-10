import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { DashboardProps } from '@app/components/dashboards/dashboard/DashboardTypes';
import {
  Block,
  Title,
  Content,
} from '@app/components/dashboards/dashboard/components/LiquidatedMainInfo/LiquidatedMainInfoStyle';
import { getEntityName } from '@app/utils/utils';
import { doGetTotalCountLiquidated } from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo/liquidatedAllSlice';

const LiquidatedAll: React.FC<DashboardProps> = ({ legal_entity }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const entity = getEntityName(legal_entity);
  const isDate = useAppSelector((state) => state.searchFilters.filters.isDate);

  const { count, loading } = useAppSelector((state) => state.liquidatedMainInfo.liquidatedAll);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountLiquidated({ filters, legal_entity }));
  }, [dispatch, filters, legal_entity]);

  return (
    <Block>
      <Title>Общее количество ликвидированных {entity}</Title>
      <Content>{count}</Content>
    </Block>
  );
};

export default LiquidatedAll;
