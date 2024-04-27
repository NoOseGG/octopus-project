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
      title: <TableTitle>Общее количество</TableTitle>,
      dataIndex: 'total_records',
      key: 'total_records',
    },
    {
      title: <TableTitle>% от общего количества</TableTitle>,
      children: [
        {
          title: <TableTitle>Республика</TableTitle>,
          dataIndex: 'percent_of_total',
          key: 'percent_of_total',
        },
        {
          title: <TableTitle>Область</TableTitle>,
          dataIndex: 'total_records',
          key: 'total_records',
        },
        {
          title: <TableTitle>Город</TableTitle>,
          dataIndex: 'percent_of_total_settlement',
          key: 'percent_of_total_settlement',
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
