import React from 'react';
import { CountInformationContainer } from '../../../../styles/ProfileInfoStyles';

type MyComponentProps = {
  count: number;
};

const CountResumes: React.FC<MyComponentProps> = ({ count }) => {
  return <>{count && <CountInformationContainer>{`${count} резюме`}</CountInformationContainer>}</>;
};

export default CountResumes;
