import React, { useEffect, useState } from 'react';
import { ColumnsType } from 'antd/es/table';
import { formatDate } from '@app/utils/utils';
import { Table } from 'antd';
import styled from 'styled-components';
import {
  TableTitle,
  Title,
  TableContent,
} from '@app/components/dashboards/profile-info/components/IceTrades/styles/IceTradeStyles';
import { IceTradesType } from '@app/components/dashboards/profile-info/components/IceTrades/types/IceTradeTypes';

interface DataType {
  short_name_participants: string;
  contract_date: string;
  description: string;
  volume_lot: string;
  total_price_purchase_byn: number;
  total_price_purchase_usd: number;
  firm_name: string;
  participants_identifier: string;
  short_name: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: <TableTitle>Краткое наименование заказчика</TableTitle>,
    dataIndex: 'short_name_participants',
    render: (text) => <TableContent>{text}</TableContent>,
  },
  {
    title: <TableTitle>Дата договора</TableTitle>,
    dataIndex: 'contract_date',
    render: (text) => <TableContent>{formatDate(text)}</TableContent>,
  },
  {
    title: <TableTitle>Предмет закупки</TableTitle>,
    dataIndex: 'description',
    render: (text) => <TableContent>{text}</TableContent>,
  },
  {
    title: <TableTitle>Объём</TableTitle>,
    dataIndex: 'volume_lot',
    render: (text) => <TableContent>{text}</TableContent>,
  },
  {
    title: <TableTitle>Стоимость в белорусских рублях</TableTitle>,
    dataIndex: 'total_price_purchase_byn',
    render: (text) => <TableContent>{text.toFixed()}</TableContent>,
  },
  {
    title: <TableTitle>Стоимость в долларах</TableTitle>,
    dataIndex: 'total_price_purchase_usd',
    render: (text) => <TableContent>{text.toFixed()}</TableContent>,
  },
  {
    title: <TableTitle>Фирменное наименование поставщик</TableTitle>,
    dataIndex: 'firm_name',
    render: (text) => <TableContent>{text}</TableContent>,
  },
  {
    title: <TableTitle>УНП поставщика</TableTitle>,
    dataIndex: 'participants_identifier',
    render: (text) => <TableContent>{text}</TableContent>,
  },
  {
    title: <TableTitle>Краткое наименование поставщика</TableTitle>,
    dataIndex: 'short_name',
    render: (text) => <TableContent>{text}</TableContent>,
  },
];

type MyComponentProps = {
  iceTrade: IceTradesType;
};

const HistoryCompletedPurchases: React.FC<MyComponentProps> = ({ iceTrade }) => {
  const [historyCompletedPurchases, setHistoryCompletedPurchases] = useState<DataType[]>([]);

  useEffect(() => {
    setHistoryCompletedPurchases(groupingList(iceTrade));
  }, [iceTrade]);

  return (
    <Container>
      <Table
        columns={columns}
        title={() => <Title>История завершенных закупок</Title>}
        dataSource={historyCompletedPurchases}
        size={'small'}
        pagination={false}
        scroll={{ y: 360 }}
      />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
`;

const groupingList = (iceTrade: IceTradesType): DataType[] => {
  return iceTrade
    .filter((item) => item.purchase_status === 'Состоялась')
    .map((item) => {
      return {
        short_name_participants: item.participants !== null ? item.participants : '-',
        contract_date: item.contract_date !== null ? item.contract_date : '-',
        description: item.description !== null ? item.description : '-',
        volume_lot: item.volume_lot !== null ? item.volume_lot : '-',
        total_price_purchase_byn: item.total_price_purchase_byn !== null ? item.total_price_purchase_byn : 0,
        total_price_purchase_usd: item.total_price_purchase_usd !== null ? item.total_price_purchase_usd : 0,
        firm_name: item.participants !== null ? item.participants : '-',
        participants_identifier: item.participants_identifier !== null ? item.participants_identifier : '-',
        short_name: item.participants !== null ? item.participants : '-',
      };
    });
};

export default HistoryCompletedPurchases;
