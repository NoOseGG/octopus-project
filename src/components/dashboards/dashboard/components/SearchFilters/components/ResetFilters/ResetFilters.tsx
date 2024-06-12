import React from 'react';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import {
  setCodeActivity,
  setDistrict,
  setRegion,
  setSettlement,
  setTypeActivity,
} from '@app/store/slices/search/searchFiltersSlice';
import { Button } from 'antd';
import styled from 'styled-components';
import { MyStyles } from '@app/styles/themes/myStyles/myStyles';

const ResetFilters: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setSettlement(null));
    dispatch(setDistrict(null));
    dispatch(setRegion(null));
    dispatch(setTypeActivity(null));
    dispatch(setCodeActivity(null));
  };
  return (
    <ResetButton size={'small'} onClick={handleClick}>
      Сбросить фильтры
    </ResetButton>
  );
};

export default ResetFilters;

const ResetButton = styled(Button)`
  height: auto;
  margin-top: 10px;
  padding: 10px 0;
  width: 100%;
  background-color: ${MyStyles.primaryColor};
  color: #fff;

  &:hover {
  }
`;
