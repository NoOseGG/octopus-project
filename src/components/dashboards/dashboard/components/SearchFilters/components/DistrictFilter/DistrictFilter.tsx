import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Select } from 'antd';
import { doGetDistrictsList, setDistrict } from '@app/store/slices/search/searchFiltersSlice';
import {
  PlaceholderText,
  filterStyle,
} from '@app/components/dashboards/dashboard/components/SearchFilters/styles/SearchFiltersStyles';

const DistrictFilter: React.FC = () => {
  const districts = useAppSelector((state) => state.searchFilters.data_filters.districts);
  const district = useAppSelector((state) => state.searchFilters.filters.districts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetDistrictsList());
  }, [dispatch]);

  const data = districts?.map((district) => {
    return {
      value: district.address_district,
      label: district.address_district,
    };
  });

  const onChange = (value: string) => {
    dispatch(setDistrict(value));
  };

  return (
    <Select
      size="small"
      showSearch
      style={filterStyle}
      placement={'bottomRight'}
      placeholder={<PlaceholderText>Район</PlaceholderText>}
      value={district}
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      options={data}
    />
  );
};

export default DistrictFilter;
