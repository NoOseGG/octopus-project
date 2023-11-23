import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Content, Title } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { Skeleton } from 'antd';
import { doGetTotalCountCreated } from '@app/store/slices/legalEntityDashboard/mainInfo/created/createdAllSlice';
import { doGetTotalCountCreatedLastQuarter } from '@app/store/slices/legalEntityDashboard/mainInfo/created/createdQuarterSlice';
import { doGetTotalCountOperatingCompany } from '@app/store/slices/legalEntityDashboard/mainInfo/created/createdOperatingSlice';
import { doGetTotalCountSoleTradeOperatingCompany } from '@app/store/slices/soleTradeDashboard/mainInfo/created/createdSoleTradeOperatingSlice';
import { doGetTotalCountCreatedSoleTrade } from '@app/store/slices/soleTradeDashboard/mainInfo/created/createdSoleTradeAllSlice';
import { doGetTotalCountCreatedSoleTradeLastQuarter } from '@app/store/slices/soleTradeDashboard/mainInfo/created/createdSoleTradeQuarterSlice';
import {
  COUNT_TYPE,
  CountCompanyProps,
  getStateForCountCompany,
  getTitleForCountCompany,
} from '@app/components/dashboards/dashboard/components/MainInfo/components/CountCompany/CountCompanyTypes';
import { doGetTotalCountLiquidated } from '@app/store/slices/legalEntityDashboard/mainInfo/liquidated/liquidatedAllSlice';
import { doGetTotalCountLiquidatedLastQuarter } from '@app/store/slices/legalEntityDashboard/mainInfo/liquidated/liquidatedQuarterSlice';
import { doGetTotalCountLiquidatedSoleTradeLastQuarter } from '@app/store/slices/soleTradeDashboard/mainInfo/liquidated/liquidatedSoleTradeQuarterSlice';
import { doGetTotalCountLiquidatedSoleTrade } from '@app/store/slices/soleTradeDashboard/mainInfo/liquidated/liquidatedSoleTradeAllSlice';
import { doGetTotalCountBankrupted } from '@app/store/slices/legalEntityDashboard/mainInfo/bankrupt/bankruptedAllSlice';
import { doGetCountBankruptedQuarter } from '@app/store/slices/legalEntityDashboard/mainInfo/bankrupt/bankruptedQuarterSlice';
import { doGetTotalCountBankruptedSoleTrade } from '@app/store/slices/soleTradeDashboard/mainInfo/bankrupted/bankruptedAllSoleTradeSlice';
import { doGetCountBankruptedQuarterSoleTrade } from '@app/store/slices/soleTradeDashboard/mainInfo/bankrupted/bankruptedQuarterSoleTradeSlice';

const CountCompany: React.FC<CountCompanyProps> = ({ countCompany }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();
  const dynamicState = useAppSelector((state) => getStateForCountCompany(state, countCompany));
  const count = dynamicState?.count;
  const loading = dynamicState?.loading;

  const getData = useCallback(
    (dynamicPath) => {
      switch (dynamicPath) {
        case COUNT_TYPE.LE_CREATED_ALL:
          dispatch(doGetTotalCountCreated({ filters }));
          break;
        case COUNT_TYPE.LE_CREATED_QUARTER:
          dispatch(doGetTotalCountCreatedLastQuarter({ filters }));
          break;
        case COUNT_TYPE.LE_CREATED_OPERATION:
          dispatch(doGetTotalCountOperatingCompany({ filters }));
          break;

        case COUNT_TYPE.LE_LIQUIDATED_ALL:
          dispatch(doGetTotalCountLiquidated({ filters }));
          break;
        case COUNT_TYPE.LE_LIQUIDATED_QUARTER:
          dispatch(doGetTotalCountLiquidatedLastQuarter({ filters }));
          break;

        case COUNT_TYPE.LE_BANKRUPT_ALL:
          dispatch(doGetTotalCountBankrupted({ filters }));
          break;
        case COUNT_TYPE.LE_BANKRUPT_QUARTER:
          dispatch(doGetCountBankruptedQuarter({ filters }));
          break;

        // Sole Trade

        case COUNT_TYPE.ST_CREATED_ALL:
          dispatch(doGetTotalCountCreatedSoleTrade({ filters }));
          break;
        case COUNT_TYPE.ST_CREATED_QUARTER:
          dispatch(doGetTotalCountCreatedSoleTradeLastQuarter({ filters }));
          break;
        case COUNT_TYPE.ST_CREATED_OPERATION:
          dispatch(doGetTotalCountSoleTradeOperatingCompany({ filters }));
          break;

        case COUNT_TYPE.ST_LIQUIDATED_ALL:
          dispatch(doGetTotalCountLiquidatedSoleTrade({ filters }));
          break;
        case COUNT_TYPE.ST_LIQUIDATED_QUARTER:
          dispatch(doGetTotalCountLiquidatedSoleTradeLastQuarter({ filters }));
          break;

        case COUNT_TYPE.ST_BANKRUPT_ALL:
          dispatch(doGetTotalCountBankruptedSoleTrade({ filters }));
          break;
        case COUNT_TYPE.ST_BANKRUPT_QUARTER:
          dispatch(doGetCountBankruptedQuarterSoleTrade({ filters }));
          break;
      }
    },
    [dispatch, filters],
  );

  useEffect(() => {
    getData(countCompany);
  }, [getData, countCompany]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} active />
      ) : (
        <Block>
          <Title>{getTitleForCountCompany(countCompany)}</Title>
          <Content>{count}</Content>
        </Block>
      )}
    </>
  );
};

export default CountCompany;
