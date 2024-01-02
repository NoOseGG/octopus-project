import React from 'react';
import styled from 'styled-components';

type MyComponentProps = {
  count: number;
};

const CountGovernmentInspections: React.FC<MyComponentProps> = ({ count }) => {
  return <>{count && <Container>{`${count} проверки`}</Container>}</>;
};

export default CountGovernmentInspections;

const Container = styled.div`
  width: 100%;
  padding: 16px;
  text-align: center;
  background-color: #f1f5fb;
`;
