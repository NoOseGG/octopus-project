import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Select } from 'antd';
import { doGetDistricts } from '@app/store/slices/searchFiltersSlice';

const DistrictFilter: React.FC = () => {
  const districts = useAppSelector((state) => state.searchFilters.data_filters.districts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetDistricts());
  }, [dispatch]);

  const data = districts.map((district) => {
    return {
      value: district.address_district,
      label: district.address_district,
    };
  });

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {};

  return (
    <Select
      size="middle"
      showSearch
      style={{ minWidth: 200 }}
      placeholder="Район"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      options={data}
    />
  );
};

export default DistrictFilter;
