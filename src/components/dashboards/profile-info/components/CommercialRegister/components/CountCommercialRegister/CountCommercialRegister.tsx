import React from 'react';
import styled from 'styled-components';

type MyComponentProps = {
  count: number;
};

const CountCommercialRegister: React.FC<MyComponentProps> = ({ count }) => {
  return (
    <>
      {count && (
        <CountCommercialRegisterContainer>{`${count} ${getCommercialRegisterEnding(
          count,
        )} в торговом реестре`}</CountCommercialRegisterContainer>
      )}
    </>
  );
};

export default CountCommercialRegister;

const CountCommercialRegisterContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  padding: 16px;
  text-align: center;
  background-color: #f1f5fb;
`;

const getCommercialRegisterEnding = (count: number) => {
  if (count % 100 >= 11 && count % 100 <= 19) {
    return 'записей';
  } else {
    switch (count % 10) {
      case 1:
        return 'запись';
      case 2:
      case 3:
      case 4:
        return 'записи';
      default:
        return 'записей';
    }
  }
};
