import React from 'react';
import { CountInformationContainer } from '../../../../styles/ProfileInfoStyles';

type MyComponentProps = {
  count: number;
};

const CountNews: React.FC<MyComponentProps> = ({ count }) => {
  return (
    <>
      {Boolean(count) && (
        <CountInformationContainer>
          {count} {getNewsEnding(count)}
        </CountInformationContainer>
      )}
    </>
  );
};

export default CountNews;

const getNewsEnding = (count: number) => {
  if (count % 100 >= 11 && count % 100 <= 19) {
    return 'новостей';
  } else {
    switch (count % 10) {
      case 1:
        return 'новость';
      case 2:
      case 3:
      case 4:
        return 'новости';
      default:
        return 'новостей';
    }
  }
};
