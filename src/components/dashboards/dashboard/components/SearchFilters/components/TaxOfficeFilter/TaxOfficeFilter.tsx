import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetTaxOfficesList, setTaxOffice } from '@app/store/slices/search/searchFiltersSlice';
import { Select, Tag } from 'antd';
import {
  filterStyle,
  PlaceholderText,
} from '@app/components/dashboards/dashboard/components/SearchFilters/styles/SearchFiltersStyles';
import { CustomTagProps } from 'rc-select/lib/BaseSelect';

const TaxOfficeFilter: React.FC = () => {
  const taxOffices = useAppSelector((state) => state.searchFilters.data_filters.taxOffices);
  const taxOffice = useAppSelector((state) => state.searchFilters.filters.taxOffices);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetTaxOfficesList());
  }, [dispatch]);

  const data = taxOffices?.map((taxOffice, index) => {
    return {
      value: taxOffice.tax_office_name,
      label: taxOffice.tax_office_name,
      key: index,
    };
  });

  const onChange = (value: string[]) => {
    dispatch(setTaxOffice(value));
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
      value={taxOffice ?? undefined}
      tagRender={tagRender}
      placement={'bottomRight'}
      placeholder={<PlaceholderText>Налоговый ораган</PlaceholderText>}
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      options={data}
    />
  );
};

export default TaxOfficeFilter;
