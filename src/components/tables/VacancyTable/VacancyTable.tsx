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
      sorter: (a, b) => {
        if (a.from_dttm === null || b.from_dttm === null) {
          return 0;
        }
        const aDate = new Date(a.from_dttm);
        const bDate = new Date(b.from_dttm);
        return aDate > bDate ? 1 : aDate < bDate ? -1 : 0;
      },
      showSorterTooltip: false,
      render: (text: string) => <Content>{formatDate(text)}</Content>,
    },
    {
      title: 'Вакансия',
      dataIndex: 'vacancy_name',
      key: 'vacancy_name',
      sorter: (a, b) => {
        if (a.vacancy_name === null || b.vacancy_name === null) {
          return 0;
        }
        return a.vacancy_name.localeCompare(b.vacancy_name);
      },
      showSorterTooltip: false,
      render: (text: string) => <Content>{text}</Content>,
    },
    {
      title: 'Регион',
      dataIndex: 'workplace_address_settlement',
      key: 'workplace_address_settlement',
      sorter: (a, b) => {
        if (a.workplace_address_settlement === null || b.workplace_address_settlement === null) {
          return 0;
        }
        return a.workplace_address_settlement.localeCompare(b.workplace_address_settlement);
      },
      showSorterTooltip: false,
      render: (text: string) => <Content>{text}</Content>,
    },
    {
      title: 'Зарплата',
      dataIndex: 'min_salary_byn',
      key: 'min_salary_byn',
      sorter: (a, b) => {
        if (a.min_salary_byn === null || b.min_salary_byn === null) {
          return 0;
        }
        return Number(a.min_salary_byn) - Number(b.min_salary_byn);
      },
      showSorterTooltip: false,
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
