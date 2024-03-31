import React from 'react';
import { Table } from 'antd';
import 'styles.css';
import { ColumnsType } from 'antd/es/table';
import { SUBJECT_INFO_DASHBOARD_PATH } from '@app/components/router/AppRouter';
import { useNavigate } from 'react-router-dom';

type DetailedTableProps<T> = {
  data: T[];
  columns: ColumnsType<T>;
};

const DetailedTable = <T extends {}>({ data, columns }: DetailedTableProps<T>) => {
  const navigate = useNavigate();

  const handleClickRow = (value: string) => {
    navigate(`${SUBJECT_INFO_DASHBOARD_PATH}/${value}`);
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      size={'small'}
      pagination={{ pageSize: 10 }}
      // onRow={(record) => ({
      //   onClick: () => {
      //     if (record.legal_entity_id !== null) handleClickRow(record.legal_entity_id);
      //   },
      // })}
      // rowClassName={() => 'custom-row'}
    ></Table>
  );
};

export default DetailedTable;
