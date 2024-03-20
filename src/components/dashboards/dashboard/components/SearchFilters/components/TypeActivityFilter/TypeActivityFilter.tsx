import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Select, Tag } from 'antd';
import { doGetTypeActivitiesList, setTypeActivity } from '@app/store/slices/search/searchFiltersSlice';
import {
  PlaceholderText,
  filterStyle,
} from '@app/components/dashboards/dashboard/components/SearchFilters/styles/SearchFiltersStyles';
import { CustomTagProps } from 'rc-select/lib/BaseSelect';

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

  const onChange = (value: string[]) => {
    dispatch(setTypeActivity(value));
  };

  const tagRender = (props: CustomTagProps) => {
    const { label, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag onMouseDown={onPreventMouseDown} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
        {label}
      </Tag>
    );
  };

  return (
    <Select
      mode={'multiple'}
      size="small"
      showSearch
      style={filterStyle}
      value={typeActivity ?? undefined}
      tagRender={tagRender}
      placement={'bottomRight'}
      placeholder={<PlaceholderText>Вид деятельности</PlaceholderText>}
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      options={data}
    />
  );
};

export default TypeActivityFilter;
