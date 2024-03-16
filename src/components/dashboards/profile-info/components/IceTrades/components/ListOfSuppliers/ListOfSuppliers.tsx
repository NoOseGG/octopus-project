import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ColumnsType } from 'antd/es/table';
import { Table } from 'antd';
import {
  TableTitle,
  Title,
  TableContent,
} from '@app/components/dashboards/profile-info/components/IceTrades/styles/IceTradeStyles';
import { IceTradesType } from '@app/components/dashboards/profile-info/components/IceTrades/types/IceTradeTypes';
import { formatNumberWithCommas } from '@app/utils/utils';

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

const ListOfSuppliers: React.FC<MyComponentProps> = ({ iceTrade }) => {
  const [listOfSuppliers, setListOfSuppliers] = useState<ArrayDataType[]>([]);

  useEffect(() => {
    setListOfSuppliers(groupingList(iceTrade));
  }, [iceTrade]);

  return (
    <>
      {Boolean(listOfSuppliers.length) && (
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
      )}
    </>
  );
};

export default ListOfSuppliers;

const Container = styled.div``;

const groupingList = (iceTradeCustomer: IceTradesType) => {
  const groupedData: GroupedData = {};

  iceTradeCustomer.forEach((obj) => {
    const groupName = obj.participants;

    if (groupName !== null && obj.purchase_status === 'Состоялась') {
      if (!groupedData[groupName]) {
        groupedData[groupName] = {
          unn: obj.participants_identifier !== null ? obj.participants_identifier : '-',
          name: obj.participants !== null ? obj.participants : '-',
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
