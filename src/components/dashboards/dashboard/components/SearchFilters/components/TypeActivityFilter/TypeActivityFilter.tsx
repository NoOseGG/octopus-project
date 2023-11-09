import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Select } from 'antd';
import { doGetTypeActivitiesList, setTypeActivity } from '@app/store/slices/searchFiltersSlice';

const TypeActivityFilter: React.FC = () => {
  const activities = useAppSelector((state) => state.searchFilters.data_filters.type_activities);
  const typeActivity = useAppSelector((state) => state.searchFilters.filters.typeActivities);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTypeActivitiesList());
  }, [dispatch]);

  const data = activities?.map((activity) => {
    return {
      value: activity.type_activity_name,
      label: activity.type_activity_name,
    };
  });

  const onChange = (value: string) => {
    dispatch(setTypeActivity(value));
  };

  return (
    <Select
      size="middle"
      showSearch
      style={{ width: 200 }}
      placeholder="Вид деятельности"
      optionFilterProp="children"
      value={typeActivity}
      onChange={onChange}
      filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      options={data}
    />
  );
};

export default TypeActivityFilter;
