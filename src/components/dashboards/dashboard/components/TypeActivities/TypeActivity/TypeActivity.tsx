import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import {
  Container,
  Content,
  Line,
  Title,
  SpinnerSpace,
  TextLine,
} from '@app/components/dashboards/dashboard/styles/TypeActivitiesStyle';
import { doGetTypeActivitiesAll } from '@app/store/slices/legalEntityDashboard/typeActivities/typeActivitiesAll';
import { Spin } from 'antd';
import {
  getStateForTypeActivity,
  getTitleForTypeActivity,
  TYPE_ACTIVITY_TYPE,
  TypeActivitiesProps,
} from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivityTypes';
import { doGetTypeActivitiesYear } from '@app/store/slices/legalEntityDashboard/typeActivities/typeActivitiesYear';
import { doGetTypeActivitiesQuarter } from '@app/store/slices/legalEntityDashboard/typeActivities/typeActivitiesQuarter';
import { doGetTypeActivitiesMonth } from '@app/store/slices/legalEntityDashboard/typeActivities/typeActivitiesMonth';
import { doGetTypeActivitiesAllSoleTrade } from '@app/store/slices/soleTradeDashboard/typeActivitiesSoleTrade/typeActivitiesAllSoleTrade';
import { doGetTypeActivitiesYearSoleTrade } from '@app/store/slices/soleTradeDashboard/typeActivitiesSoleTrade/typeActivitiesYearSoleTrade';
import { doGetTypeActivitiesQuarterSoleTrade } from '@app/store/slices/soleTradeDashboard/typeActivitiesSoleTrade/typeActivitiesQuarterSoleTrade';
import { doGetTypeActivitiesMonthSoleTrade } from '@app/store/slices/soleTradeDashboard/typeActivitiesSoleTrade/typeActivitiesMonthSoleTrade';
import { doGetLiquidatedTypeActivitiesAll } from '@app/store/slices/legalEntityDashboard/liquidatedTypeActivities/typeActivitiesLiuaidatedAll';
import { doGetLiquidatedTypeActivitiesYear } from '@app/store/slices/legalEntityDashboard/liquidatedTypeActivities/typeActivitiesLiquidatedYear';
import { doGetLiquidatedTypeActivitiesQuarter } from '@app/store/slices/legalEntityDashboard/liquidatedTypeActivities/typeActivitiesLiquidatedQuarter';
import { doGetLiquidatedTypeActivitiesMonth } from '@app/store/slices/legalEntityDashboard/liquidatedTypeActivities/typeActivitiesLiquidatedMonth';
import { doGetLiquidatedTypeActivitiesAllSoleTrade } from '@app/store/slices/soleTradeDashboard/liquidatedTypeActivities/typeActivitiesLiquidatedSoleTradeAll';
import { doGetLiquidatedTypeActivitiesYearSoleTrade } from '@app/store/slices/soleTradeDashboard/liquidatedTypeActivities/typeActivitiesLiquidatedSoleTradeYear';
import { doGetLiquidatedTypeActivitiesQuarterSoleTrade } from '@app/store/slices/soleTradeDashboard/liquidatedTypeActivities/typeActivitiesLiquidatedSoleTradeQuarter';
import { doGetLiquidatedTypeActivitiesMonthSoleTrade } from '@app/store/slices/soleTradeDashboard/liquidatedTypeActivities/typeActivitiesLiquidatedSoleTradeMonth';

const TypeActivity: React.FC<TypeActivitiesProps> = ({ typeActivity }) => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dynamicState = useAppSelector((state) => getStateForTypeActivity(state, typeActivity));
  const results = dynamicState?.typeActivities.results;
  const loading = dynamicState?.loading;

  const getData = useCallback(
    (typeActivity) => {
      switch (typeActivity) {
        case TYPE_ACTIVITY_TYPE.LE_CREATED_ALL:
          dispatch(doGetTypeActivitiesAll({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.LE_CREATED_YEAR:
          dispatch(doGetTypeActivitiesYear({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.LE_CREATED_QUARTER:
          dispatch(doGetTypeActivitiesQuarter({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.LE_CREATED_MONTH:
          dispatch(doGetTypeActivitiesMonth({ filters }));
          break;

        case TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_ALL:
          dispatch(doGetLiquidatedTypeActivitiesAll({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_YEAR:
          dispatch(doGetLiquidatedTypeActivitiesYear({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_QUARTER:
          dispatch(doGetLiquidatedTypeActivitiesQuarter({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.LE_LIQUIDATED_MONTH:
          dispatch(doGetLiquidatedTypeActivitiesMonth({ filters }));
          break;

        case TYPE_ACTIVITY_TYPE.ST_CREATED_ALL:
          dispatch(doGetTypeActivitiesAllSoleTrade({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.ST_CREATED_YEAR:
          dispatch(doGetTypeActivitiesYearSoleTrade({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.ST_CREATED_QUARTER:
          dispatch(doGetTypeActivitiesQuarterSoleTrade({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.ST_CREATED_MONTH:
          dispatch(doGetTypeActivitiesMonthSoleTrade({ filters }));
          break;

        case TYPE_ACTIVITY_TYPE.ST_LIQUIDATED_ALL:
          dispatch(doGetLiquidatedTypeActivitiesAllSoleTrade({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.ST_LIQUIDATED_YEAR:
          dispatch(doGetLiquidatedTypeActivitiesYearSoleTrade({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.ST_LIQUIDATED_QUARTER:
          dispatch(doGetLiquidatedTypeActivitiesQuarterSoleTrade({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.ST_LIQUIDATED_MONTH:
          dispatch(doGetLiquidatedTypeActivitiesMonthSoleTrade({ filters }));
          break;
      }
    },
    [dispatch, filters],
  );

  useEffect(() => {
    getData(typeActivity);
  }, [getData]);

  return (
    <Container>
      {loading ? (
        <SpinnerSpace>
          <Spin size="large" />
        </SpinnerSpace>
      ) : (
        <>
          <Title>{getTitleForTypeActivity(typeActivity)}</Title>
          <Content>
            {results?.map((typeActivity, index) => (
              <Line key={index} value={index}>
                <TextLine>{typeActivity.group_fields.type_activity_name}</TextLine>
                <TextLine>{typeActivity.Count}</TextLine>
              </Line>
            ))}
          </Content>
        </>
      )}
    </Container>
  );
};

export default TypeActivity;
