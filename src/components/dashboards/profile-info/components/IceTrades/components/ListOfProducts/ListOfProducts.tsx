import React, { useEffect, useState } from 'react';
import { ColumnsType } from 'antd/es/table';
import { Table } from 'antd';
import styled from 'styled-components';
import {
  TableTitle,
  Title,
  TableContent,
} from '@app/components/dashboards/profile-info/components/IceTrades/styles/IceTradeStyles';
import { IceTradesType } from '@app/components/dashboards/profile-info/components/IceTrades/types/IceTradeTypes';
import { formatNumberWithCommas } from '@app/utils/utils';

//For Table

interface DataType {
  name: string;
  totalPrice: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: <TableTitle>Предмет закупки</TableTitle>,
    dataIndex: 'name',
    width: '85%',
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
  totalPrice: number;
};

type MyComponentProps = {
  iceTrade: IceTradesType;
};

const ListOfProducts: React.FC<MyComponentProps> = ({ iceTrade }) => {
  const [listOfProducts, setListOfProducts] = useState<ArrayDataType[]>([]);

  useEffect(() => {
    console.log(JSON.stringify(iceTrade));
    setListOfProducts(groupingList(iceTrade));
  }, [iceTrade]);

  return (
    <>
      {Boolean(listOfProducts.length) && (
        <Container>
          <Table
            columns={columns}
            title={() => <Title>Список товарок (услуг)</Title>}
            dataSource={listOfProducts}
            size={'small'}
            pagination={false}
            scroll={{ y: 360 }}
          />
        </Container>
      )}
    </>
  );
};

export default ListOfProducts;

const Container = styled.div``;

const groupingList = (iceTradeCustomer: IceTradesType) => {
  const groupedData: GroupedData = {};

  iceTradeCustomer.forEach((obj) => {
    const groupName = obj.participants;

    if (groupName !== null && obj.purchase_status === 'Состоялась') {
      if (!groupedData[groupName]) {
        groupedData[groupName] = {
          name: obj.title !== null ? obj.title : '--',
          totalPrice: 0,
        };
      }

      if (obj.total_price_purchase_byn !== null) {
        groupedData[groupName].totalPrice += obj.total_price_purchase_byn;
      }
    }
  });

  return Object.keys(groupedData).map((key) => ({
    name: groupedData[key].name,
    totalPrice: groupedData[key].totalPrice,
  }));
};

interface GroupedData {
  [name: string]: {
    name: string;
    totalPrice: number;
  };
}
