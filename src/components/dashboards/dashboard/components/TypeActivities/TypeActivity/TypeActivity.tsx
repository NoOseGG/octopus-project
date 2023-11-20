import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Container } from '@app/components/dashboards/dashboard/styles/TypeActivitiesStyle';
import { doGetTypeActivitiesAll } from '@app/store/slices/legalEntityDashboard/typeActivities/current/typeActivitiesAll';
import { Skeleton, Table, TableProps } from 'antd';
import {
  getStateForTypeActivity,
  getTitleForTypeActivity,
  TYPE_ACTIVITY_TYPE,
  TypeActivitiesProps,
} from '@app/components/dashboards/dashboard/components/TypeActivities/TypeActivityTypes';
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

const TypeActivity: React.FC<TypeActivitiesProps> = ({ typeActivity }) => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dynamicState = useAppSelector((state) => getStateForTypeActivity(state, typeActivity));
  const results = dynamicState?.typeActivities.results;
  const loading = dynamicState?.loading;

  const data = results.map((item) => {
    return {
      name: item.group_fields.type_activity_name,
      count: item.Count,
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

  // return (
  //   <Container>
  //     {loading ? (
  //       <SpinnerSpace>
  //         <Spin size="large" />
  //       </SpinnerSpace>
  //     ) : (
  //       <>
  //         <Title>{getTitleForTypeActivity(typeActivity)}</Title>
  //         <Content>
  //           {results?.map((typeActivity, index) => (
  //             <Line key={index} value={index}>
  //               <TextLine>{typeActivity.group_fields.type_activity_name}</TextLine>
  //               <TextLine>{typeActivity.Count}</TextLine>
  //             </Line>
  //           ))}
  //         </Content>
  //       </>
  //     )}
  //   </Container>
  // );
};

export default TypeActivity;
