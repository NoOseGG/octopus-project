import React from 'react';
import Requisites from '@app/components/dashboards/profile-info/components/components/Buttons/Requisites/Requisites';
import Favourite from '@app/components/dashboards/profile-info/components/components/Buttons/Favourite/Favourite';
import { useAppSelector } from '@app/hooks/reduxHooks';
import styled from 'styled-components';

const SiderMenu: React.FC = () => {
  const unn = useAppSelector((state) => state.searchProfile.profile.unn);

  return (
    <Container>
      <Requisites />
      {unn && <Favourite unn={unn} />}
    </Container>
  );
};

export default SiderMenu;

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
