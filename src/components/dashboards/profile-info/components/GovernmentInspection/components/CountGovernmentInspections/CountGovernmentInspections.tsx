import React from 'react';
import { CountInformationContainer } from '../../../../styles/ProfileInfoStyles';

type MyComponentProps = {
  count: number;
};

const CountGovernmentInspections: React.FC<MyComponentProps> = ({ count }) => {
  return (
    <>
      {count && (
        <CountInformationContainer>
          {count} {getInspectionEnding(count)}
        </CountInformationContainer>
      )}
    </>
  );
};

export default CountGovernmentInspections;

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
