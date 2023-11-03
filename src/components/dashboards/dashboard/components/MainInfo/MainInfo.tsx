import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import {
  doCalculatePercentYear,
  doGetTotalCountCreated,
  doGetTotalCountCreatedLastQuarter,
  doGetTotalCountCreatedLastYear,
  doGetTotalCountOperatingCompany,
} from '@app/store/slices/dashboardSlice';
import { mediaMax } from '@app/styles/themes/constants';

const MainInfo: React.FC = () => {
  const filters = useAppSelector((state) => state.searchFilters.filters);
  const isDate = useAppSelector((state) => state.searchFilters.filters.isDate);

  const {
    totalCountCreated,
    totalCountCreatedLastYear,
    totalCountCreatedLastQuarter,
    totalCountOperatingCompany,
    percent,
  } = useAppSelector((state) => state.dashboard.mainInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTotalCountCreated(filters));
    dispatch(doGetTotalCountCreatedLastYear(filters));
    dispatch(doGetTotalCountCreatedLastQuarter(filters));
    dispatch(doGetTotalCountOperatingCompany(filters));
    dispatch(doCalculatePercentYear(filters));
  }, [dispatch, filters]);

  return (
    <Container value={isDate}>
      <Block>
        <Title>Общее количество созданных компаний</Title>
        <Content>{totalCountCreated}</Content>
      </Block>
      {!filters.isDate && (
        <Block>
          <Title>Количество созданных компаний (год)</Title>
          <Content>
            {totalCountCreatedLastYear} <Percent number={percent}>({percent}%)</Percent>
          </Content>
        </Block>
      )}
      {!filters.isDate && (
        <Block>
          <Title>Количество созданных компаний (квартал)</Title>
          <Content>{totalCountCreatedLastQuarter}</Content>
        </Block>
      )}
      <Block>
        <Title>Действующие компании</Title>
        <Content>{totalCountOperatingCompany}</Content>
      </Block>
    </Container>
  );
};

export default MainInfo;

export interface GridProps {
  value: boolean;
}

const Container = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) => (props.value ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)')};
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
