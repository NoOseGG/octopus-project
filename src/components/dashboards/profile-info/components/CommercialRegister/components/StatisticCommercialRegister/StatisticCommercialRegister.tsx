import React from 'react';
import styled from 'styled-components';
import { Button, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import '../../styles.css';

type MyComponentProps = {
  statistics: { value: string; count: number }[];
  addFilter: (text: string) => void;
  deleteFilter: () => void;
  selectedFilter: string | null;
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
}) => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Тип объекта',
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
        <Title>Статистика торгового реестра</Title>
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
