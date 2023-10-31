import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Select } from 'antd';
import { doGetSettlements, setSettlement } from '@app/store/slices/searchFiltersSlice';

const SettlementFilter: React.FC = () => {
  const settlements = useAppSelector((state) => state.searchFilters.data_filters.settlements);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetSettlements());
  }, [dispatch]);

  const data = settlements.map((settlement) => {
    return {
      value: settlement.address_settlement,
      label: settlement.address_settlement,
    };
  });

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
    const settlement = value.split(' ');
    dispatch(setSettlement(settlement[1]));
  };

  const onSearch = (value: string) => {};

  return (
    <Select
      size="middle"
      showSearch
      style={{ minWidth: 200 }}
      placeholder="Населенный пункт"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      options={data}
    />
  );
};

export default SettlementFilter;
