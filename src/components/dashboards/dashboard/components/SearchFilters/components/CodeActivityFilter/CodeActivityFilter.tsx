import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Select } from 'antd';
import { doGetTypeActivitiesList, setCodeActivity } from '@app/store/slices/search/searchFiltersSlice';
import {
  PlaceholderText,
  filterStyle,
} from '@app/components/dashboards/dashboard/components/SearchFilters/styles/SearchFiltersStyles';

const CodeActivityFilter: React.FC = () => {
  const codes = useAppSelector((state) => state.searchFilters.data_filters.type_activities);
  const codeActivity = useAppSelector((state) => state.searchFilters.filters.codeActivities);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTypeActivitiesList());
  }, [dispatch]);

  const data = codes?.map((code) => {
    return {
      value: code.type_activity_code,
      label: code.type_activity_code,
    };
  });

  const onChange = (value: string) => {
    dispatch(setCodeActivity(value));
  };

  return (
    <Select
      size="small"
      showSearch
      style={filterStyle}
      placeholder={<PlaceholderText>Код деятельности</PlaceholderText>}
      optionFilterProp="children"
      value={codeActivity}
      onChange={onChange}
      filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      options={data}
    />
  );
};

export default CodeActivityFilter;
