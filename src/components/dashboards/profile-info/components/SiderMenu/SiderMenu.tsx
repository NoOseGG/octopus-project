import React from 'react';
import Requisites from '@app/components/dashboards/profile-info/components/components/Buttons/Requisites/Requisites';
import Favourite from '@app/components/dashboards/profile-info/components/components/Buttons/Favourite/Favourite';
import { useAppSelector } from '@app/hooks/reduxHooks';

const SiderMenu: React.FC = () => {
  const unn = useAppSelector((state) => state.searchProfile.profile.unn);

  return (
    <>
      <Requisites />
      {unn && <Favourite unn={unn} />}
    </>
  );
};

export default SiderMenu;
