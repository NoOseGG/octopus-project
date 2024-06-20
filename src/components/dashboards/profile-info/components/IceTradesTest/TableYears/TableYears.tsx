import React from 'react';
import { IceTradeCustomer } from '@app/store/types/Subject';
import styled from 'styled-components';
import { formatNumberWithCommas } from '@app/utils/utils';

type TableYearsProps = {
  completedIcetrade: IceTradeCustomer[];
};

const TableYears: React.FC<TableYearsProps> = ({ completedIcetrade }) => {
  const data = completedIcetrade.reduce<Record<number, number>>((acc, item) => {
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

  return (
    <>
      <Sum>{formatNumberWithCommas(result.reduce((acc, item) => acc + item.value, 0))}</Sum>
      <Container gridCountColumns={result.length}>
        {result.map((item, index) => (
          <ItemContainer key={index}>
            <ItemName>{item.year}</ItemName>
            <ItemContent>{formatNumberWithCommas(item.value)} руб.</ItemContent>
          </ItemContainer>
        ))}
      </Container>
    </>
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
  border: 1px solid #000;
  border-radius: 14px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    border-right: 1px solid #000;
  }
`;

const ItemName = styled.div`
  font-size: 20px;
  text-align: center;
`;

const ItemContent = styled.div`
  margin-top: 20px;
  font-size: 18px;
  text-align: center;
`;

const Sum = styled.div`
  text-align: center;
`;
