import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Select } from 'antd';
import { doGetTypeActivitiesList, setCodeActivity } from '@app/store/slices/search/searchFiltersSlice';
import {
  PlaceholderText,
  filterStyle,
} from '@app/components/dashboards/dashboard/components/SearchFilters/styles/SearchFiltersStyles';

const CodeActivityFilter: React.FC = () => {
  const codes = useAppSelector((state) => state.searchFilters.data_filters.codeActivities);
  const codeActivity = useAppSelector((state) => state.searchFilters.filters.codeActivities);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTypeActivitiesList());
  }, [dispatch]);

  const data = codes?.map((code, index) => {
    return {
      value: code,
      label: code,
      key: index,
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
      placement={'bottomRight'}
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
