import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Skeleton, Table } from 'antd';
import {
  getStateForJumpTypeActivity,
  JUMP_TYPE,
} from '@app/components/dashboards/dashboard/components/Jumps/JumpTypes';
import { getColumnsJumpTypeActivity } from '@app/components/dashboards/dashboard/components/Jumps/JumpUtils';
import { doGetJumpTypeActivity } from '@app/store/slices/legalEntityDashboard/jumps/jumpTypeActivitySlice';

export enum JUMP_SETTLEMENT_TYPE {
  PLUS = '+',
  MINUS = '-',
}

type MyComponentProps = {
  jump: JUMP_TYPE;
};

const JumpTypeActivity: React.FC<MyComponentProps> = ({ jump }) => {
  const dispatch = useAppDispatch();
  const dynamicState = useAppSelector((state) => getStateForJumpTypeActivity(state, jump));
  const result = dynamicState?.jumps.results;
  const isLoading = dynamicState?.isLoading;
  const columns = getColumnsJumpTypeActivity();

  const getData = useCallback(
    (jump) => {
      switch (jump) {
        case JUMP_TYPE.LEGAL_ENTITY:
          dispatch(doGetJumpTypeActivity());
          break;

        // Sole Trade

        case JUMP_TYPE.SOLE_TRADE:
          dispatch(doGetJumpTypeActivity());
          break;
      }
    },
    [dispatch],
  );

  useEffect(() => {
    getData(jump);
  }, [getData, jump]);

  return (
    <>
      {isLoading ? (
        <Skeleton active paragraph={{ rows: 10 }} />
      ) : (
        <>
          {Boolean(result?.length) && (
            <JumpSettlementContainer>
              <Table
                columns={columns}
                title={() => <Title>Всплеск регистраций по географическому принципу</Title>}
                dataSource={result.filter((item) => item.type_reg === JUMP_SETTLEMENT_TYPE.PLUS)}
                pagination={{ showSizeChanger: false }}
                size={'small'}
              />
              <Table
                columns={columns}
                title={() => <Title>Снижение регистраций по географическому принципу</Title>}
                dataSource={result.filter((item) => item.type_reg === JUMP_SETTLEMENT_TYPE.MINUS)}
                pagination={{ showSizeChanger: false }}
                size={'small'}
              />
            </JumpSettlementContainer>
          )}
        </>
      )}
    </>
  );
};

export default JumpTypeActivity;

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
