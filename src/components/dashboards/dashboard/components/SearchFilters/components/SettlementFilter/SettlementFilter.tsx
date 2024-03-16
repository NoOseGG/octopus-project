import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Select } from 'antd';
import { doGetSettlementsList, setSettlement } from '@app/store/slices/search/searchFiltersSlice';
import {
  PlaceholderText,
  filterStyle,
} from '@app/components/dashboards/dashboard/components/SearchFilters/styles/SearchFiltersStyles';

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
      size="small"
      showSearch
      style={filterStyle}
      placement={'bottomRight'}
      placeholder={<PlaceholderText>Населенный пункт</PlaceholderText>}
      value={settlement}
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      options={data}
    />
  );
};

export default SettlementFilter;
