import React from 'react';
import styled from 'styled-components';
import { DatePicker, Select } from 'antd';

const { RangePicker } = DatePicker;

const Filters: React.FC = () => {
  return (
    <FiltersContainer>
      <SelectsContainer>
        <Select
          defaultValue={StatuesEnum.ALL}
          style={selectFilterStyle}
          placeholder={StatuesEnum.ALL}
          allowClear
          options={StatusesData.map((item) => {
            return {
              value: item,
              label: item,
            };
          })}
        />
        <RangePicker />
        <Select
          defaultValue={StatuesEnum.ALL}
          style={selectFilterStyle}
          placeholder={StatuesEnum.ALL}
          allowClear
          options={RolesData.map((item) => {
            return {
              value: item,
              label: item,
            };
          })}
        />
      </SelectsContainer>
      <ButtonContainer>
        <ButtonClear>Сбросить всё</ButtonClear>
        <CountContract>2375 Контрактов</CountContract>
        <Select
          defaultValue={StatuesEnum.ALL}
          style={selectDateFilterStyle}
          placeholder={StatuesEnum.ALL}
          allowClear
          options={RolesData.map((item) => {
            return {
              value: item,
              label: item,
            };
          })}
        />
      </ButtonContainer>
    </FiltersContainer>
  );
};

export default Filters;

const selectFilterStyle = {
  width: '100%',
};

const selectDateFilterStyle = {
  backgroundColor: '#f1f5fb',
};

const FiltersContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 2.5rem;
  background-color: #f1f5fb;
  border-top-left-radius: 0.625rem;
  border-top-right-radius: 0.625rem;
  padding: 0.625rem;
  color: #666;
  font-size: 0.9375rem;
  font-weight: 500;
`;

const SelectsContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

const ButtonClear = styled.button`
  padding: 0;
  border: none;
  height: auto;
  background-color: #f1f5fb;
  color: #0057ff;
  font-weight: inherit;
  text-align: inherit;
  cursor: pointer;
`;

const CountContract = styled.span`
  color: inherit;
`;

enum StatuesEnum {
  ALL = 'Все статусы',
  PROGRESS = 'В процессе',
  FINISHED = 'Завершенно',
}
const StatusesData = [StatuesEnum.ALL, StatuesEnum.PROGRESS, StatuesEnum.FINISHED];

enum RolesEnum {
  ALL = 'Все роли',
  CUSTOMER = 'Заказчик',
  SUPPLIER = 'Поставщик',
}
const RolesData = [RolesEnum.ALL, RolesEnum.CUSTOMER, RolesEnum.SUPPLIER];
