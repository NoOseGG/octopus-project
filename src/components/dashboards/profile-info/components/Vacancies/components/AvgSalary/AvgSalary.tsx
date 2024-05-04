import React from 'react';
import styled from 'styled-components';
import { formatNumberWithCommas } from '@app/utils/utils';

type MyComponentProps = {
  avgSalaryBYN: string;
  avgSalaryUSD: string;
};

const AvgSalary: React.FC<MyComponentProps> = ({ avgSalaryBYN, avgSalaryUSD }) => {
  return (
    <>
      <Title>Средний уровень предлаемой зарплаты</Title>
      <AvgSalaryContainer>
        {Boolean(Number(avgSalaryBYN)) && (
          <Avg>
            <span>В белорусских рублях - {formatNumberWithCommas(Number(avgSalaryBYN))}</span>
          </Avg>
        )}
        {Boolean(Number(avgSalaryUSD)) && (
          <Avg>
            <span>В долларах США - {formatNumberWithCommas(Number(avgSalaryUSD))}</span>
          </Avg>
        )}
      </AvgSalaryContainer>
    </>
  );
};

export default AvgSalary;

const AvgSalaryContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Avg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin: 10px 0;
  font-size: 18px;
  font-weight: 700;
`;
