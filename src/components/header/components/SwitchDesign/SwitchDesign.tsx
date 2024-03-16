import React from 'react';
import { Switch } from 'antd';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { changeDesign } from '@app/store/slices/search/designSlice';
import styled from 'styled-components';

const SwitchDesign: React.FC = () => {
  const { isNewDesign } = useAppSelector((state) => state.design);
  const dispatch = useAppDispatch();

  const handleChangeDesign = () => {
    dispatch(changeDesign());
  };

  return (
    <Container>
      <Switch checked={isNewDesign} onClick={handleChangeDesign} />
    </Container>
  );
};

export default SwitchDesign;

const Container = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
