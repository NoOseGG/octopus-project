import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Select } from 'antd';
import { doGetTypeActivitiesList, setTypeActivity } from '@app/store/slices/search/searchFiltersSlice';
import {
  PlaceholderText,
  filterStyle,
} from '@app/components/dashboards/dashboard/components/SearchFilters/styles/SearchFiltersStyles';

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

  return (
    <Select
      size="small"
      showSearch
      style={filterStyle}
      placement={'bottomRight'}
      placeholder={<PlaceholderText>Вид деятельности</PlaceholderText>}
      optionFilterProp="children"
      value={typeActivity}
      onChange={onChange}
      filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      options={data}
    />
  );
};

export default TypeActivityFilter;
