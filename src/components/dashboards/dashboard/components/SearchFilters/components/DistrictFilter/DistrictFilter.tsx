import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetDistrictsList, setDistrict } from '@app/store/slices/search/searchFiltersSlice';
import FilterSelect from '@app/components/dashboards/dashboard/components/SearchFilters/components/FilterSelect/FilterSelect';

const DistrictFilter: React.FC = () => {
  const districts = useAppSelector((state) => state.searchFilters.data_filters.districts);
  const district = useAppSelector((state) => state.searchFilters.filters.districts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetDistrictsList());
  }, [dispatch]);

  const data = districts?.map((district, index) => {
    return {
      value: district.address_district,
      label: district.address_district,
      key: index,
    };
  });

  const onChange = (value: string) => {
    dispatch(setDistrict(value));
  };

  return <FilterSelect value={district} onChange={onChange} data={data} name="Район" />;
};

export default DistrictFilter;
