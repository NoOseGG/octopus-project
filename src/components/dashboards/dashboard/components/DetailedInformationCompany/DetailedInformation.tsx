import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Skeleton, Table } from 'antd';
import { doGetDetailedInformationCompany } from '@app/store/slices/legalEntityDashboard/detailedInformationSlice';
import {
  Content,
  Container,
  NameComponent,
  TableContainer,
} from '@app/components/dashboards/dashboard/styles/DetailedInformationCompanyStyle';

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

const DetailedInformation: React.FC = () => {
  const { results, loading } = useAppSelector((state) => state.detailedInformationCompany);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetDetailedInformationCompany({ filters }));
  }, [dispatch, filters]);

  return (
    <>
      {loading ? (
        <Skeleton active paragraph={{ rows: 20 }} />
      ) : (
        <>
          {Boolean(results.length) && (
            <Container>
              <NameComponent>Детализированая информация о регистрации компаний</NameComponent>
              <TableContainer>
                <Table
                  dataSource={results.map((item, index) => ({ ...item, key: index }))}
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
