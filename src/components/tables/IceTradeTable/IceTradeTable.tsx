import React from 'react';
import { Table } from 'antd';
import { IParticipants } from '@app/interfaces/interfaces';
import './styles.css';
import { getColumns, IceTradeTableType } from '@app/components/tables/IceTradeTable/utils';

type DetailedTableProps = {
  data: IParticipants[];
  type: IceTradeTableType;
  isLoading?: boolean;
  sizePage?: number;
};

const IceTradeTable: React.FC<DetailedTableProps> = ({ data, type, isLoading, sizePage }) => {
  // const navigate = useNavigate();
  const defaultPageSize = sizePage || 10;

  // const handleClickRow = (value: string) => {
  //   navigate(`${SUBJECT_INFO_DASHBOARD_PATH}/${value}`);
  // };

  return (
    <Table
      columns={getColumns(type)}
      dataSource={data}
      size={'small'}
      loading={isLoading}
      pagination={{ defaultPageSize: defaultPageSize, defaultCurrent: 1, pageSizeOptions: [5, 10, 20, 50, 100] }}
      // onRow={(record: DashboardObject) => ({
      //   onClick: () => {
      //     if (record && record?.legal_entity_id !== null) {
      //       handleClickRow(record?.legal_entity_id);
      //     }
      //   },
      // })}
      rowClassName={() => 'custom-row'}
    ></Table>
  );
};

export default IceTradeTable;
