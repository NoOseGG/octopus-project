import React from 'react';
import { Name } from '@app/store/types/Subject';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

type MyComponentProps = {
  name: Name;
};

const SubjectNames: React.FC<MyComponentProps> = (props) => {
  return <div>{props.name.full_name !== null ? <Title>{props.name.full_name}</Title> : <Title>Контора</Title>}</div>;
};

export default SubjectNames;
