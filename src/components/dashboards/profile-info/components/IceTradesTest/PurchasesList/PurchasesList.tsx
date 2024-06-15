import React from 'react';

import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';

import { IceTradeCustomer } from '@app/store/types/Subject';
import { IceTradeTableType } from '@app/components/tables/IceTradeTable/utils';
import IceTradeTable from '@app/components/tables/IceTradeTable/IceTradeTable';
import styled from 'styled-components';
import { formatDate } from '@app/utils/utils';

type PurchasesProps = {
  icetrade: IceTradeCustomer[];
};

const PurchasesList: React.FC<PurchasesProps> = ({ icetrade }) => {
  const data = icetrade.map((item) => {
    return {
      name: item.title || '-',
      sum: item.price_byn?.toFixed() || '0',
      date: formatDate(item.contract_date) || '-',
      participant: item.participants || '-',
    };
  });

  return (
    <Container>
      <S.Title>Сведения о закупках</S.Title>
      <IceTradeTable data={data} type={IceTradeTableType.COMPLETED_PURCHASES} />
    </Container>
  );
};

export default PurchasesList;

const Container = styled.div`
  width: 50%;
`;
