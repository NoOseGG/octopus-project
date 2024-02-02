import React, { useEffect, useState } from 'react';
import { ColumnsType } from 'antd/es/table';
import { formatDate } from '@app/utils/utils';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { IceTradeCustomer } from '@app/store/types/Subject';
import { Table } from 'antd';
import styled from 'styled-components';

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
    title: 'Краткое наименование заказчика',
    dataIndex: 'short_name_participants',
    render: (text) => <div style={{ fontSize: 12, lineHeight: 1.3 }}>{text}</div>,
  },
  {
    title: 'Дата договора',
    dataIndex: 'contract_date',
    render: (text) => <div style={{ fontSize: 12 }}>{formatDate(text)}</div>,
  },
  {
    title: 'Предмет закупки',
    dataIndex: 'description',
    render: (text) => <div style={{ fontSize: 12, textAlign: 'center' }}>{text}</div>,
  },
  {
    title: 'Объём',
    dataIndex: 'volume_lot',
    render: (text) => <div style={{ fontSize: 12, textAlign: 'center' }}>{text}</div>,
  },
  {
    title: 'Стоимость в белорусских рублях',
    dataIndex: 'total_price_purchase_byn',
    render: (text) => <div style={{ fontSize: 12, textAlign: 'center' }}>{text}</div>,
  },
  {
    title: 'Стоимость в долларах',
    dataIndex: 'total_price_purchase_usd',
    render: (text) => <div style={{ fontSize: 12, textAlign: 'center' }}>{text}</div>,
  },
  {
    title: 'Фирменное наименование поставщик',
    dataIndex: 'firm_name',
    render: (text) => <div style={{ fontSize: 12, textAlign: 'center' }}>{text}</div>,
  },
  {
    title: 'УНП поставщика',
    dataIndex: 'participants_identifier',
    render: (text) => <div style={{ fontSize: 12, textAlign: 'center' }}>{text}</div>,
  },
  {
    title: 'Краткое наименование поставщика',
    dataIndex: 'short_name',
    render: (text) => <div style={{ fontSize: 12, textAlign: 'center' }}>{text}</div>,
  },
];

const HistoryCompletedPurchases: React.FC = () => {
  const iceTradeCustomer = useAppSelector((state) => state.searchProfile.profile.icetrade_customer);
  const [historyCompletedPurchases, setHistoryCompletedPurchases] = useState<DataType[]>([]);

  useEffect(() => {
    setHistoryCompletedPurchases(groupingList(iceTradeCustomer));
  }, [iceTradeCustomer]);

  return (
    <Container>
      <Table
        columns={columns}
        dataSource={historyCompletedPurchases}
        size={'small'}
        pagination={false}
        scroll={{ y: 500 }}
      />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
`;

const groupingList = (iceTradeCustomer: IceTradeCustomer[]): DataType[] => {
  return iceTradeCustomer.map((item) => {
    return {
      short_name_participants: item.participants !== null ? item.participants : '-',
      contract_date: item.contract_date !== null ? item.contract_date : '-',
      description: item.description !== null ? item.description : '-',
      volume_lot: item.volume_lot !== null ? item.volume_lot : '-',
      total_price_purchase_byn: item.total_price_purchase_byn !== null ? item.total_price_purchase_byn.toString() : '-',
      total_price_purchase_usd: item.total_price_purchase_usd !== null ? item.total_price_purchase_usd.toString() : '-',
      firm_name: item.participants !== null ? item.participants : '-',
      participants_identifier: item.participants_identifier !== null ? item.participants_identifier : '-',
      short_name: item.participants !== null ? item.participants : '-',
    };
  });
};

export default HistoryCompletedPurchases;
