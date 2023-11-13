import React from 'react';
import { Divider, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { SearchHistoryObject } from '@app/store/types/search/SearchHistory';
import { formatDateWithTime } from '@app/utils/utils';
import styles from '@app/components/dashboards/search-dashboard/subjectsList/subject-item/SubjectItem.module.css';
import { SUBJECT_INFO_DASHBOARD_PATH } from '@app/components/router/AppRouter';
import { Link } from 'react-router-dom';

type MyComponentProps = {
  listHistory: SearchHistoryObject[];
};

const SearchHistory: React.FC<MyComponentProps> = ({ listHistory }) => {
  const newListHistory = listHistory.map((item, index) => {
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
      render: (text, record) => (
        <Link className={styles.link} to={`${SUBJECT_INFO_DASHBOARD_PATH}/${record.legal_entity_id}`}>
          <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>{text}</span>
        </Link>
      ),
    },
    {
      title: 'Время запроса',
      dataIndex: 'view_dttm',
    },
    {
      title: 'Пользователь',
      dataIndex: 'user',
    },
  ];

  return (
    <div>
      <Divider>История поиска</Divider>
      <Table columns={columns} dataSource={newListHistory} size={'small'} pagination={{ pageSize: 30 }}></Table>
    </div>
  );
};

export default SearchHistory;
