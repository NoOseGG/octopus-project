import React from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import {
  setCodeActivity,
  setDistrict,
  setRegion,
  setSettlement,
  setTypeActivity,
} from '@app/store/slices/searchFiltersSlice';

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
    <div>
      <CloseOutlined height={64} width={64} style={{ cursor: 'pointer' }} onClick={handleClick} />
    </div>
  );
};

export default ResetFilters;
