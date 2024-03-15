import React from 'react';
import { CountInformationContainer } from '../../../../styles/ProfileInfoStyles';

type MyComponentProps = {
  count: number;
};

const CountGiasPlan: React.FC<MyComponentProps> = ({ count }) => {
  return (
    <>{count && <CountInformationContainer>{`${count} ${getGiasPlanEnding(count)}`}</CountInformationContainer>}</>
  );
};

export default CountGiasPlan;

const getGiasPlanEnding = (count: number) => {
  if (count % 100 >= 11 && count % 100 <= 19) {
    return 'планов';
  } else {
    switch (count % 10) {
      case 1:
        return 'план';
      case 2:
      case 3:
      case 4:
        return 'плана';
      default:
        return 'планов';
    }
  }
};
