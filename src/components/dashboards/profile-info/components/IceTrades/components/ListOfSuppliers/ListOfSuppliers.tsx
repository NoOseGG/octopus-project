import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { IceTradeCustomer } from '@app/store/types/Subject';
import styled from 'styled-components';
import { ColumnsType } from 'antd/es/table';
import { Table } from 'antd';
import { TableTitle, Title } from '@app/components/dashboards/profile-info/components/IceTrades/styles/IceTradesStyles';

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
    render: (text) => <div style={{ fontSize: 12, lineHeight: 1.3 }}>{text}</div>,
  },
  {
    title: <TableTitle>Название организации</TableTitle>,
    dataIndex: 'name',
    width: '60%',
    render: (text) => <div style={{ fontSize: 12 }}>{text}</div>,
  },
  {
    title: <TableTitle>Сумма</TableTitle>,
    dataIndex: 'totalPrice',
    width: '15%',
    render: (text) => <div style={{ fontSize: 12, textAlign: 'center' }}>{text.toFixed(1)}</div>,
  },
];

// ------------------------

type ArrayDataType = {
  name: string;
  unn: string;
  totalPrice: number;
};

const ListOfSuppliers: React.FC = () => {
  const iceTradeCustomer = useAppSelector((state) => state.searchProfile.profile.icetrade_customer);
  const [listOfSuppliers, setListOfSuppliers] = useState<ArrayDataType[]>([]);

  useEffect(() => {
    console.log(JSON.stringify(iceTradeCustomer));
    setListOfSuppliers(groupingList(iceTradeCustomer));
  }, [iceTradeCustomer]);

  useEffect(() => {
    console.log(JSON.stringify(listOfSuppliers));
  }, [listOfSuppliers]);

  return (
    <Container>
      <Table
        columns={columns}
        title={() => <Title>Список поставщиков</Title>}
        dataSource={listOfSuppliers}
        size={'small'}
        pagination={false}
        scroll={{ y: 360 }}
      />
    </Container>
  );
};

export default ListOfSuppliers;

const Container = styled.div``;

const groupingList = (iceTradeCustomer: IceTradeCustomer[]) => {
  const groupedData: GroupedData = {};

  iceTradeCustomer.forEach((obj) => {
    const groupName = obj.participants;

    if (groupName !== null && obj.purchase_status === 'Состоялась') {
      if (!groupedData[groupName]) {
        groupedData[groupName] = {
          unn: obj.participants_identifier !== null ? obj.participants_identifier : '-',
          name: obj.participants !== null ? obj.participants : '--',
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
