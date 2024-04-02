import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Table } from 'antd';
import styled from 'styled-components';
import { ColumnsType } from 'antd/es/table/Table';
import { TaxOfficeArrea } from '@app/store/types/Subject';
import { formatDate } from '@app/utils/utils';

const TaxOfficesArrearsTest: React.FC = () => {
  const tax_offices_arrears = useAppSelector((state) => state.searchProfile.profile.tax_offices_arrears);

  const columns: ColumnsType<TaxOfficeArrea> = [
    {
      key: 'name',
      title: <TableTitle>Кредитор</TableTitle>,
      dataIndex: 'name',
      width: 70,
      render: (text) => <TableText>{text}</TableText>,
    },
    {
      key: 'from_dttm',
      title: <TableTitle>Дата возникновения требования</TableTitle>,
      dataIndex: 'from_dttm',
      width: 30,
      align: 'center',
      render: (text) => <TableText>{formatDate(text)}</TableText>,
    },
  ];

  return (
    <>
      {Boolean(tax_offices_arrears.length) && (
        <S.Container>
          <S.Title>Информация о наличии задолженности перед государственными органами</S.Title>
          <Table
            columns={columns}
            dataSource={tax_offices_arrears}
            title={() => <TableText />}
            size={'small'}
            pagination={false}
            scroll={{ y: 360 }}
          />
          <S.MyDivider />
        </S.Container>
      )}
    </>
  );
};

export default TaxOfficesArrearsTest;

const TableTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const TableText = styled.span`
  font-size: 14px;
`;
