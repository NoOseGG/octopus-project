import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetJumpSettlement } from '@app/store/slices/legalEntityDashboard/jumps/jumpSettlementSlice';

const JumpSettlement: React.FC = () => {
  const { jumps } = useAppSelector((state) => state.jump.jumpSettlement);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetJumpSettlement());
  }, [dispatch]);

  useEffect(() => {
    console.log(JSON.stringify(jumps.results));
  }, [jumps.results]);

  return <JumpSettlementContainer></JumpSettlementContainer>;
};

export default JumpSettlement;

const JumpSettlementContainer = styled.div``;
