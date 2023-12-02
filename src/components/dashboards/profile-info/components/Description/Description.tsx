import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Text } from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import styled from 'styled-components';

const Description: React.FC = () => {
  const description = useAppSelector((state) => state.searchProfile.profile.descriptions);

  return (
    <Container>
      <Text>{Boolean(description.length) && <div>{description[0].description}</div>}</Text>
    </Container>
  );
};

export default Description;

const Container = styled.div`
  margin-right: 250px;
  margin-bottom: 1.875rem;
`;
