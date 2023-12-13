import React, { useState } from 'react';
import styled from 'styled-components';
import { DatePicker, Select } from 'antd';
import {
  RolesData,
  RolesEnum,
  StatuesEnum,
  statusesData,
  typeFilterData,
  TypeFilterEnum,
} from '@app/components/dashboards/profile-info/components/Purchases/Filters/PurchasesFiltersTypes';
import { useAppSelector } from '@app/hooks/reduxHooks';

const { RangePicker } = DatePicker;

const PurchasesFilters: React.FC = () => {
  const [status, setStatus] = useState(StatuesEnum.ALL);
  const [role, setRole] = useState(RolesEnum.ALL);
  const [typeFilter, setTypeFilter] = useState(TypeFilterEnum.DATE_ASCENDING);

  //ice trades

  const iceTradeCustomer = useAppSelector((state) => state.searchProfile.profile.icetrade_customer);
  const iceTradeParticipant = useAppSelector((state) => state.searchProfile.profile.icetrade_participant);
  const iceTradeOtherParticipant = useAppSelector((state) => state.searchProfile.profile.icetrade_other_participant);
  const iceTradeOrganizer = useAppSelector((state) => state.searchProfile.profile.icetrade_organizer);
  const iceTradeOrganizerNegotiations = useAppSelector((state) => state.searchProfile.profile.icetrade_organizer);

  const allCount =
    iceTradeCustomer?.length +
    iceTradeParticipant?.length +
    iceTradeOtherParticipant?.length +
    iceTradeOrganizer?.length +
    iceTradeOrganizerNegotiations?.length;

  const handleClearFilters = () => {
    setStatus(StatuesEnum.ALL);
    setRole(RolesEnum.ALL);
    setTypeFilter(TypeFilterEnum.DATE_ASCENDING);
  };

  return (
    <FiltersContainer>
      <SelectsContainer>
        <Select
          defaultValue={StatuesEnum.ALL}
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

const PlaceHolder = styled.span`
  font-size: 10px;
  color: red;
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
