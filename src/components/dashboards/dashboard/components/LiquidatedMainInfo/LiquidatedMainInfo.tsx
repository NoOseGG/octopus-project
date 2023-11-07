import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { mediaMax } from '@app/styles/themes/constants';
import {
  doCalculatePercentLiquidatedYear,
  doGetDataForLineChartLiquidated,
  doGetTotalCountLiquidated,
  doGetTotalCountLiquidatedLastQuarter,
  doGetTotalCountLiquidatedLastYear,
} from '@app/store/slices/legalEntityDashboard/liquidatedMainInfo';

const LiquidatedMainInfo: React.FC = () => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const isDate = useAppSelector((state) => state.searchFilters.filters.isDate);

  const { totalCountLiquidated, totalCountLiquidatedLastYear, totalCountLiquidatedLastQuarter, percent } =
    useAppSelector((state) => state.liquidatedMainInfo.liquidatedMainInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountLiquidated(filters));
    dispatch(doGetTotalCountLiquidatedLastYear(filters));
    dispatch(doGetTotalCountLiquidatedLastQuarter(filters));
    dispatch(doCalculatePercentLiquidatedYear(filters));
    dispatch(doGetDataForLineChartLiquidated(filters));
  }, [dispatch, filters]);

  return (
    <Container value={isDate}>
      <Block>
        <Title>Общее количество ликвидированных компаний</Title>
        <Content>{totalCountLiquidated}</Content>
      </Block>
      {!filters.isDate && (
        <Block>
          <Title>Количество ликвидированных компаний (год)</Title>
          <Content>
            {totalCountLiquidatedLastYear} <Percent number={percent}>({percent}%)</Percent>
          </Content>
        </Block>
      )}
      {!filters.isDate && (
        <Block>
          <Title>Количество ликвидированных компаний (квартал)</Title>
          <Content>{totalCountLiquidatedLastQuarter}</Content>
        </Block>
      )}
    </Container>
  );
};

export default LiquidatedMainInfo;

export interface GridProps {
  value: boolean;
}

const Container = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) => (props.value ? 'repeat(1, 1fr)' : 'repeat(3, 1fr)')};
  align-items: center;
`;

const Block = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
`;

interface PercentWithProps {
  number: number;
}

const Percent = styled.span<PercentWithProps>`
  color: ${(props) => {
    const number = props.number;
    if (number > 0) {
      return 'green';
    } else if (number < 0) {
      return 'red';
    } else {
      return 'black';
    }
  }};
  font-size: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;

  @media only screen and ${mediaMax.xl} {
    font-size: 16px;
  }
`;

const Content = styled.div`
  font-size: 42px;
  font-weight: 700;

  @media only screen and ${mediaMax.xl} {
    font-size: 36px;
  }
`;
