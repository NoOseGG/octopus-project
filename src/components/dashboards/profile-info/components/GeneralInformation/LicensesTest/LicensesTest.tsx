import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { ColumnsType } from 'antd/es/table/Table';
import { Table } from 'antd';
import { License } from '@app/store/types/Subject';
import styled from 'styled-components';

const LicensesTest: React.FC = () => {
  const licenses = useAppSelector((state) => state.searchProfile.profile.licenses);

  const columns: ColumnsType<License> = [
    {
      key: 'license_name',
      title: <TableTitle>Название</TableTitle>,
      dataIndex: 'license_name',
      render: (text) => <TableText>{text}</TableText>,
    },
    {
      key: 'state_body_name',
      title: <TableTitle>Орган выдавший</TableTitle>,
      dataIndex: 'state_body_name',
      render: (text) => <TableText>{text}</TableText>,
    },
    {
      key: 'from_dttm',
      title: <TableTitle>Дата начала действия</TableTitle>,
      dataIndex: 'from_dttm',
      render: (text) => <TableText>{text}</TableText>,
    },
    {
      key: 'status_name',
      title: <TableTitle>Статус</TableTitle>,
      dataIndex: 'status_name',
      render: (text) => <TableText>{text}</TableText>,
    },
    {
      key: 'license_number',
      title: <TableTitle>Номер лицензии</TableTitle>,
      dataIndex: 'license_number',
      render: (text) => <TableText>{text}</TableText>,
    },
  ];

  return (
    <>
      {Boolean(licenses.length) && (
        <S.Container>
          <S.Title>Лицензии и иные государственные решения</S.Title>
          <Table
            columns={columns}
            dataSource={licenses}
            title={() => <TableText />}
            size={'small'}
            pagination={false}
            scroll={{ y: 360 }}
          />
        </S.Container>
      )}
    </>
  );
};

export default LicensesTest;

const TableTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const TableText = styled.span`
  font-size: 14px;
`;
