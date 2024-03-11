import React from 'react';
import { Divider, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { SearchHistoryObject } from '@app/store/types/search/SearchHistory';
import { formatDateWithTime } from '@app/utils/utils';
import { SUBJECT_INFO_DASHBOARD_PATH } from '@app/components/router/AppRouter';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './styles/styles.css';

type MyComponentProps = {
  listHistory: SearchHistoryObject[];
};

const SearchHistory: React.FC<MyComponentProps> = ({ listHistory }) => {
  const navigate = useNavigate();

  const newListHistory = listHistory?.map((item, index) => {
    return {
      ...item,
      view_dttm: formatDateWithTime(item.view_dttm),
      key: index,
    };
  });

  const columns: ColumnsType<SearchHistoryObject> = [
    {
      title: 'УНП',
      dataIndex: 'legal_entity_id',
      render: (text) => <Content>{text}</Content>,
    },
    {
      title: 'Наименование',
      dataIndex: 'legal_entity_name',
      render: (text) => <Content>{text}</Content>,
    },
    {
      title: 'Время запроса',
      dataIndex: 'view_dttm',
      render: (text) => <Content>{text}</Content>,
    },
    {
      title: 'Пользователь',
      dataIndex: 'user_profile',
      render: (text) => <Content>{text}</Content>,
    },
  ];

  const handleClickRow = (value: string) => {
    navigate(`${SUBJECT_INFO_DASHBOARD_PATH}/${value}`);
  };

  return (
    <div>
      <Divider>История поиска</Divider>
      <Table
        columns={columns}
        dataSource={newListHistory}
        size={'small'}
        pagination={{ pageSize: 10 }}
        onRow={(record) => ({
          onClick: () => {
            if (record.legal_entity_id !== null) handleClickRow(record.legal_entity_id);
          },
        })}
        rowClassName={() => 'custom-row'}
      ></Table>
    </div>
  );
};

export default SearchHistory;

const Content = styled.div`
  font-size: 12px;
  line-height: 1.2;
`;
