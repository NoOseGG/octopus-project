import React from 'react';
import { DatePicker } from 'antd';
import styled from 'styled-components';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { deleteDate, setDate } from '@app/store/slices/search/searchFiltersSlice';
import locale from './locale/ru_RU';

const { RangePicker } = DatePicker;

const DateFilter: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleChange = (value: any) => {
    if (value !== null) {
      const date: [string, string] = [value[0].format('YYYY-MM-DD'), value[1].format('YYYY-MM-DD')];
      dispatch(setDate(date));
    } else {
      dispatch(deleteDate());
    }
  };

  return (
    <Container>
      <RangePicker locale={locale} style={{ width: '100%' }} size={'middle'} onChange={handleChange} />
    </Container>
  );
};

export default DateFilter;

const Container = styled.div``;
