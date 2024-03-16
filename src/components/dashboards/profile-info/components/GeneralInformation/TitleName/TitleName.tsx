import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '@app/hooks/reduxHooks';

const TitleName: React.FC = () => {
  const names = useAppSelector((state) => state.searchProfile.profile.names);

  return names[0]?.short_name ? <Title>{names[0].short_name}</Title> : null;
};

export default TitleName;

const Title = styled.h1`
  font-weight: 700;
`;
