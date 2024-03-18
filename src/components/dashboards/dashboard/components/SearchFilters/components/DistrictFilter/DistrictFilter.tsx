import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Select, Tag } from 'antd';
import { doGetDistrictsList, setDistrict } from '@app/store/slices/search/searchFiltersSlice';
import {
  PlaceholderText,
  filterStyle,
} from '@app/components/dashboards/dashboard/components/SearchFilters/styles/SearchFiltersStyles';
import { CustomTagProps } from 'rc-select/lib/BaseSelect';

const DistrictFilter: React.FC = () => {
  const districts = useAppSelector((state) => state.searchFilters.data_filters.districts);
  const district = useAppSelector((state) => state.searchFilters.filters.districts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetDistrictsList());
  }, [dispatch]);

  const data = districts?.map((district) => {
    return {
      value: district.address_district,
      label: district.address_district,
    };
  });

  const onChange = (value: string[]) => {
    dispatch(setDistrict(value));
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
      value={district ?? undefined}
      tagRender={tagRender}
      placement={'bottomRight'}
      placeholder={<PlaceholderText>Район</PlaceholderText>}
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      options={data}
    />
  );
};

export default DistrictFilter;
