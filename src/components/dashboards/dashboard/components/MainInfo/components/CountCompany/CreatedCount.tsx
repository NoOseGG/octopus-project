import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Block, Content, Title } from '@app/components/dashboards/dashboard/styles/CountCompanyStyle';
import { Skeleton } from 'antd';
import { DashboardProps, DynamicPath } from '@app/components/dashboards/dashboard/DashboardTypes';
import { getStateByPath, getTitleByPath } from '@app/components/dashboards/dashboard/DashboardUtils';
import { doGetTotalCountCreated } from '@app/store/slices/legalEntityDashboard/mainInfo/createdAllSlice';
import { doGetTotalCountCreatedLastYear } from '@app/store/slices/legalEntityDashboard/mainInfo/createdYearSlice';
import { doGetTotalCountCreatedLastQuarter } from '@app/store/slices/legalEntityDashboard/mainInfo/createdQuarterSlice';
import { doGetTotalCountOperatingCompany } from '@app/store/slices/legalEntityDashboard/mainInfo/createdOperatingSlice';
import { doGetTotalCountSoleTradeOperatingCompany } from '@app/store/slices/soleTradeDashboard/mainInfoSoleTrade/createdSoleTradeOperatingSlice';
import { doGetTotalCountCreatedSoleTrade } from '@app/store/slices/soleTradeDashboard/mainInfoSoleTrade/createdSoleTradeAllSlice';
import { doGetTotalCountCreatedSoleTradeLastYear } from '@app/store/slices/soleTradeDashboard/mainInfoSoleTrade/createdSoleTradeYearSlice';
import { doGetTotalCountCreatedSoleTradeLastQuarter } from '@app/store/slices/soleTradeDashboard/mainInfoSoleTrade/createdSoleTradeQuarterSlice';

const CreatedCount: React.FC<DashboardProps> = ({ dynamicPath }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();
  const dynamicState = useAppSelector((state) => getStateByPath(state, dynamicPath));
  const count = dynamicState?.count;
  const loading = dynamicState?.loading;

  const getData = useCallback(
    (dynamicPath) => {
      switch (dynamicPath) {
        case DynamicPath.CREATED_ALL:
          dispatch(doGetTotalCountCreated({ filters }));
          break;
        case DynamicPath.CREATED_YEAR:
          dispatch(doGetTotalCountCreatedLastYear({ filters }));
          break;
        case DynamicPath.CREATED_QUARTER:
          dispatch(doGetTotalCountCreatedLastQuarter({ filters }));
          break;
        case DynamicPath.CREATED_OPERATION:
          dispatch(doGetTotalCountOperatingCompany({ filters }));
          break;
        case DynamicPath.CREATED_SOLE_TRADE_ALL:
          dispatch(doGetTotalCountCreatedSoleTrade({ filters }));
          break;
        case DynamicPath.CREATED_SOLE_TRADE_YEAR:
          dispatch(doGetTotalCountCreatedSoleTradeLastYear({ filters }));
          break;
        case DynamicPath.CREATED_SOLE_TRADE_QUARTER:
          dispatch(doGetTotalCountCreatedSoleTradeLastQuarter({ filters }));
          break;
        case DynamicPath.CREATED_SOLE_TRADE_OPERATION:
          dispatch(doGetTotalCountSoleTradeOperatingCompany({ filters }));
          break;
      }
    },
    [dispatch, filters],
  );

  useEffect(() => {
    getData(dynamicPath);
  }, [getData]);

  return (
    <>
      {loading ? (
        <Skeleton style={{ padding: 5 }} active />
      ) : (
        <Block>
          <Title>{getTitleByPath(dynamicPath)}</Title>
          <Content>{count}</Content>
        </Block>
      )}
    </>
  );
};

export default CreatedCount;
