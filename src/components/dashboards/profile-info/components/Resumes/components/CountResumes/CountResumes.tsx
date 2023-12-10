import React from 'react';
import styled from 'styled-components';

type MyComponentProps = {
  count: number;
};

const CountResumes: React.FC<MyComponentProps> = ({ count }) => {
  return <>{count && <CountVacanciesContainer>{`${count} резюме`}</CountVacanciesContainer>}</>;
};

export default CountResumes;

const CountVacanciesContainer = styled.div`
  width: 100%;
  padding: 16px;
  text-align: center;
  background-color: #f1f5fb;
`;
