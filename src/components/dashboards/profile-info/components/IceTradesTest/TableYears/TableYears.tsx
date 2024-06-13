import React from 'react';
import { IceTradeCustomer } from '@app/store/types/Subject';
import styled from 'styled-components';
import { formatNumberWithCommas } from '@app/utils/utils';

type TableYearsProps = {
  icetrade: IceTradeCustomer[];
};

const TableYears: React.FC<TableYearsProps> = ({ icetrade }) => {
  const data = icetrade
    .filter((item) => item.purchase_status === 'Состоялась' && (item.contract_date || item.participants_identifier))
    .reduce<Record<number, number>>((acc, item) => {
      if (item.contract_date) {
        const year = new Date(item.contract_date).getFullYear();
        acc[year] = (acc[year] || 0) + (item.price_byn || 0);
        return acc;
      }
      return acc;
    }, {});

  const array = Object.entries(data).map(([key, value]) => ({ year: Number(key), value }));
  const fillterYear = new Date();
  fillterYear.setFullYear(new Date().getFullYear() - 4);
  const result = array
    .sort((a, b) => b.year - a.year)
    .filter((item) => item.year >= fillterYear.getFullYear())
    .reverse();

  console.log(result);

  return (
    <Container gridCountColumns={result.length}>
      {result.map((item, index) => (
        <ItemContainer key={index}>
          <ItemName>{item.year} год</ItemName>
          <ItemContent>{formatNumberWithCommas(item.value)} BYN</ItemContent>
        </ItemContainer>
      ))}
    </Container>
  );
};

export default TableYears;

type ContainerProps = {
  gridCountColumns: number;
};

const Container = styled.div<ContainerProps>`
  margin-top: 50px;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.gridCountColumns}, 1fr)`};
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.div``;

const ItemContent = styled.div``;
