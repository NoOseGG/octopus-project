import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Select, Tag } from 'antd';
import { doGetRegions, setRegion } from '@app/store/slices/search/searchFiltersSlice';
import {
  PlaceholderText,
  filterStyle,
} from '@app/components/dashboards/dashboard/components/SearchFilters/styles/SearchFiltersStyles';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

const RegionFilter: React.FC = () => {
  const regions = useAppSelector((state) => state.searchFilters.data_filters.regions);
  const region = useAppSelector((state) => state.searchFilters.filters.regions);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetRegions());
  }, [dispatch]);

  const data = regions?.map((region) => {
    return {
      value: region.address_region,
      label: region.address_region,
    };
  });

  const onChange = (value: string[]) => {
    dispatch(setRegion(value));
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
      mode={'tags'}
      size="small"
      showSearch
      style={filterStyle}
      value={region ?? undefined}
      tagRender={tagRender}
      placement={'bottomRight'}
      placeholder={<PlaceholderText>Область</PlaceholderText>}
      optionFilterProp="children"
      onChange={onChange}
      // filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      options={data}
    />
  );
};

export default RegionFilter;
