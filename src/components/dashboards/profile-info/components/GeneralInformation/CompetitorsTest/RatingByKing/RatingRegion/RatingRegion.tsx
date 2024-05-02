import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { httpAxios } from '@app/api/http.api';
import { ResponseDashboard } from '@app/interfaces/interfaces';
import { DASH } from '@app/constants/enums/Dashboards';

type MyComponentProps = {
  typeActivity: string | null;
  region: string | null;
};

const getRatingRegion = (typeActivity: string | null, region: string | null) => {
  if (!region || !typeActivity) return;
  return (
    DASH.BASE +
    DASH.STATUS_AT +
    DASH.IS_NULL_FALSE('king') +
    DASH.TYPE_ACTIVITY(typeActivity) +
    DASH.ADDRESS_REGION_ICONTAINS(region) +
    DASH.PAGE_SIZE(10000) +
    DASH.ORDERING('king')
  );
};

const RatingAll: React.FC<MyComponentProps> = ({ typeActivity, region }) => {
  const { data } = useQuery({
    queryKey: ['ratingRegion', typeActivity, region],
    queryFn: () => getRatingRegion(typeActivity, region),
    enabled: !!typeActivity && !!region,
  });

  return <div></div>;
};

export default RatingAll;
