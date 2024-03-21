import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetJumpSettlement } from '@app/store/slices/legalEntityDashboard/jumps/jumpSettlementSlice';
import { ColumnsType } from 'antd/es/table';
import { Table } from 'antd';
import { getNameMonthByNumber } from '@app/utils/utils';

export enum JUMP_SETTLEMENT_TYPE {
  PLUS = '+',
  MINUS = '-',
}

interface DataType {
  id: number;
  settlement: string;
  legal_form_id: string;
  count_reg: number;
  avg_reg: number;
  reg_month: string;
  reg_year: number;
  type_reg: string;
}

const JumpSettlement: React.FC = () => {
  const { jumps } = useAppSelector((state) => state.jump.jumpSettlement);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetJumpSettlement());
  }, [dispatch]);

  useEffect(() => {
    console.log(JSON.stringify(jumps.results));
  }, [jumps]);

  const columns: ColumnsType<DataType> = [
    {
      title: 'Месяц',
      dataIndex: 'reg_month',
      width: '10%',
      render: (text) => <Content>{getNameMonthByNumber(parseInt(text, 10))}</Content>,
    },
    {
      title: 'Год',
      dataIndex: 'reg_year',
      width: '10%',
      render: (text) => <Content>{text}</Content>,
    },
    {
      title: 'Населенный пункт',
      dataIndex: 'settlement',
      width: '60%',
      render: (text) => <Content>{text}</Content>,
    },
    {
      title: 'Количество регистраций',
      dataIndex: 'count_reg',
      width: '10%',
      render: (text) => <Content>{text}</Content>,
    },
    {
      title: 'Среднее количество регистраций',
      dataIndex: 'avg_reg',
      width: '10%',
      render: (text) => <Content>{text}</Content>,
    },
  ];

  return (
    <JumpSettlementContainer>
      <Table
        columns={columns}
        title={() => <Title>Всплеск регистраций по географическому принципу</Title>}
        dataSource={jumps.results
          .filter((item) => item.type_reg === JUMP_SETTLEMENT_TYPE.PLUS)
          .sort((a, b) => {
            if (b.reg_year !== a.reg_year) {
              return b.reg_year - a.reg_year;
            }
            return parseInt(b.reg_month, 10) - parseInt(a.reg_month, 10);
          })}
        pagination={{ showSizeChanger: false }}
        size={'small'}
      />
      <Table
        columns={columns}
        title={() => <Title>Снижение регистраций по географическому принципу</Title>}
        dataSource={jumps.results
          .filter((item) => item.type_reg === JUMP_SETTLEMENT_TYPE.MINUS)
          .sort((a, b) => {
            if (b.reg_year !== a.reg_year) {
              return b.reg_year - a.reg_year;
            }
            return parseInt(b.reg_month, 10) - parseInt(a.reg_month, 10);
          })}
        pagination={{ showSizeChanger: false }}
        size={'small'}
      />
    </JumpSettlementContainer>
  );
};

export default JumpSettlement;

const JumpSettlementContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const Content = styled.div`
  font-size: 12px;
  line-height: 1.2;
  text-align: center;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;
