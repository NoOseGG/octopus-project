import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Select } from 'antd';
import { doGetSettlementsList, setSettlement } from '@app/store/slices/searchFiltersSlice';

const SettlementFilter: React.FC = () => {
  const settlements = useAppSelector((state) => state.searchFilters.data_filters.settlements);
  const settlement = useAppSelector((state) => state.searchFilters.filters.settlements);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetSettlementsList());
  }, [dispatch]);

  const data = settlements?.map((settlement) => {
    return {
      value: settlement.address_settlement,
      label: settlement.address_settlement,
    };
  });

  const onChange = (value: string) => {
    const settlement = value.split(' ');
    dispatch(setSettlement(settlement[1]));
  };

  return (
    <Select
      size="middle"
      showSearch
      style={{ width: 200 }}
      placeholder="Населенный пункт"
      value={settlement}
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      options={data}
    />
  );
};

export default SettlementFilter;
