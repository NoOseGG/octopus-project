import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { DashboardProps } from '@app/components/dashboards/dashboard/DashboardTypes';
import {
  Block,
  Title,
  Content,
} from '@app/components/dashboards/dashboard/components/LiquidatedMainInfo/LiquidatedMainInfoStyle';
import { getEntityName } from '@app/utils/utils';
import { doGetTotalCountLiquidatedLastQuarter } from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo/liquidatedQuarterSlice';

const LiquidatedQuarter: React.FC<DashboardProps> = ({ legal_entity }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const entity = getEntityName(legal_entity);

  const { count } = useAppSelector((state) => state.liquidatedMainInfo.liquidatedQuarter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountLiquidatedLastQuarter({ filters, legal_entity }));
  }, [dispatch, filters, legal_entity]);

  return (
    <>
      {!filters.isDate && (
        <Block>
          <Title>Количество ликвидированных {entity} (квартал)</Title>
          <Content>{count}</Content>
        </Block>
      )}
    </>
  );
};

export default LiquidatedQuarter;
