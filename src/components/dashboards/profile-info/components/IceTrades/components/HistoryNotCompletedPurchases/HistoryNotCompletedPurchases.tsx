import React, { useEffect, useState } from 'react';
import { ColumnsType } from 'antd/es/table';
import { formatDate } from '@app/utils/utils';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { IceTradeCustomer } from '@app/store/types/Subject';
import { Table } from 'antd';
import styled from 'styled-components';
import {
  TableTitle,
  Title,
  TableContent,
} from '@app/components/dashboards/profile-info/components/IceTrades/styles/IceTradesStyles';

interface DataType {
  short_name_participants: string;
  contract_date: string;
  description: string;
  volume_lot: string;
  total_price_purchase_byn: string;
  total_price_purchase_usd: string;
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
    render: (text) => <TableContent>{text}</TableContent>,
  },
  {
    title: <TableTitle>Стоимость в долларах</TableTitle>,
    dataIndex: 'total_price_purchase_usd',
    render: (text) => <TableContent>{text}</TableContent>,
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

const HistoryNotCompletedPurchases: React.FC = () => {
  const iceTradeCustomer = useAppSelector((state) => state.searchProfile.profile.icetrade_customer);
  const [historyNotCompletedPurchases, setHistoryNotCompletedPurchases] = useState<DataType[]>([]);

  useEffect(() => {
    setHistoryNotCompletedPurchases(groupingList(iceTradeCustomer));
  }, [iceTradeCustomer]);

  return (
    <Container>
      <Table
        columns={columns}
        title={() => <Title>История незавершенных закупок</Title>}
        dataSource={historyNotCompletedPurchases}
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

const groupingList = (iceTradeCustomer: IceTradeCustomer[]): DataType[] => {
  return iceTradeCustomer
    .filter((item) => item.purchase_status !== 'Состоялась')
    .map((item) => {
      return {
        short_name_participants: item.participants !== null ? item.participants : '-',
        contract_date: item.contract_date !== null ? item.contract_date : '-',
        description: item.description !== null ? item.description : '-',
        volume_lot: item.volume_lot !== null ? item.volume_lot : '-',
        total_price_purchase_byn:
          item.total_price_purchase_byn !== null ? item.total_price_purchase_byn.toString() : '-',
        total_price_purchase_usd:
          item.total_price_purchase_usd !== null ? item.total_price_purchase_usd.toString() : '-',
        firm_name: item.participants !== null ? item.participants : '-',
        participants_identifier: item.participants_identifier !== null ? item.participants_identifier : '-',
        short_name: item.participants !== null ? item.participants : '-',
      };
    });
};

export default HistoryNotCompletedPurchases;
