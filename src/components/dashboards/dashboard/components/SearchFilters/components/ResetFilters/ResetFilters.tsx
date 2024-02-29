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
    <Button style={{ marginTop: 10, width: '100%' }} size={'small'} type="primary" onClick={handleClick}>
      Сбросить фильтры
    </Button>
  );
};

export default ResetFilters;
