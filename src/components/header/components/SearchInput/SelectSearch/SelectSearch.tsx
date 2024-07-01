import React from 'react';
import { Select } from 'antd';
import styled from 'styled-components';

const SelectSearch: React.FC = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <span>Поиск по: </span>
      <Select
        defaultValue="name"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          {
            value: 'name',
            label: 'УНП или наименованию',
          },
          {
            value: 'phone',
            label: 'Телефону',
          },
          {
            value: 'webSite',
            label: 'Веб-сайту',
          },
          {
            value: 'email',
            label: 'Электронной почте',
          },
        ]}
      />
    </div>
  );
};

export default SelectSearch;

const StyledSelect = styled(Select)`
  background-color: red;
  width: 200px;
  height: 50px;
`;
