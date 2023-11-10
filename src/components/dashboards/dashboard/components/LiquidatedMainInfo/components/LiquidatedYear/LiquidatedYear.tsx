import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { DashboardProps } from '@app/components/dashboards/dashboard/DashboardTypes';
import {
  Block,
  Title,
  Content,
  Percent,
} from '@app/components/dashboards/dashboard/components/LiquidatedMainInfo/LiquidatedMainInfoStyle';
import { doGetTotalCountLiquidatedLastYear } from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo/liquidatedYearSlice';

const LiquidatedYear: React.FC<DashboardProps> = ({ legal_entity }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);

  const { count } = useAppSelector((state) => state.liquidatedMainInfo.liquidatedYear);
  const { percent } = useAppSelector((state) => state.liquidatedMainInfo.liquidatedPercent);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountLiquidatedLastYear({ filters, legal_entity }));
  }, [dispatch, filters, legal_entity]);

  return (
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
  );
};

export default LiquidatedYear;
