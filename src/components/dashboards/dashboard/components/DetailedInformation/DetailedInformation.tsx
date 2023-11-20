import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Skeleton, Table } from 'antd';
import { doGetDetailed } from '@app/store/slices/legalEntityDashboard/detailed/current/detailedSlice';
import {
  Content,
  Container,
  NameComponent,
  TableContainer,
} from '@app/components/dashboards/dashboard/styles/DetailedInformationCompanyStyle';
import {
  DETAILED_TYPE,
  DetailedProps,
  getStateForDetailed,
  getTitleForDetailed,
} from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformationTypes';
import { doGetDetailedInformationCompanySoleTrade } from '@app/store/slices/soleTradeDashboard/detailed/current/detailedInformationSoleTradeSlice';
import { doGetLiquidatedDetailed } from '@app/store/slices/legalEntityDashboard/detailed/liquidated/liuquidatedDetailedSlice';

const getColumn = (title: string, field: string) => {
  return {
    title: title,
    dataIndex: field,
    key: field,
    render: (text: string) => {
      return <Content>{text}</Content>;
    },
  };
};

const columns = [
  getColumn('УНП', 'legal_entity_id'),
  getColumn('Сокращенное наименование', 'company_short_name'),
  getColumn('Вид деятельности', 'type_activity_name'),
  getColumn('Дата регистрации', 'company_date_registration'),
  getColumn('Состояние', 'company_status_name'),
  getColumn('Полный адрес', 'address_full'),
  getColumn('Сайт', 'contact_web_site'),
  getColumn('Электроная почта', 'contact_email'),
  getColumn('Наимменование инспецкции НМС', 'tax_office_name'),
];

const DetailedInformation: React.FC<DetailedProps> = ({ detailed }) => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();
  const dynamicState = useAppSelector((state) => getStateForDetailed(state, detailed));
  const results = dynamicState?.results;
  const loading = dynamicState?.loading;

  const getData = useCallback(
    (detailed) => {
      switch (detailed) {
        case DETAILED_TYPE.LE_CREATED:
          dispatch(doGetDetailed({ filters }));
          break;
        case DETAILED_TYPE.LE_LIQUIDATED:
          dispatch(doGetLiquidatedDetailed({ filters }));
          break;
        case DETAILED_TYPE.ST_CREATED:
          dispatch(doGetDetailedInformationCompanySoleTrade({ filters }));
          break;
      }
    },
    [dispatch, filters],
  );

  useEffect(() => {
    getData(detailed);
  }, [getData]);

  return (
    <>
      {loading ? (
        <Skeleton active paragraph={{ rows: 20 }} />
      ) : (
        <>
          {Boolean(results?.length) && (
            <Container>
              <NameComponent>{getTitleForDetailed(detailed)}</NameComponent>
              <TableContainer>
                <Table
                  dataSource={results?.map((item, index) => ({ ...item, key: index }))}
                  columns={columns}
                  size={'small'}
                  bordered={true}
                ></Table>
              </TableContainer>
            </Container>
          )}
        </>
      )}
    </>
  );
};

export default DetailedInformation;
