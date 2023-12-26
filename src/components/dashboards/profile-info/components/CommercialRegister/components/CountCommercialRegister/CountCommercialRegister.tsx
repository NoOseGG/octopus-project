import React from 'react';
import styled from 'styled-components';

type MyComponentProps = {
  count: number;
};

const CountCommercialRegister: React.FC<MyComponentProps> = ({ count }) => {
  return (
    <>
      {count && (
        <CountCommercialRegisterContainer>{`${count} данных в торговом реестре`}</CountCommercialRegisterContainer>
      )}
    </>
  );
};

export default CountCommercialRegister;

const CountCommercialRegisterContainer = styled.div`
  width: 100%;
  padding: 16px;
  text-align: center;
  background-color: #f1f5fb;
`;
