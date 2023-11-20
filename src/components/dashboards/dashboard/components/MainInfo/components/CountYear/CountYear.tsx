import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content, Percent } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { doGetCountCreatedYear } from '@app/store/slices/legalEntityDashboard/mainInfo/created/createdYearSlice';
import { Skeleton } from 'antd';
import {
  COUNT_YEAR_TYPE,
  CountYearProps,
  getStateForCountYear,
  getStateForPercent,
  getTitleForCountYear,
} from '@app/components/dashboards/dashboard/components/MainInfo/components/CountYear/CountYearTypes';
import { doGetCountLiquidatedYear } from '@app/store/slices/legalEntityDashboard/mainInfo/liquidated/liquidatedYearSlice';
import { doGetCountCreatedYearSoleTrade } from '@app/store/slices/soleTradeDashboard/mainInfo/created/createdSoleTradeYearSlice';
import { doGetCountLiquidatedYearSoleTrade } from '@app/store/slices/soleTradeDashboard/mainInfo/liquidated/liquidatedSoleTradeYearSlice';
import { doCalculateCreatedPercent } from '@app/store/slices/legalEntityDashboard/mainInfo/created/createdPercentSlice';
import { doCalculateLiquidatedPercent } from '@app/store/slices/legalEntityDashboard/mainInfo/liquidated/liquidatedPercentSlice';
import { doCalculateCreatedPercentYearSoleTrade } from '@app/store/slices/soleTradeDashboard/mainInfo/created/createdPercentSoleTradeSlice';
import { doCalculateLiquidatedPercentSoleTradeYear } from '@app/store/slices/soleTradeDashboard/mainInfo/liquidated/liquidatedPercentSoleTradeSlice';
import { doGetCountBankruptedYear } from '@app/store/slices/legalEntityDashboard/mainInfo/bankrupt/bankruptedYearSlice';
import { doCalculateBankruptedPercent } from '@app/store/slices/legalEntityDashboard/mainInfo/bankrupt/bankruptedPercentSlice';

const CountYear: React.FC<CountYearProps> = ({ countYear, percentYear }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();
  const dynamicStateYear = useAppSelector((state) => getStateForCountYear(state, countYear));
  const count = dynamicStateYear?.count;
  const loading = dynamicStateYear?.loading;

  const dynamicStatePercent = useAppSelector((state) => getStateForPercent(state, percentYear));
  const percent = dynamicStatePercent.percent;

  const getData = useCallback(
    (countYear) => {
      switch (countYear) {
        case COUNT_YEAR_TYPE.LE_CREATED_YEAR:
          dispatch(doGetCountCreatedYear({ filters }));
          dispatch(doCalculateCreatedPercent({ filters }));
          break;
        case COUNT_YEAR_TYPE.LE_LIQUIDATED_YEAR:
          dispatch(doGetCountLiquidatedYear({ filters }));
          dispatch(doCalculateLiquidatedPercent({ filters }));
          break;
        case COUNT_YEAR_TYPE.LE_BANKRUPTED_YEAR:
          dispatch(doGetCountBankruptedYear({ filters }));
          dispatch(doCalculateBankruptedPercent({ filters }));
          break;

        case COUNT_YEAR_TYPE.ST_CREATED_YEAR:
          dispatch(doGetCountCreatedYearSoleTrade({ filters }));
          dispatch(doCalculateCreatedPercentYearSoleTrade({ filters }));
          break;
        case COUNT_YEAR_TYPE.ST_LIQUIDATE_YEAR:
          dispatch(doGetCountLiquidatedYearSoleTrade({ filters }));
          dispatch(doCalculateLiquidatedPercentSoleTradeYear({ filters }));
          break;
      }
    },
    [dispatch, filters],
  );

  useEffect(() => {
    getData(countYear);
  }, [getData]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} active />
      ) : (
        <>
          {!filters.isDate && (
            <Block>
              <Title>{getTitleForCountYear(countYear)}</Title>
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
