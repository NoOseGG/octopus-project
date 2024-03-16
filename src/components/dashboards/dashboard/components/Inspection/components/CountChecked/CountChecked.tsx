import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Title, Content } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { Skeleton } from 'antd';
import { COUNT_YEAR_TYPE } from '@app/components/dashboards/dashboard/components/MainInfo/components/CountYear/CountYearTypes';
import {
  CountCheckedProps,
  getStateForCountChecked,
  getTitleForCountChecked,
} from '@app/components/dashboards/dashboard/components/Inspection/components/CountChecked/CountCheckedTypes';
import { doGetTotalCountChecked } from '@app/store/slices/legalEntityDashboard/mainInfo/checked/checkedAllSlice';
import { doGetTotalCountCheckedLiquidated } from '@app/store/slices/legalEntityDashboard/mainInfo/checked/checkedLiquidatedSlice';
import { doGetTotalCountCheckedBankrupted } from '@app/store/slices/legalEntityDashboard/mainInfo/checked/checkedBankruptedSlice';
import { doGetTotalCountCheckedSoleTrade } from '@app/store/slices/soleTradeDashboard/mainInfo/checked/checkedAllSoleTradeSlice';
import { doGetTotalCountCheckedLiquidatedSoleTrade } from '@app/store/slices/soleTradeDashboard/mainInfo/checked/checkedLiquidatedSoleTradeSlice';
import { doGetTotalCountCheckedBankruptedSoleTrade } from '@app/store/slices/soleTradeDashboard/mainInfo/checked/checkedBankruptedSoleTradeSlice';
import { formatNumberWithCommas } from '@app/utils/utils';

const CountYear: React.FC<CountCheckedProps> = ({ countChecked }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();
  const dynamicStateYear = useAppSelector((state) => getStateForCountChecked(state, countChecked));
  const count = dynamicStateYear?.count;
  const loading = dynamicStateYear?.loading;

  const getData = useCallback(
    (countChecked) => {
      switch (countChecked) {
        case COUNT_YEAR_TYPE.LE_CREATED_YEAR:
          dispatch(doGetTotalCountChecked({ filters }));
          break;
        case COUNT_YEAR_TYPE.LE_LIQUIDATED_YEAR:
          dispatch(doGetTotalCountCheckedLiquidated({ filters }));
          break;
        case COUNT_YEAR_TYPE.LE_BANKRUPTED_YEAR:
          dispatch(doGetTotalCountCheckedBankrupted({ filters }));
          break;

        // Sole Trade

        case COUNT_YEAR_TYPE.ST_CREATED_YEAR:
          dispatch(doGetTotalCountCheckedSoleTrade({ filters }));
          break;
        case COUNT_YEAR_TYPE.ST_LIQUIDATED_YEAR:
          dispatch(doGetTotalCountCheckedLiquidatedSoleTrade({ filters }));
          break;
        case COUNT_YEAR_TYPE.ST_BANKRUPTED_YEAR:
          dispatch(doGetTotalCountCheckedBankruptedSoleTrade({ filters }));
          break;
      }
    },
    [dispatch, filters],
  );

  useEffect(() => {
    getData(countChecked);
  }, [getData, countChecked]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} active />
      ) : (
        <>
          {!filters.isDate && (
            <Block>
              <Title>{getTitleForCountChecked(countChecked)}</Title>
              <Content>{formatNumberWithCommas(count)}</Content>
            </Block>
          )}
        </>
      )}
    </>
  );
};

export default CountYear;
