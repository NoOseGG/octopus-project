import React from 'react';
import Requisites from '@app/components/dashboards/profile-info/components/components/Buttons/Requisites/Requisites';
import Favourite from '@app/components/dashboards/profile-info/components/components/Buttons/Favourite/Favourite';
import { useAppSelector } from '@app/hooks/reduxHooks';
import KindIndicator from '@app/components/dashboards/profile-info/components/GeneralInformation/Indicators/components/KindIndicator/KindIndicator';

const SiderMenu: React.FC = () => {
  const unn = useAppSelector((state) => state.searchProfile.profile.unn);
  const metric_kind = useAppSelector((state) => state.searchProfile.profile.metric_king);

  return (
    <>
      <Requisites />
      {unn && <Favourite unn={unn} />}
      {metric_kind[0]?.king_group && <KindIndicator kind_group={metric_kind[0].king_group} />}
    </>
  );
};

export default SiderMenu;
