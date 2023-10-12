import React from 'react';
import { IceTradeCustomer } from '@app/store/types/Subject';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import Column from 'antd/es/table/Column';
import styled from 'styled-components';
import { Table } from 'antd';

type MyComponentProps = {
  icetrade_customer: IceTradeCustomer[];
};

const SubjectIceTradeCustomer: React.FC<MyComponentProps> = ({ icetrade_customer }) => {
  return (
    <>
      <TableStyle
        dataSource={icetrade_customer}
        bordered={true}
        size={'small'}
        tableLayout={'fixed'}
        pagination={{ pageSize: 5, pageSizeOptions: [] }}
      >
        <ColumnGroup title="Закупки IceTrade">
          <Column title="Название" dataIndex="title" key="title" />
          <Column title="Сумма BYN" dataIndex="lot_price_byn" key="lot_price_byn" />
          <Column title="Дата завершения" dataIndex="request_end" key="request_end" />
        </ColumnGroup>
      </TableStyle>
    </>
  );
};

export default SubjectIceTradeCustomer;

const TableStyle = styled(Table)`
  margin-top: 10px;
`;
