import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import styled from 'styled-components';
import { Title } from '@app/components/dashboards/profile-info/components/IceTrades/styles/IceTradeStyles';
import {
  IceTradeHistoryDataType,
  IceTradeNamesEnum,
  IceTradesType,
} from '@app/components/dashboards/profile-info/components/IceTrades/types/IceTradeTypes';
import { getIceTradeHistoryColumns } from '@app/components/dashboards/profile-info/components/IceTrades/utils/IceTradeUtils';
import { formatDate } from '@app/utils/utils';

type MyComponentProps = {
  iceTrade: IceTradesType;
  iceTradeNamesEnum: IceTradeNamesEnum;
};

const HistoryCompletedPurchases: React.FC<MyComponentProps> = ({ iceTrade, iceTradeNamesEnum }) => {
  const [historyCompletedPurchases, setHistoryCompletedPurchases] = useState<IceTradeHistoryDataType[]>([]);
  const columns = getIceTradeHistoryColumns(iceTradeNamesEnum);

  useEffect(() => {
    setHistoryCompletedPurchases(groupingList(iceTrade));
  }, [iceTrade]);

  return (
    <>
      {Boolean(historyCompletedPurchases.length) && (
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
      )}
    </>
  );
};

const Container = styled.div`
  margin-top: 20px;
`;

const groupingList = (iceTrade: IceTradesType): IceTradeHistoryDataType[] => {
  return iceTrade
    .filter((item) => item.purchase_status === 'Состоялась')
    .map((item) => {
      return {
        short_name_participants: item.participants !== null ? item.participants : '-',
        contract_date: item.contract_date !== null ? formatDate(item.contract_date) : '-',
        description: item.description !== null ? item.description : '-',
        volume_lot: item.volume_lot !== null ? item.volume_lot : '-',
        total_price_purchase_byn: item.total_price_purchase_byn !== null ? item.total_price_purchase_byn : 0,
        total_price_purchase_usd: item.total_price_purchase_usd !== null ? item.total_price_purchase_usd : 0,
        firm_name: item.participants !== null ? item.participants : '-',
        participants_identifier: item.participants_identifier !== null ? item.participants_identifier : '-',
        short_name: item.participants !== null ? item.participants : '-',
        request_end: item.request_end !== null ? formatDate(item.request_end) : '-',
        customer_id: item.customer_id !== null ? item.customer_id : '-',
        customer_name: item.customer_name !== null ? item.customer_name : '-',
      };
    });
};

export default HistoryCompletedPurchases;
