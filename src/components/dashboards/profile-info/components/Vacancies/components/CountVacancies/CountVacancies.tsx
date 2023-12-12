import React from 'react';
import styled from 'styled-components';

type MyComponentProps = {
  count: number;
};

const CountVacancies: React.FC<MyComponentProps> = ({ count }) => {
  return (
    <>
      {count && (
        <CountVacanciesContainer>
          {count} {getVacancyEnding(count)}
        </CountVacanciesContainer>
      )}
    </>
  );
};

export default CountVacancies;

const CountVacanciesContainer = styled.div`
  margin-top: 1.8735rem;
  width: 100%;
  padding: 16px;
  text-align: center;
  background-color: #f1f5fb;
`;

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
