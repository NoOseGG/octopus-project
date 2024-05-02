import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { httpAxios } from '@app/api/http.api';
import { ResponseDashboard } from '@app/interfaces/interfaces';
import { DASH } from '@app/constants/enums/Dashboards';

type MyComponentProps = {
  typeActivity: string | null;
  settlement: string | null;
};

const getRatingSettlement = (typeActivity: string | null, settlement: string | null) => {
  if (!typeActivity || !settlement) return;
  return (
    DASH.BASE +
    DASH.STATUS_AT +
    DASH.IS_NULL_FALSE('king') +
    DASH.TYPE_ACTIVITY(typeActivity) +
    DASH.ADDRESS_SETTLEMENT_ICONTAINS(settlement) +
    DASH.PAGE_SIZE(10000) +
    DASH.ORDERING('king')
  );
};

const RatingAll: React.FC<MyComponentProps> = ({ typeActivity, settlement }) => {
  const { data } = useQuery({
    queryKey: ['ratingSettlement', typeActivity, settlement],
    queryFn: () => getRatingSettlement(typeActivity, settlement),
    enabled: !!typeActivity && !!settlement,
  });

  return <div></div>;
};

export default RatingAll;
