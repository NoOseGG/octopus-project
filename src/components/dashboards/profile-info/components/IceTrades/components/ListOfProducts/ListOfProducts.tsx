import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { ColumnsType } from 'antd/es/table';
import { IceTradeCustomer } from '@app/store/types/Subject';
import { Table, Typography } from 'antd';
import styled from 'styled-components';

//For Table

interface DataType {
  name: string;
  totalPrice: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Предмет закупки',
    dataIndex: 'name',
    width: '85%',
    render: (text) => <div style={{ fontSize: 12, lineHeight: 1.3 }}>{text}</div>,
  },
  {
    title: 'Сумма',
    dataIndex: 'totalPrice',
    width: '15%',
    render: (text) => <div style={{ fontSize: 12, textAlign: 'center' }}>{text.toFixed(1)}</div>,
  },
];

// ------------------------

type ArrayDataType = {
  name: string;
  totalPrice: number;
};

const ListOfProducts: React.FC = () => {
  const iceTradeCustomer = useAppSelector((state) => state.searchProfile.profile.icetrade_customer);
  const [listOfProducts, setListOfProducts] = useState<ArrayDataType[]>([]);

  useEffect(() => {
    console.log(JSON.stringify(iceTradeCustomer));
    setListOfProducts(groupingList(iceTradeCustomer));
  }, [iceTradeCustomer]);

  return (
    <Container>
      <Table
        columns={columns}
        title={() => (
          <Typography.Text style={{ fontSize: 20, fontWeight: 550 }}>Список товарок (услуг)</Typography.Text>
        )}
        dataSource={listOfProducts}
        size={'small'}
        pagination={false}
        scroll={{ y: 360 }}
      />
    </Container>
  );
};

export default ListOfProducts;

const Container = styled.div``;

const groupingList = (iceTradeCustomer: IceTradeCustomer[]) => {
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
