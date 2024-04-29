import React from 'react';
import { ColumnsType } from 'antd/es/table';
import { VacancyAGG } from '@app/store/types/Subject';
import { Table } from 'antd';
import { useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';

const PercentInfo: React.FC = () => {
  const vacancy_agg = useAppSelector((state) => {
    const vacancy_agg = state.searchProfile.profile.vacancy_agg;
    return vacancy_agg || [];
  });

  const columns: ColumnsType<VacancyAGG> = [
    {
      title: <TableTitle>Всего вакансий</TableTitle>,
      dataIndex: 'unp_count',
      key: 'unp_count',
      align: 'center',
    },
    {
      title: <TableTitle>% от общего количества зафиксированных вакансий</TableTitle>,
      children: [
        {
          title: <TableTitle>по виду деятельности</TableTitle>,
          dataIndex: 'percent_of_total_type_activity',
          key: 'percent_of_total_type_activity',
          align: 'center',
        },
        {
          title: <TableTitle>по городу</TableTitle>,
          dataIndex: 'percent_of_total_settlement',
          key: 'percent_of_total_settlement',
          align: 'center',
        },
        {
          title: <TableTitle>по Республике</TableTitle>,
          dataIndex: 'percent_of_total',
          key: 'percent_of_total',
          align: 'center',
        },
      ],
    },
  ];

  return <Table dataSource={vacancy_agg} columns={columns} bordered size={'small'} />;
};

export default PercentInfo;

const TableTitle = styled.div`
  font-weight: 700;
  text-align: center;
`;
