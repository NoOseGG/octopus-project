import React from 'react';
import { Table, TableColumnsType } from 'antd';
import { Resume } from '@app/store/types/Subject';
import { formatDate } from '@app/utils/utils';
import { Content } from '@app/components/dashboards/dashboard/styles/DetailedInformationCompanyStyle';
import ResumeExpand from '@app/components/tables/ResumeTable/ResumeExpand';

type MyComponentProps = {
  resumes: Resume[];
};

const ResumeTable: React.FC<MyComponentProps> = ({ resumes }) => {
  const columns: TableColumnsType<Resume> = [
    {
      title: 'Дата',
      dataIndex: 'from_dttm',
      key: 'from_dttm',
      sorter: (a, b) => {
        if (a.from_dttm === null || b.from_dttm === null) {
          return 0;
        }
        const aDate = new Date(a.from_dttm);
        const bDate = new Date(b.from_dttm);
        return aDate > bDate ? 1 : aDate < bDate ? -1 : 0;
      },
      showSorterTooltip: false,
      render: (text: string) => <Content>{formatDate(text)}</Content>,
    },
    {
      title: 'Вакансия',
      dataIndex: 'work_position',
      key: 'work_position',
      sorter: (a, b) => {
        if (a.work_position === null || b.work_position === null) {
          return 0;
        }
        return a.work_position.localeCompare(b.work_position);
      },
      showSorterTooltip: false,
      render: (text: string) => <Content>{text}</Content>,
    },
    {
      title: 'Регион',
      dataIndex: 'settlement',
      key: 'settlement',
      sorter: (a, b) => {
        if (a.settlement === null || b.settlement === null) {
          return 0;
        }
        return a.settlement.localeCompare(b.settlement);
      },
      showSorterTooltip: false,
      render: (text: string) => <Content>{text}</Content>,
    },
    {
      title: 'Зарплата',
      dataIndex: 'salary_byn',
      key: 'salary_byn',
      sorter: (a, b) => {
        if (a.salary_byn === null || b.salary_byn === null) {
          return 0;
        }
        return a.salary_byn - b.salary_byn;
      },
      showSorterTooltip: false,
      render: (text: number) => (text ? <Content>{text} BYN</Content> : <div>-</div>),
    },
    Table.EXPAND_COLUMN,
  ];

  return (
    <Table
      columns={columns}
      dataSource={resumes.map((resume, index) => {
        return { ...resume, key: index };
      })}
      size={'small'}
      pagination={{ size: 'small' }}
      expandable={{ expandedRowRender: (record) => <ResumeExpand resume={record} /> }}
    ></Table>
  );
};

export default ResumeTable;
