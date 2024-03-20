import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { Select, Tag } from 'antd';
import { doGetSettlementsList, setSettlement } from '@app/store/slices/search/searchFiltersSlice';
import {
  PlaceholderText,
  filterStyle,
} from '@app/components/dashboards/dashboard/components/SearchFilters/styles/SearchFiltersStyles';
import { CustomTagProps } from 'rc-select/lib/BaseSelect';

const SettlementFilter: React.FC = () => {
  const settlements = useAppSelector((state) => state.searchFilters.data_filters.settlements);
  const settlement = useAppSelector((state) => state.searchFilters.filters.settlements);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doGetSettlementsList());
  }, [dispatch]);

  const data = settlements?.map((settlement, index) => {
    return {
      value: settlement.address_settlement,
      label: settlement.address_settlement,
      key: index,
    };
  });

  const onChange = (value: string[]) => {
    dispatch(setSettlement(value));
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
      value={settlement ?? undefined}
      tagRender={tagRender}
      placement={'bottomRight'}
      placeholder={<PlaceholderText>Населенный пункт</PlaceholderText>}
      optionFilterProp="children"
      onChange={onChange}
      filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      options={data}
    />
  );
};

export default SettlementFilter;
