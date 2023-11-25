import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Container } from '@app/components/dashboards/dashboard/styles/TypeActivitiesStyle';
import { doGetTypeActivitiesAll } from '@app/store/slices/legalEntityDashboard/typeActivities/current/typeActivitiesAll';
import { Skeleton, Table, TableProps } from 'antd';
import {
  getStateForTypeActivity,
  getTitleForTypeActivity,
  TYPE_ACTIVITY_TYPE,
  TypeActivityProps,
} from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivity/TypeActivityTypes';
import { doGetTypeActivitiesYear } from '@app/store/slices/legalEntityDashboard/typeActivities/current/typeActivitiesYear';
import { doGetTypeActivitiesQuarter } from '@app/store/slices/legalEntityDashboard/typeActivities/current/typeActivitiesQuarter';
import { doGetTypeActivitiesMonth } from '@app/store/slices/legalEntityDashboard/typeActivities/current/typeActivitiesMonth';
import { doGetTypeActivitiesAllSoleTrade } from '@app/store/slices/soleTradeDashboard/typeActivities/current/typeActivitiesAllSoleTrade';
import { doGetTypeActivitiesYearSoleTrade } from '@app/store/slices/soleTradeDashboard/typeActivities/current/typeActivitiesYearSoleTrade';
import { doGetTypeActivitiesQuarterSoleTrade } from '@app/store/slices/soleTradeDashboard/typeActivities/current/typeActivitiesQuarterSoleTrade';
import { doGetTypeActivitiesMonthSoleTrade } from '@app/store/slices/soleTradeDashboard/typeActivities/current/typeActivitiesMonthSoleTrade';
import { doGetLiquidatedTypeActivitiesAll } from '@app/store/slices/legalEntityDashboard/typeActivities/liquidated/typeActivitiesLiuaidatedAll';
import { doGetLiquidatedTypeActivitiesYear } from '@app/store/slices/legalEntityDashboard/typeActivities/liquidated/typeActivitiesLiquidatedYear';
import { doGetLiquidatedTypeActivitiesQuarter } from '@app/store/slices/legalEntityDashboard/typeActivities/liquidated/typeActivitiesLiquidatedQuarter';
import { doGetLiquidatedTypeActivitiesMonth } from '@app/store/slices/legalEntityDashboard/typeActivities/liquidated/typeActivitiesLiquidatedMonth';
import { doGetLiquidatedTypeActivitiesAllSoleTrade } from '@app/store/slices/soleTradeDashboard/typeActivities/liquidated/typeActivitiesLiquidatedSoleTradeAll';
import { doGetLiquidatedTypeActivitiesYearSoleTrade } from '@app/store/slices/soleTradeDashboard/typeActivities/liquidated/typeActivitiesLiquidatedSoleTradeYear';
import { doGetLiquidatedTypeActivitiesQuarterSoleTrade } from '@app/store/slices/soleTradeDashboard/typeActivities/liquidated/typeActivitiesLiquidatedSoleTradeQuarter';
import { doGetLiquidatedTypeActivitiesMonthSoleTrade } from '@app/store/slices/soleTradeDashboard/typeActivities/liquidated/typeActivitiesLiquidatedSoleTradeMonth';
import { ColumnsType } from 'antd/es/table';
import { doGetBankruptedTypeActivitiesAll } from '@app/store/slices/legalEntityDashboard/typeActivities/bankrupted/typeActivitiesBankruptedAll';
import { doGetBankruptedTypeActivitiesYear } from '@app/store/slices/legalEntityDashboard/typeActivities/bankrupted/typeActivitiesBankruptedYear';
import { doGetBankruptedTypeActivitiesQuarter } from '@app/store/slices/legalEntityDashboard/typeActivities/bankrupted/typeActivitiesBankruptedQuarter';
import { doGetBankruptedTypeActivitiesMonth } from '@app/store/slices/legalEntityDashboard/typeActivities/bankrupted/typeActivitiesBankruptedMonth';
import { doGetBankruptedTypeActivitiesSoleTradeAll } from '@app/store/slices/soleTradeDashboard/typeActivities/bankrupted/typeActivitiesBankruptedSoleTradeAll';
import { doGetBankruptedTypeActivitiesSoleTradeYear } from '@app/store/slices/soleTradeDashboard/typeActivities/bankrupted/typeActivitiesBankruptedSoleTradeYear';
import { doGetBankruptedTypeActivitiesSoleTradeQuarter } from '@app/store/slices/soleTradeDashboard/typeActivities/bankrupted/typeActivitiesBankruptedSoleTradeQuarter';
import { doGetBankruptedTypeActivitiesSoleTradeMonth } from '@app/store/slices/soleTradeDashboard/typeActivities/bankrupted/typeActivitiesBankruptedSoleTradeMonth';
import { doGetCheckedTypeActivitiesAll } from '@app/store/slices/legalEntityDashboard/typeActivities/checked/typeActivitiesCheckedAll';
import { doGetCheckedTypeActivitiesYear } from '@app/store/slices/legalEntityDashboard/typeActivities/checked/typeActivitiesCheckedYear';
import { doGetCheckedTypeActivitiesQuarter } from '@app/store/slices/legalEntityDashboard/typeActivities/checked/typeActivitiesCheckedQuarter';
import { doGetCheckedTypeActivitiesMonth } from '@app/store/slices/legalEntityDashboard/typeActivities/checked/typeActivitiesCheckedMonth';
import { doGetCheckedTypeActivitiesAllSoleTrade } from '@app/store/slices/soleTradeDashboard/typeActivities/checked/typeActivitiesCheckedSoleTradeAll';
import { doGetCheckedTypeActivitiesYearSoleTrade } from '@app/store/slices/soleTradeDashboard/typeActivities/checked/typeActivitiesCheckedSoleTrdeYearSlice';
import { doGetCheckedTypeActivitiesQuarterSoleTrade } from '@app/store/slices/soleTradeDashboard/typeActivities/checked/typeActivitiesCheckedSoleTradeQuarterSlice';
import { doGetCheckedTypeActivitiesMonthSoleTrade } from '@app/store/slices/soleTradeDashboard/typeActivities/checked/typeActivitiesCheckedSoleTradeMonth';

const TypeActivity: React.FC<TypeActivityProps> = ({ typeActivity }) => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dynamicState = useAppSelector((state) => getStateForTypeActivity(state, typeActivity));
  const results = dynamicState?.typeActivities.results;
  const loading = dynamicState?.loading;

  const data = results.map((item, index) => {
    return {
      name: item.group_fields.type_activity_name,
      count: item.Count,
      key: index,
    };
  });

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

        case TYPE_ACTIVITY_TYPE.LE_BANKRUPTED_ALL:
          dispatch(doGetBankruptedTypeActivitiesAll({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.LE_BANKRUPTED_YEAR:
          dispatch(doGetBankruptedTypeActivitiesYear({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.LE_BANKRUPTED_QUARTER:
          dispatch(doGetBankruptedTypeActivitiesQuarter({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.LE_BANKRUPTED_MONTH:
          dispatch(doGetBankruptedTypeActivitiesMonth({ filters }));
          break;

        case TYPE_ACTIVITY_TYPE.LE_CHECKED_ALL:
          dispatch(doGetCheckedTypeActivitiesAll({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.LE_CHECKED_YEAR:
          dispatch(doGetCheckedTypeActivitiesYear({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.LE_CHECKED_QUARTER:
          dispatch(doGetCheckedTypeActivitiesQuarter({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.LE_CHECKED_MONTH:
          dispatch(doGetCheckedTypeActivitiesMonth({ filters }));
          break;

        //----------- SOLE TRADE --------------

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

        case TYPE_ACTIVITY_TYPE.ST_BANKRUPTED_ALL:
          dispatch(doGetBankruptedTypeActivitiesSoleTradeAll({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.ST_BANKRUPTED_YEAR:
          dispatch(doGetBankruptedTypeActivitiesSoleTradeYear({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.ST_BANKRUPTED_QUARTER:
          dispatch(doGetBankruptedTypeActivitiesSoleTradeQuarter({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.ST_BANKRUPTED_MONTH:
          dispatch(doGetBankruptedTypeActivitiesSoleTradeMonth({ filters }));
          break;

        case TYPE_ACTIVITY_TYPE.ST_CHECKED_ALL:
          dispatch(doGetCheckedTypeActivitiesAllSoleTrade({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.ST_CHECKED_YEAR:
          dispatch(doGetCheckedTypeActivitiesYearSoleTrade({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.ST_CHECKED_QUARTER:
          dispatch(doGetCheckedTypeActivitiesQuarterSoleTrade({ filters }));
          break;
        case TYPE_ACTIVITY_TYPE.ST_CHECKED_MONTH:
          dispatch(doGetCheckedTypeActivitiesMonthSoleTrade({ filters }));
          break;
      }
    },
    [dispatch, filters],
  );

  useEffect(() => {
    getData(typeActivity);
  }, [getData, typeActivity]);

  interface DataType {
    name: string;
    count: number;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: <div style={{ fontSize: 12, fontWeight: 700 }}>{getTitleForTypeActivity(typeActivity)}</div>,
      dataIndex: 'name',
      width: '85%',
      render: (text) => <div style={{ cursor: 'pointer', fontSize: 12, lineHeight: 1.3 }}>{text}</div>,
    },
    {
      title: '',
      dataIndex: 'count',
      width: '15%',
      render: (text) => <div style={{ fontSize: 12, textAlign: 'center' }}>{text}</div>,
      sorter: (a, b) => a.count - b.count,
      showSorterTooltip: false,
    },
  ];

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <Container>
      {loading ? (
        <Skeleton paragraph={{ rows: 10 }} active={true} />
      ) : (
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          size={'small'}
          pagination={false}
          scroll={{ y: 360 }}
        />
      )}
    </Container>
  );
};

export default TypeActivity;
