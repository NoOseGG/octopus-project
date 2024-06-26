import React from 'react';
import { Table } from 'antd';
import { SUBJECT_INFO_DASHBOARD_PATH } from '@app/components/router/AppRouter';
import { useNavigate } from 'react-router-dom';
import { DashboardObject } from '@app/interfaces/interfaces';
import './styles.css';
import { DetailsTableType, getColumns } from '@app/components/tables/DetailedTable/utils';

type DetailedTableProps = {
  data: DashboardObject[];
  type: DetailsTableType;
  isLoading?: boolean;
  sizePage?: number;
};

const DetailedTable: React.FC<DetailedTableProps> = ({ data, type, isLoading, sizePage }) => {
  const navigate = useNavigate();
  const defaultPageSize = sizePage || 10;

  const handleClickRow = (value: string) => {
    navigate(`${SUBJECT_INFO_DASHBOARD_PATH}/${value}`);
  };

  return (
    <Table
      columns={getColumns(type)}
      dataSource={data}
      size={'small'}
      loading={isLoading}
      pagination={{ defaultPageSize: defaultPageSize, defaultCurrent: 1, pageSizeOptions: [5, 10, 20, 50, 100] }}
      onRow={(record: DashboardObject) => ({
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
