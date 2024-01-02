import React from 'react';
import styled from 'styled-components';

type MyComponentProps = {
  count: number;
};

const CountGovernmentInspections: React.FC<MyComponentProps> = ({ count }) => {
  return (
    <>
      {count && (
        <Container>
          {count} {getInspectionEnding(count)}
        </Container>
      )}
    </>
  );
};

export default CountGovernmentInspections;

const Container = styled.div`
  width: 100%;
  padding: 16px;
  text-align: center;
  background-color: #f1f5fb;
`;

const getInspectionEnding = (count: number) => {
  if (count % 100 >= 11 && count % 100 <= 19) {
    return 'проверок';
  } else {
    switch (count % 10) {
      case 1:
        return 'проверка';
      case 2:
      case 3:
      case 4:
        return 'проверки';
      default:
        return 'проверок';
    }
  }
};
