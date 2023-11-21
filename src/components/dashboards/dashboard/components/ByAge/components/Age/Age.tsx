import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Content, Title } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { Skeleton } from 'antd';
import {
  AGE_TYPES,
  AgeProps,
  getStateForAge,
  getTitleForAge,
} from '@app/components/dashboards/dashboard/components/ByAge/components/Age/AgeTypes';
import { doGetCurrentByAgeMoreThen20 } from '@app/store/slices/legalEntityDashboard/byAge/current/moreThen20Slice';
import { doGetCurrentByAgeFrom10To20 } from '@app/store/slices/legalEntityDashboard/byAge/current/from10To20Slice';
import { doGetCurrentByAgeFrom5To10 } from '@app/store/slices/legalEntityDashboard/byAge/current/from5To10Slice';
import { doGetCurrentByAgeFrom1To5 } from '@app/store/slices/legalEntityDashboard/byAge/current/from1To5Slice';
import { doGetCurrentByAgeLessThen1 } from '@app/store/slices/legalEntityDashboard/byAge/current/lessThen1Slice';
import { doGetLiquidatedByAgeMoreThen20 } from '@app/store/slices/legalEntityDashboard/byAge/liquidated/LiquidatedMoreThen20Slice';
import { doGetLiquidatedByAgeFrom10To20 } from '@app/store/slices/legalEntityDashboard/byAge/liquidated/LiquidatedFrom10To20Slice';
import { doGetLiquidatedByAgeFrom5To10 } from '@app/store/slices/legalEntityDashboard/byAge/liquidated/LiquidatedFrom5To10Slice';
import { doGetLiquidatedByAgeFrom1To5 } from '@app/store/slices/legalEntityDashboard/byAge/liquidated/LiquidatedFrom1To5Slice';
import { doGetLiquidatedByAgeLessThen1 } from '@app/store/slices/legalEntityDashboard/byAge/liquidated/LiquidatedLessThen1Slice';
import { doGetCurrentByAgeMoreThen20SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/current/moreThen20SoleTradeSlice';
import { doGetCurrentByAgeFrom10To20SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/current/from10To20SoleTradeSlice';
import { doGetCurrentByAgeFrom5To10SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/current/from5To10SoleTradeSlice';
import { doGetCurrentByAgeFrom1To5SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/current/from1To5SoleTradeSlice';
import { doGetCurrentByAgeLessThen1SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/current/lessThen1SoleTradeSlice';
import { doGetLiquidatedByAgeMoreThen20SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedMoreThen20SoleTradelice';
import { doGetLiquidatedByAgeFrom10To20SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedFrom10To20SoleTradeSlice';
import { doGetLiquidatedByAgeFrom5To10SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedFrom5To10SoleTradeSlice';
import { doGetLiquidatedByAgeFrom1To5SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedFrom1To5SoleTradeSlice';
import { doGetLiquidatedByAgeLessThen1SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/liquidated/LiquidatedLessThen1SoleTradeSlice';
import { doGetBankruptedByAgeMoreThen20 } from '@app/store/slices/legalEntityDashboard/byAge/bankrupted/bankruptedMoreThen20Slice';
import { doGetBankruptedByAgeFrom10To20 } from '@app/store/slices/legalEntityDashboard/byAge/bankrupted/bankruptedFrom10To20Slice';
import { doGetBankruptedByAgeFrom5To10 } from '@app/store/slices/legalEntityDashboard/byAge/bankrupted/bankruptedFrom5To10Slice';
import { doGetBankruptedByAgeLessThen1 } from '@app/store/slices/legalEntityDashboard/byAge/bankrupted/bankruptedLessThen1Slice';
import { doGetBankruptedByAgeFrom1To5 } from '@app/store/slices/legalEntityDashboard/byAge/bankrupted/bankruptedFrom1To5Slice';
import { doGetBankruptedByAgeMoreThen20SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/bankrupted/bankruptedMoreThen20SoleTradelice';
import { doGetBankruptedByAgeFrom10To20SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/bankrupted/bankruptedFrom10To20SoleTradeSlice';
import { doGetBankruptedByAgeFrom5To10SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/bankrupted/bankruptedFrom5To10SoleTradeSlice';
import { doGetBankruptedByAgeFrom1To5SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/bankrupted/bankruptedFrom1To5SoleTradeSlice';
import { doGetBankruptedByAgeLessThen1SoleTrade } from '@app/store/slices/soleTradeDashboard/byAge/bankrupted/bankruptedLessThen1SoleTradeSlice';

const Age: React.FC<AgeProps> = ({ age }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();
  const dynamicState = useAppSelector((state) => getStateForAge(state, age));
  const count = dynamicState?.age;
  const loading = dynamicState?.loading;

  const getData = useCallback(
    (age) => {
      switch (age) {
        case AGE_TYPES.LE_CURRENT_MORE_THEN_20:
          dispatch(doGetCurrentByAgeMoreThen20({ filters }));
          break;
        case AGE_TYPES.LE_CURRENT_FROM_10_TO_20:
          dispatch(doGetCurrentByAgeFrom10To20({ filters }));
          break;
        case AGE_TYPES.LE_CURRENT_FROM_5_TO_10:
          dispatch(doGetCurrentByAgeFrom5To10({ filters }));
          break;
        case AGE_TYPES.LE_CURRENT_FROM_1_TO_5:
          dispatch(doGetCurrentByAgeFrom1To5({ filters }));
          break;
        case AGE_TYPES.LE_CURRENT_LESS_THEN_1:
          dispatch(doGetCurrentByAgeLessThen1({ filters }));
          break;

        case AGE_TYPES.LE_LIQUIDATED_MORE_THEN_20:
          dispatch(doGetLiquidatedByAgeMoreThen20({ filters }));
          break;
        case AGE_TYPES.LE_LIQUIDATED_FROM_10_TO_20:
          dispatch(doGetLiquidatedByAgeFrom10To20({ filters }));
          break;
        case AGE_TYPES.LE_LIQUIDATED_FROM_5_TO_10:
          dispatch(doGetLiquidatedByAgeFrom5To10({ filters }));
          break;
        case AGE_TYPES.LE_LIQUIDATED_FROM_1_TO_5:
          dispatch(doGetLiquidatedByAgeFrom1To5({ filters }));
          break;
        case AGE_TYPES.LE_LIQUIDATED_LESS_THEN_1:
          dispatch(doGetLiquidatedByAgeLessThen1({ filters }));
          break;

        case AGE_TYPES.LE_BANKRUPTED_MORE_THEN_20:
          dispatch(doGetBankruptedByAgeMoreThen20({ filters }));
          break;
        case AGE_TYPES.LE_BANKRUPTED_FROM_10_TO_20:
          dispatch(doGetBankruptedByAgeFrom10To20({ filters }));
          break;
        case AGE_TYPES.LE_BANKRUPTED_FROM_5_TO_10:
          dispatch(doGetBankruptedByAgeFrom5To10({ filters }));
          break;
        case AGE_TYPES.LE_BANKRUPTED_FROM_1_TO_5:
          dispatch(doGetBankruptedByAgeFrom1To5({ filters }));
          break;
        case AGE_TYPES.LE_BANKRUPTED_LESS_THEN_1:
          dispatch(doGetBankruptedByAgeLessThen1({ filters }));
          break;

        // Sole Trade

        case AGE_TYPES.ST_CURRENT_MORE_THEN_20:
          dispatch(doGetCurrentByAgeMoreThen20SoleTrade({ filters }));
          break;
        case AGE_TYPES.ST_CURRENT_FROM_10_TO_20:
          dispatch(doGetCurrentByAgeFrom10To20SoleTrade({ filters }));
          break;
        case AGE_TYPES.ST_CURRENT_FROM_5_TO_10:
          dispatch(doGetCurrentByAgeFrom5To10SoleTrade({ filters }));
          break;
        case AGE_TYPES.ST_CURRENT_FROM_1_TO_5:
          dispatch(doGetCurrentByAgeFrom1To5SoleTrade({ filters }));
          break;
        case AGE_TYPES.ST_CURRENT_LESS_THEN_1:
          dispatch(doGetCurrentByAgeLessThen1SoleTrade({ filters }));
          break;

        case AGE_TYPES.ST_LIQUIDATED_MORE_THEN_20:
          dispatch(doGetLiquidatedByAgeMoreThen20SoleTrade({ filters }));
          break;
        case AGE_TYPES.ST_LIQUIDATED_FROM_10_TO_20:
          dispatch(doGetLiquidatedByAgeFrom10To20SoleTrade({ filters }));
          break;
        case AGE_TYPES.ST_LIQUIDATED_FROM_5_TO_10:
          dispatch(doGetLiquidatedByAgeFrom5To10SoleTrade({ filters }));
          break;
        case AGE_TYPES.ST_LIQUIDATED_FROM_1_TO_5:
          dispatch(doGetLiquidatedByAgeFrom1To5SoleTrade({ filters }));
          break;
        case AGE_TYPES.ST_LIQUIDATED_LESS_THEN_1:
          dispatch(doGetLiquidatedByAgeLessThen1SoleTrade({ filters }));
          break;

        case AGE_TYPES.ST_BANKRUPTED_MORE_THEN_20:
          dispatch(doGetBankruptedByAgeMoreThen20SoleTrade({ filters }));
          break;
        case AGE_TYPES.ST_BANKRUPTED_FROM_10_TO_20:
          dispatch(doGetBankruptedByAgeFrom10To20SoleTrade({ filters }));
          break;
        case AGE_TYPES.ST_BANKRUPTED_FROM_5_TO_10:
          dispatch(doGetBankruptedByAgeFrom5To10SoleTrade({ filters }));
          break;
        case AGE_TYPES.ST_BANKRUPTED_FROM_1_TO_5:
          dispatch(doGetBankruptedByAgeFrom1To5SoleTrade({ filters }));
          break;
        case AGE_TYPES.ST_BANKRUPTED_LESS_THEN_1:
          dispatch(doGetBankruptedByAgeLessThen1SoleTrade({ filters }));
          break;
      }
    },
    [dispatch, filters],
  );

  useEffect(() => {
    getData(age);
  }, [getData, age]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} active />
      ) : (
        <Block>
          <Title>{getTitleForAge(age)}</Title>
          <Content>{count}</Content>
        </Block>
      )}
    </>
  );
};

export default Age;
