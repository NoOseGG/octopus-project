import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Select, Tag } from 'antd';
import { doGetTypeActivitiesList, setCodeActivity } from '@app/store/slices/search/searchFiltersSlice';
import {
  PlaceholderText,
  filterStyle,
} from '@app/components/dashboards/dashboard/components/SearchFilters/styles/SearchFiltersStyles';
import { CustomTagProps } from 'rc-select/lib/BaseSelect';

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

  const onChange = (value: string[]) => {
    dispatch(setCodeActivity(value));
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
      value={codeActivity ?? undefined}
      tagRender={tagRender}
      placement={'bottomRight'}
      placeholder={<PlaceholderText>Код деятельности</PlaceholderText>}
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      options={data}
    />
  );
};

export default CodeActivityFilter;
