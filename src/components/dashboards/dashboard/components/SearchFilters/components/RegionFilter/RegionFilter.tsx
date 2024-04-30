import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetRegions, setRegion } from '@app/store/slices/search/searchFiltersSlice';
import FilterSelect from '@app/components/dashboards/dashboard/components/SearchFilters/components/FilterSelect/FilterSelect';

const RegionFilter: React.FC = () => {
  const regions = useAppSelector((state) => state.searchFilters.data_filters.regions);
  const region = useAppSelector((state) => state.searchFilters.filters.regions);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetRegions());
  }, [dispatch]);

  const data = regions?.map((region, index) => {
    return {
      value: region.address_region,
      label: region.address_region,
      key: index,
    };
  });

  const onChange = (value: string) => {
    dispatch(setRegion(value));
  };

  return <FilterSelect value={region} onChange={onChange} data={data} name="Область" />;
};

export default RegionFilter;
