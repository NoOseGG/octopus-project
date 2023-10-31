import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Select } from 'antd';
import { doGetDistricts, setDistrict } from '@app/store/slices/searchFiltersSlice';

const DistrictFilter: React.FC = () => {
  const districts = useAppSelector((state) => state.searchFilters.data_filters.districts);
  const district = useAppSelector((state) => state.searchFilters.filters.districts);
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
    console.log(`district => ${value}`);
    dispatch(setDistrict(value));
  };

  return (
    <Select
      size="middle"
      showSearch
      style={{ minWidth: 200 }}
      placeholder="Район"
      value={district}
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      options={data}
    />
  );
};

export default DistrictFilter;
