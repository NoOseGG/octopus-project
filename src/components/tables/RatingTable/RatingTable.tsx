import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SUBJECT_INFO_DASHBOARD_PATH } from '@app/components/router/AppRouter';
import './styles.css';
import { DashboardObject, DashboardObjectForRating } from '@app/interfaces/interfaces';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Content, Title } from '@app/components/dashboards/dashboard/styles/DetailedInformationCompanyStyle';

type RatingTableProps = {
  data: DashboardObjectForRating[] | undefined;
  isLoading: boolean;
};

const RatingTable: React.FC<RatingTableProps> = ({ data, isLoading }) => {
  const navigate = useNavigate();

  const getRowClass = (record: DashboardObjectForRating) => {
    return record.highlight ? 'highlight-row' : 'custom-row';
  };

  const handleClickRow = (value: string) => {
    navigate(`${SUBJECT_INFO_DASHBOARD_PATH}/${value}`);
  };

  const columns: ColumnsType<DashboardObjectForRating> = [
    {
      title: <Title>№</Title>,
      dataIndex: 'position',
      key: 'position',
      render: (text) => <Content>{text}</Content>,
    },
    {
      title: <Title>УНП</Title>,
      dataIndex: 'legal_entity_id',
      key: 'legal_entity_id',
      render: (text) => <Content>{text}</Content>,
    },
    {
      title: <Title>Наменование</Title>,
      dataIndex: 'company_short_name',
      key: 'company_short_name',
      render: (text) => <Content>{text}</Content>,
    },
    {
      title: <Title>Оценка</Title>,
      dataIndex: 'king',
      key: 'king',
      render: (text) => <Content>{text}</Content>,
    },
  ];

  return (
    <Table
      className={'ant-table'}
      columns={columns}
      dataSource={data}
      loading={isLoading}
      size={'small'}
      pagination={false}
      onRow={(record: DashboardObject) => ({
        onClick: () => {
          if (record && record?.legal_entity_id !== null) {
            handleClickRow(record?.legal_entity_id);
          }
        },
      })}
      rowClassName={getRowClass}
    ></Table>
  );
};

export default RatingTable;
