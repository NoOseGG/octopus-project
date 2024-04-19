import React from 'react';
import { Table } from 'antd';
import { Vacancy } from '@app/store/types/Subject';
import { formatDate } from '@app/utils/utils';
import { Content } from '@app/components/dashboards/dashboard/styles/DetailedInformationCompanyStyle';

type MyComponentProps = {
  vacancies: Vacancy[];
};

const VacancyTable: React.FC<MyComponentProps> = ({ vacancies }) => {
  const columns = [
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
    {
      title: 'Подробнее',
      dataIndex: '',
      key: 'detailed',
      render: () => (
        <Content>
          <a>Подробнее</a>
        </Content>
      ),
    },
  ];

  return <Table columns={columns} dataSource={vacancies} pagination={{ size: 'small' }}></Table>;
};

export default VacancyTable;
