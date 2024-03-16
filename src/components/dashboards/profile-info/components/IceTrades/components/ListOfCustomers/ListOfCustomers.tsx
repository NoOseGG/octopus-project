import React, { useEffect, useState } from 'react';
import { ColumnsType } from 'antd/es/table';
import {
  TableContent,
  TableTitle,
  Title,
} from '@app/components/dashboards/profile-info/components/IceTrades/styles/IceTradeStyles';
import { formatNumberWithCommas } from '@app/utils/utils';
import { IceTradesType } from '@app/components/dashboards/profile-info/components/IceTrades/types/IceTradeTypes';
import { Table } from 'antd';
import styled from 'styled-components';

//For Table

interface DataType {
  unn: string;
  name: string;
  totalPrice: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: <TableTitle>УНП</TableTitle>,
    dataIndex: 'unn',
    width: '25%',
    render: (text) => <TableContent>{text}</TableContent>,
  },
  {
    title: <TableTitle>Название организации</TableTitle>,
    dataIndex: 'name',
    width: '60%',
    render: (text) => <TableContent>{text}</TableContent>,
  },
  {
    title: <TableTitle>Сумма</TableTitle>,
    dataIndex: 'totalPrice',
    width: '15%',
    render: (text) => <TableContent>{formatNumberWithCommas(text.toFixed())}</TableContent>,
    sorter: (a, b) => a.totalPrice - b.totalPrice,
    showSorterTooltip: false,
  },
];

// ------------------------

type ArrayDataType = {
  name: string;
  unn: string;
  totalPrice: number;
};

type MyComponentProps = {
  iceTrade: IceTradesType;
};

const ListOfCustomers: React.FC<MyComponentProps> = ({ iceTrade }) => {
  const [listOfCustomers, setListOfCustomers] = useState<ArrayDataType[]>([]);

  useEffect(() => {
    setListOfCustomers(groupingList(iceTrade));
  }, [iceTrade]);

  return (
    <>
      {Boolean(listOfCustomers.length) && (
        <Container>
          <Table
            columns={columns}
            title={() => <Title>Список заказчиков</Title>}
            dataSource={listOfCustomers}
            size={'small'}
            pagination={false}
            scroll={{ y: 360 }}
          />
        </Container>
      )}
    </>
  );
};

export default ListOfCustomers;

const Container = styled.div``;

const groupingList = (iceTradeCustomer: IceTradesType) => {
  const groupedData: GroupedData = {};

  iceTradeCustomer.forEach((obj) => {
    const groupName = obj.customer_name;

    if (groupName !== null && obj.purchase_status === 'Состоялась') {
      if (!groupedData[groupName]) {
        groupedData[groupName] = {
          unn: obj.customer_id !== null ? obj.customer_id : '-',
          name: obj.customer_name !== null ? obj.customer_name : '-',
          totalPrice: 0,
        };
      }

      if (obj.total_price_purchase_byn !== null) {
        groupedData[groupName].totalPrice += obj.total_price_purchase_byn;
      }
    }
  });

  return Object.keys(groupedData).map((key) => ({
    name: key,
    unn: groupedData[key].unn,
    totalPrice: groupedData[key].totalPrice,
  }));
};

interface GroupedData {
  [name: string]: {
    unn: string;
    name: string;
    totalPrice: number;
  };
}
