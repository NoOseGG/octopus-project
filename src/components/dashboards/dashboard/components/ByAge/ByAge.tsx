import React from 'react';
import { Divider } from 'antd';
import {
  Container,
  NameComponent,
  AgeContainer,
} from '@app/components/dashboards/dashboard/styles/CurrentSubjectsByAgeStyle';
import { ByAgeProps, getTitleForByAge } from '@app/components/dashboards/dashboard/components/ByAge/ByAgeTypes';
import Age from '@app/components/dashboards/dashboard/components/ByAge/components/Age/Age';

const ByAge: React.FC<ByAgeProps> = ({ moreThen20, from10To20, from5To10, from1To5, lessThen1 }) => {
  return (
    <Container>
      <NameComponent>{getTitleForByAge(moreThen20)}</NameComponent>
      <Divider />
      <AgeContainer>
        <Age age={moreThen20} />
        <Age age={from10To20} />
        <Age age={from5To10} />
        <Age age={from1To5} />
        <Age age={lessThen1} />
      </AgeContainer>
      <Divider />
    </Container>
  );
};

export default ByAge;
