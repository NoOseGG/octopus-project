import React from 'react';
import { Divider, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { SearchHistoryObject } from '@app/store/types/search/SearchHistory';
import { formatDateWithTime } from '@app/utils/utils';
import { SUBJECT_INFO_DASHBOARD_PATH } from '@app/components/router/AppRouter';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './styles/styles.css';
import { useAppSelector } from '@app/hooks/reduxHooks';

type MyComponentProps = {
  listHistory: SearchHistoryObject[];
};

const SearchHistory: React.FC<MyComponentProps> = ({ listHistory }) => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);

  const newListHistory = listHistory?.map((item, index) => {
    return {
      ...item,
      view_dttm: formatDateWithTime(item.view_dttm),
      key: index,
    };
  });

  const getColumns = (isSuperUser: boolean) => {
    const columns: ColumnsType<SearchHistoryObject> = [
      {
        title: <Title>УНП</Title>,
        dataIndex: 'legal_entity_id',
        render: (text) => <Content>{text}</Content>,
      },
      {
        title: <Title>Наименование</Title>,
        dataIndex: 'legal_entity_name',
        render: (text) => <Content>{text}</Content>,
      },
      {
        title: <Title>Время запроса</Title>,
        dataIndex: 'view_dttm',
        render: (text) => <Content>{text}</Content>,
      },
      {
        title: <Title>Пользователь</Title>,
        dataIndex: 'user_profile',
        render: (text) => <Content>{text}</Content>,
      },
    ];

    return isSuperUser ? columns : columns.slice(0, -1);
  };

  const handleClickRow = (value: string) => {
    navigate(`${SUBJECT_INFO_DASHBOARD_PATH}/${value}`);
  };

  return (
    <div>
      <Divider>История поиска</Divider>
      <Table
        columns={getColumns(user?.is_superuser || false)}
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

const Title = styled.div`
  font-size: 16px;

  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

const Content = styled.div`
  font-size: 12px;
  line-height: 1.2;
  word-break: break-word;

  @media (max-width: 450px) {
    font-size: 10px;
  }
`;
