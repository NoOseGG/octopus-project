import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Select } from 'antd';
import { doGetRegions, setRegion } from '@app/store/slices/searchFiltersSlice';
import {
  PlaceholderText,
  filterStyle,
} from '@app/components/dashboards/dashboard/components/SearchFilters/styles/SearchFiltersStyles';

const RegionFilter: React.FC = () => {
  const regions = useAppSelector((state) => state.searchFilters.data_filters.regions);
  const region = useAppSelector((state) => state.searchFilters.filters.regions);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetRegions());
  }, [dispatch]);

  const data = regions?.map((region) => {
    return {
      value: region.address_region,
      label: region.address_region,
    };
  });

  const onChange = (value: string) => {
    dispatch(setRegion(value));
  };

  return (
    <Select
      size="small"
      showSearch
      style={filterStyle}
      placeholder={<PlaceholderText>Область</PlaceholderText>}
      optionFilterProp="children"
      value={region}
      onChange={onChange}
      filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      options={data}
    />
  );
};

export default RegionFilter;
