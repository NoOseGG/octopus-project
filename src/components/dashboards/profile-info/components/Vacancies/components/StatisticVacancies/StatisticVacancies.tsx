import React from 'react';
import styled from 'styled-components';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

type MyComponentProps = {
  statistics: { value: string; count: number }[];
};

interface DataType {
  value: string;
  count: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Год',
    dataIndex: 'value',
    width: '85%',
    render: (text) => <div style={{ fontSize: 12, lineHeight: 1.3 }}>{text}</div>,
  },
  {
    title: 'К-во',
    dataIndex: 'count',
    width: '15%',
    render: (text) => <div style={{ fontSize: 12, textAlign: 'center' }}>{text}</div>,
    sorter: (a, b) => a.count - b.count,
    showSorterTooltip: false,
  },
];

const StatisticCommercialRegister: React.FC<MyComponentProps> = ({ statistics }) => {
  console.log(statistics);
  return (
    <Container>
      <Table
        columns={columns}
        dataSource={statistics.sort((a, b) => b.count - a.count)}
        size={'small'}
        pagination={false}
        scroll={{ y: 360 }}
      />
    </Container>
  );
};

export default StatisticCommercialRegister;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
