import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Content, Title } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { Skeleton } from 'antd';
import { DashboardProps, COUNT_TYPE } from '@app/components/dashboards/dashboard/DashboardTypes';
import { getStateByPath, getTitleByPath } from '@app/components/dashboards/dashboard/DashboardUtils';
import { doGetTotalCountCreated } from '@app/store/slices/legalEntityDashboard/mainInfo/created/createdAllSlice';
import { doGetTotalCountCreatedLastYear } from '@app/store/slices/legalEntityDashboard/mainInfo/created/createdYearSlice';
import { doGetTotalCountCreatedLastQuarter } from '@app/store/slices/legalEntityDashboard/mainInfo/created/createdQuarterSlice';
import { doGetTotalCountOperatingCompany } from '@app/store/slices/legalEntityDashboard/mainInfo/created/createdOperatingSlice';
import { doGetTotalCountSoleTradeOperatingCompany } from '@app/store/slices/soleTradeDashboard/mainInfo/created/createdSoleTradeOperatingSlice';
import { doGetTotalCountCreatedSoleTrade } from '@app/store/slices/soleTradeDashboard/mainInfo/created/createdSoleTradeAllSlice';
import { doGetTotalCountCreatedSoleTradeLastYear } from '@app/store/slices/soleTradeDashboard/mainInfo/created/createdSoleTradeYearSlice';
import { doGetTotalCountCreatedSoleTradeLastQuarter } from '@app/store/slices/soleTradeDashboard/mainInfo/created/createdSoleTradeQuarterSlice';

const CreatedCount: React.FC<DashboardProps> = ({ countType }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();
  const dynamicState = useAppSelector((state) => getStateByPath(state, countType));
  const count = dynamicState?.count;
  const loading = dynamicState?.loading;

  const getData = useCallback(
    (dynamicPath) => {
      switch (dynamicPath) {
        case COUNT_TYPE.CREATED_ALL:
          dispatch(doGetTotalCountCreated({ filters }));
          break;
        case COUNT_TYPE.CREATED_YEAR:
          dispatch(doGetTotalCountCreatedLastYear({ filters }));
          break;
        case COUNT_TYPE.CREATED_QUARTER:
          dispatch(doGetTotalCountCreatedLastQuarter({ filters }));
          break;
        case COUNT_TYPE.CREATED_OPERATION:
          dispatch(doGetTotalCountOperatingCompany({ filters }));
          break;
        case COUNT_TYPE.CREATED_SOLE_TRADE_ALL:
          dispatch(doGetTotalCountCreatedSoleTrade({ filters }));
          break;
        case COUNT_TYPE.CREATED_SOLE_TRADE_YEAR:
          dispatch(doGetTotalCountCreatedSoleTradeLastYear({ filters }));
          break;
        case COUNT_TYPE.CREATED_SOLE_TRADE_QUARTER:
          dispatch(doGetTotalCountCreatedSoleTradeLastQuarter({ filters }));
          break;
        case COUNT_TYPE.CREATED_SOLE_TRADE_OPERATION:
          dispatch(doGetTotalCountSoleTradeOperatingCompany({ filters }));
          break;
      }
    },
    [dispatch, filters],
  );

  useEffect(() => {
    getData(countType);
  }, [getData]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} active />
      ) : (
        <Block>
          <Title>{getTitleByPath(countType)}</Title>
          <Content>{count}</Content>
        </Block>
      )}
    </>
  );
};

export default CreatedCount;
