import React from 'react';
import { IceTradeCustomer } from '@app/store/types/Subject';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import IceTradeTable from '@app/components/tables/IceTradeTable/IceTradeTable';
import { IceTradeTableType } from '@app/components/tables/IceTradeTable/utils';
import styled from 'styled-components';

type ParticipantsSumListProps = {
  icetrade: IceTradeCustomer[];
};

const ParticipantsSumList: React.FC<ParticipantsSumListProps> = ({ icetrade }) => {
  const data = icetrade
    .filter((item) => item.participants)
    .reduce<Record<string, number>>((acc, item) => {
      if (item.participants && item.price_byn) {
        acc[item.participants] = (acc[item.participants] || 0) + item.price_byn;
        return acc;
      }
      return acc;
    }, {});

  const result = Object.entries(data).map(([key, value]) => ({ name: key, sum: value.toFixed() }));
  console.log(icetrade);
  console.log(result);

  return (
    <Container>
      <S.Title>Сведения об исполнителях</S.Title>
      <IceTradeTable data={result} type={IceTradeTableType.COMPLETED_PARTICIPANTS} />
    </Container>
  );
};

export default ParticipantsSumList;

const Container = styled.div`
  width: 50%;
`;
