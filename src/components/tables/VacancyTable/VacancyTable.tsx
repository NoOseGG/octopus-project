import React from 'react';
import { Table, TableColumnsType } from 'antd';
import { Vacancy } from '@app/store/types/Subject';
import { formatDate } from '@app/utils/utils';
import { Content } from '@app/components/dashboards/dashboard/styles/DetailedInformationCompanyStyle';
import VacancyExpand from '@app/components/tables/VacancyTable/VacancyExpand';

type MyComponentProps = {
  vacancies: Vacancy[];
};

const VacancyTable: React.FC<MyComponentProps> = ({ vacancies }) => {
  const columns: TableColumnsType<Vacancy> = [
    {
      title: 'Дата',
      dataIndex: 'from_dttm',
      key: 'from_dttm',
      render: (text: string) => <Content>{formatDate(text)}</Content>,
    },
    {
      title: 'Вакансия',
      dataIndex: 'vacancy_name',
      key: 'vacancy_name',
      render: (text: string) => <Content>{text}</Content>,
    },
    {
      title: 'Регион',
      dataIndex: 'workplace_address_settlement',
      key: 'workplace_address_settlement',
      render: (text: string) => <Content>{text}</Content>,
    },
    {
      title: 'Зарплата',
      dataIndex: 'min_salary_byn',
      key: 'min_salary_byn',
      render: (text: string) => <Content>{text} BYN</Content>,
    },
    Table.EXPAND_COLUMN,
  ];

  return (
    <Table
      columns={columns}
      dataSource={vacancies.map((vacancy, index) => {
        return { ...vacancy, key: index };
      })}
      size={'small'}
      pagination={{ size: 'small' }}
      expandable={{ expandedRowRender: (record) => <VacancyExpand vacancy={record} /> }}
    ></Table>
  );
};

export default VacancyTable;
