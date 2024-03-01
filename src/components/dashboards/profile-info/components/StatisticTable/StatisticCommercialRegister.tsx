import React from 'react';
import styled from 'styled-components';
import { Button, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import '../CommercialRegister/styles.css';

export enum StatisticTableType {
  VACANCIES,
  RESUMES,
  COMMERCIAL_REGISTERS,
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

const StatisticCommercialRegister: React.FC<MyComponentProps> = ({
  statistics,
  addFilter,
  deleteFilter,
  selectedFilter,
  statisticTableType,
}) => {
  const columns: ColumnsType<DataType> = [
    {
      title: getTableTitle(statisticTableType),
      dataIndex: 'value',
      width: '85%',
      render: (text) => <TableContentName>{text}</TableContentName>,
    },
    {
      title: 'Количество',
      dataIndex: 'count',
      width: '15%',
      render: (text) => <TableContentSum>{text}</TableContentSum>,
      sorter: (a, b) => a.count - b.count,
      showSorterTooltip: false,
    },
  ];

  return (
    <Container>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Title>{getTitle(statisticTableType)}</Title>
        {selectedFilter && <ClearButton onClick={() => deleteFilter()}>Очистить фильтр</ClearButton>}
      </div>
      <Table
        columns={columns}
        dataSource={statistics.sort((a, b) => b.count - a.count)}
        size={'small'}
        pagination={false}
        scroll={{ y: 360 }}
        onRow={(record) => ({
          onClick: () => addFilter(record.value),
        })}
        rowClassName={() => 'custom-row'}
      />
    </Container>
  );
};

export default StatisticCommercialRegister;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Title = styled.h3``;

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

const getTitle = (statisticTableType: StatisticTableType): string => {
  switch (statisticTableType) {
    case StatisticTableType.VACANCIES:
      return 'Статистика вакансий';
    case StatisticTableType.RESUMES:
      return 'Статистика резюме';
    case StatisticTableType.COMMERCIAL_REGISTERS:
      return 'Статистика торгового реестра';
  }
};

const getTableTitle = (statisticTableType: StatisticTableType): string => {
  switch (statisticTableType) {
    case StatisticTableType.VACANCIES:
      return 'Название вакансии';
    case StatisticTableType.RESUMES:
      return 'Название резюме';
    case StatisticTableType.COMMERCIAL_REGISTERS:
      return 'Название объекта';
  }
};
