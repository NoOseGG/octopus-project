import React from 'react';
import {
  filterStyle,
  PlaceholderText,
} from '@app/components/dashboards/dashboard/components/SearchFilters/styles/SearchFiltersStyles';
import { Select } from 'antd';

type Data = {
  value: string;
  label: string;
  key: number;
};

type MyComponentProps = {
  value: string | null;
  onChange: (value: string) => void;
  data: Data[];
  name: string;
};

const FilterSelect: React.FC<MyComponentProps> = ({ value, onChange, data, name }) => {
  return (
    <Select
      size="small"
      showSearch
      style={filterStyle}
      value={value}
      placement={'bottomRight'}
      placeholder={<PlaceholderText>{name}</PlaceholderText>}
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      options={data}
    />
  );
};

export default FilterSelect;
