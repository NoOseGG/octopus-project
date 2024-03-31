import React from 'react';
import { Table } from 'antd';
import { SUBJECT_INFO_DASHBOARD_PATH } from '@app/components/router/AppRouter';
import { useNavigate } from 'react-router-dom';
import { DetailedTableObject } from '@app/interfaces/interfaces';
import './styles.css';
import { DetailsTableType, getColumns } from '@app/components/tables/DetailedTable/utils';

type DetailedTableProps = {
  data: DetailedTableObject[];
  type: DetailsTableType;
};

const DetailedTable: React.FC<DetailedTableProps> = ({ data, type }) => {
  const navigate = useNavigate();

  const handleClickRow = (value: string) => {
    navigate(`${SUBJECT_INFO_DASHBOARD_PATH}/${value}`);
  };

  return (
    <Table
      columns={getColumns(type)}
      dataSource={data}
      size={'small'}
      pagination={{ pageSize: 10, showSizeChanger: false }}
      onRow={(record: DetailedTableObject) => ({
        onClick: () => {
          if (record && record?.legal_entity_id !== null) {
            handleClickRow(record?.legal_entity_id);
          }
        },
      })}
      rowClassName={() => 'custom-row'}
    ></Table>
  );
};

export default DetailedTable;
