import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DatePicker, Select } from 'antd';
import {
  RolesData,
  RolesEnum,
  StatusEnum,
  statusesData,
  typeFilterData,
  TypeFilterEnum,
} from '@app/components/dashboards/profile-info/components/Purchases/Filters/PurchasesFiltersTypes';
import {
  IceTradeCustomer,
  IceTradeOrganizer,
  IceTradeOrganizerNegotiations,
  IceTradeOtherParticipant,
  IceTradeParticipant,
} from '@app/store/types/Subject';
import { sortPurchases } from '@app/components/dashboards/profile-info/components/Purchases/Filters/sortPurchasesUtils';

const { RangePicker } = DatePicker;

type MyComponentProps = {
  iceTrades: {
    iceTradeCustomer: IceTradeCustomer[];
    iceTradeParticipant: IceTradeParticipant[];
    iceTradeOtherParticipant: IceTradeOtherParticipant[];
    iceTradeOrganizer: IceTradeOrganizer[];
    iceTradeOrganizerNegotiations: IceTradeOrganizerNegotiations[];
  };
  handleSetPurchase: (iceTrade: IceTradeCustomer[]) => void;
};

const PurchasesFilters: React.FC<MyComponentProps> = ({ iceTrades, handleSetPurchase }) => {
  const [status, setStatus] = useState(StatusEnum.ALL);
  const [role, setRole] = useState(RolesEnum.ALL);
  const [typeFilter, setTypeFilter] = useState(TypeFilterEnum.DATE_DESCENDING);

  //ice trades

  const allCount =
    iceTrades.iceTradeCustomer?.length +
    iceTrades.iceTradeParticipant?.length +
    iceTrades.iceTradeOtherParticipant?.length +
    iceTrades.iceTradeOrganizer?.length +
    iceTrades.iceTradeOrganizerNegotiations?.length;

  useEffect(() => {
    const iceTrade = sortPurchases(status, role, typeFilter, iceTrades);
    handleSetPurchase(iceTrade);
  }, [status, role, typeFilter]);

  const handleClearFilters = () => {
    setStatus(StatusEnum.ALL);
    setRole(RolesEnum.ALL);
    setTypeFilter(TypeFilterEnum.DATE_ASCENDING);
  };

  return (
    <FiltersContainer>
      <SelectsContainer>
        <Select
          defaultValue={StatusEnum.ALL}
          style={selectFilterStyle}
          value={status}
          onChange={setStatus}
          size={'small'}
          options={statusesData.map((item) => {
            return {
              value: item,
              label: item,
            };
          })}
        />
        <RangePicker size={'small'} />
        <Select
          defaultValue={RolesEnum.ALL}
          style={selectFilterStyle}
          value={role}
          onChange={setRole}
          size={'small'}
          options={RolesData.map((item) => {
            return {
              value: item,
              label: item,
            };
          })}
        />
      </SelectsContainer>
      <ButtonContainer style={{ alignItems: 'center' }}>
        <ButtonClear onClick={handleClearFilters}>Сбросить всё</ButtonClear>
        <CountContract>{allCount} контрактов</CountContract>
        <Select
          defaultValue={TypeFilterEnum.DATE_ASCENDING}
          style={selectDateFilterStyle}
          value={typeFilter}
          onChange={setTypeFilter}
          size={'small'}
          options={typeFilterData}
        />
      </ButtonContainer>
    </FiltersContainer>
  );
};

export default PurchasesFilters;

const selectFilterStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
};

const selectDateFilterStyle = {
  width: 'auto',
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
