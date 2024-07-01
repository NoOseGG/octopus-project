import React from 'react';
import styled from 'styled-components';
import { SearchType } from '@app/components/header/components/SearchInput/SearchInput';
import { Divider } from 'antd';

type SettingDropdownProps = {
  searchType: SearchType;
  setSearchType: (searchType: SearchType) => void;
};

const SettingDropdown: React.FC<SettingDropdownProps> = ({ searchType, setSearchType }) => {
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchType(event.target.value as SearchType);
  };

  return (
    <Container>
      <RadioContainer>
        <InputWrapper>
          <InputRadio
            type="radio"
            name={'searchOption'}
            id={'standard'}
            value={SearchType.STANDARD}
            checked={searchType === SearchType.STANDARD}
            onChange={handleOptionChange}
          />
          <label htmlFor="standard">Поиск по УНП организации или наименованию.</label>
        </InputWrapper>
        <InputWrapper>
          <InputRadio
            type="radio"
            name={'searchOption'}
            id={'other'}
            value={SearchType.OTHER}
            checked={searchType === SearchType.OTHER}
            onChange={handleOptionChange}
          />
          <label htmlFor="other">
            <LabelContent>
              <div>Поиск по номеру телефона, веб-сайту или е-майл </div>
            </LabelContent>
          </label>
        </InputWrapper>
      </RadioContainer>
      {searchType === SearchType.OTHER && (
        <>
          <Divider style={{ marginTop: 5, marginBottom: 5 }} />
          <Info>
            <Bold>Форматы ввода:</Bold> <Bold>Телефон</Bold> - 375291234567, <Bold>Веб-сайт</Bold> - analytix.by,{' '}
            <Bold>Е-мейл</Bold> - info@analtix.by
          </Info>
        </>
      )}
    </Container>
  );
};

export default SettingDropdown;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const RadioContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const InputRadio = styled.input`
  margin-bottom: 2px;
`;

const LabelContent = styled.div``;

const Info = styled.div`
  text-align: center;
`;

const Bold = styled.span`
  font-weight: 700;
`;
