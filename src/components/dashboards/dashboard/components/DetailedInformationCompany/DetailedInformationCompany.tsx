import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Table } from 'antd';
import { doGetDetailedInformationCompany } from '@app/store/slices/detailedInformationCompanySlice';
import styled from 'styled-components';

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

const DetailedInformationCompany: React.FC = () => {
  const { results } = useAppSelector((state) => state.detailedInformationCompany);
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetDetailedInformationCompany({ page_size: 30, filters }));
  }, [dispatch, filters]);

  return (
    <>
      {Boolean(results.length) && (
        <Container>
          <NameComponent>Детализированая информация о регистрации компаний</NameComponent>
          <TableContainer>
            <Table dataSource={results} columns={columns} size={'small'} bordered={true}></Table>
          </TableContainer>
        </Container>
      )}
    </>
  );
};

export default DetailedInformationCompany;

const Container = styled.div`
  margin-top: 20px;
`;

const TableContainer = styled.div`
  margin-top: 20px;
`;

const NameComponent = styled.div`
  font-size: 30px;
  text-align: center;
  font-weight: 700;
`;

const Content = styled.span`
  font-size: 12px;
`;
