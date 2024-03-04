import React from 'react';
import { CountInformationContainer } from '../../../../styles/ProfileInfoStyles';

type MyComponentProps = {
  count: number;
};

const CountVacancies: React.FC<MyComponentProps> = ({ count }) => {
  return (
    <>
      {count && (
        <CountInformationContainer>
          {count} {getVacancyEnding(count)}
        </CountInformationContainer>
      )}
    </>
  );
};

export default CountVacancies;

const getVacancyEnding = (count: number) => {
  if (count % 100 >= 11 && count % 100 <= 19) {
    return 'вакансий';
  } else {
    switch (count % 10) {
      case 1:
        return 'вакансия';
      case 2:
      case 3:
      case 4:
        return 'вакансии';
      default:
        return 'вакансий';
    }
  }
};
