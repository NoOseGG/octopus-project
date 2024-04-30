import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetTypeActivitiesList, setTypeActivity } from '@app/store/slices/search/searchFiltersSlice';
import FilterSelect from '@app/components/dashboards/dashboard/components/SearchFilters/components/FilterSelect/FilterSelect';

const TypeActivityFilter: React.FC = () => {
  const activities = useAppSelector((state) => state.searchFilters.data_filters.typeActivities);
  const typeActivity = useAppSelector((state) => state.searchFilters.filters.typeActivities);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTypeActivitiesList());
  }, [dispatch]);

  const data = activities?.map((activity, index) => {
    return {
      value: activity,
      label: activity,
      key: index,
    };
  });

  const onChange = (value: string) => {
    dispatch(setTypeActivity(value));
  };

  return <FilterSelect value={typeActivity} onChange={onChange} data={data} name="Вид деятельности" />;
};

export default TypeActivityFilter;
