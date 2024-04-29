import React from 'react';
import styled from 'styled-components';
import { Button, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import '../CommercialRegister/styles.css';

export enum StatisticTableType {
  VACANCIES,
  VACANCIES_YEAR,
  RESUMES,
  COMMERCIAL_REGISTERS,
  ALL,
  YEAR,
}

type MyComponentProps = {
  statistics: { value: string; count: number }[];
  addFilter: (text: string) => void;
  deleteFilter: () => void;
  selectedFilter: string | null;
  statisticTableType: StatisticTableType;
};

interface DataType {
  value: string;
  count: number;
}

const StatisticTable: React.FC<MyComponentProps> = ({
  statistics,
  addFilter,
  deleteFilter,
  selectedFilter,
  statisticTableType,
}) => {
  const columns: ColumnsType<DataType> = [
    {
      title: <TableTitle>Название</TableTitle>,
      dataIndex: 'value',
      width: '80%',
      render: (text) => <TableContentName>{text}</TableContentName>,
    },
    {
      title: <TableTitle>Количество</TableTitle>,
      dataIndex: 'count',
      width: '20%',
      render: (text) => <TableContentSum>{text}</TableContentSum>,
      sorter: (a, b) => a.count - b.count,
      showSorterTooltip: false,
    },
  ];

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Title>
          {statisticTableType === StatisticTableType.ALL ? 'На протяжении всего периода' : 'За последние 365 дней'}
        </Title>
        {selectedFilter &&
          StatisticTableType.VACANCIES !== statisticTableType &&
          StatisticTableType.VACANCIES_YEAR !== statisticTableType && (
            <ClearButton onClick={() => deleteFilter()}>Очистить фильтр</ClearButton>
          )}
      </div>
      <Table
        columns={columns}
        dataSource={statistics.sort((a, b) => b.count - a.count)}
        size={'small'}
        pagination={{ defaultPageSize: 5, defaultCurrent: 1, pageSizeOptions: [5, 10, 20] }}
        onRow={(record) => ({
          onClick: () => addFilter(record.value),
        })}
        rowClassName={() => 'custom-row'}
      />
    </Container>
  );
};

export default StatisticTable;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Title = styled.h3``;

const TableTitle = styled.div`
  font-size: 14px;
`;

const TableContentName = styled.div`
  width: 100%;
  font-size: 12px;
  line-height: 1.3;
`;

const TableContentSum = styled.div`
  font-size: 12px;
  text-align: center;
`;

const ClearButton = styled(Button)`
  width: 200px;
  height: 30px;
  padding: 0;
  font-size: 14px;
`;

// const getTitle = (statisticTableType: StatisticTableType): string => {
//   switch (statisticTableType) {
//     case StatisticTableType.VACANCIES:
//       return 'Статистика вакансий';
//     case StatisticTableType.VACANCIES_YEAR:
//       return 'Статистика вакансий за год';
//     case StatisticTableType.RESUMES:
//       return 'Статистика резюме';
//     case StatisticTableType.COMMERCIAL_REGISTERS:
//       return 'Статистика торгового реестра';
//   }
// };
//
// const getTableTitle = (statisticTableType: StatisticTableType): string => {
//   switch (statisticTableType) {
//     case StatisticTableType.VACANCIES:
//       return 'Название вакансии';
//     case StatisticTableType.VACANCIES_YEAR:
//       return 'Название вакансии';
//     case StatisticTableType.RESUMES:
//       return 'Название резюме';
//     case StatisticTableType.COMMERCIAL_REGISTERS:
//       return 'Название объекта';
//   }
// };
