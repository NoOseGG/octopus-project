import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { httpAxios } from '@app/api/http.api';
import { DashboardObjectForRating, ResponseDashboardForRating } from '@app/interfaces/interfaces';
import { DASH } from '@app/constants/enums/Dashboards';
import RatingTable from '@app/components/tables/RatingTable/RatingTable';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { calculateRating } from '@app/components/dashboards/profile-info/components/GeneralInformation/RatingByKind/utils';
import * as RatingStyle from '@app/components/dashboards/profile-info/components/GeneralInformation/RatingByKind/styles/RatingByKingStyles';

type MyComponentProps = {
  unn: string;
  typeActivity: string;
};

const getRatingAll = (typeActivity: string) => {
  return httpAxios.get<ResponseDashboardForRating>(
    DASH.BASE +
      DASH.STATUS_AT +
      DASH.IS_NULL_FALSE('king') +
      DASH.TYPE_ACTIVITY(typeActivity) +
      DASH.PAGE_SIZE(10000) +
      DASH.ORDERING('-king'),
  );
};

const RatingAll: React.FC<MyComponentProps> = ({ typeActivity, unn }) => {
  const [ratingAll, setRatingAll] = useState<DashboardObjectForRating[] | undefined>(undefined);
  const { data, isLoading } = useQuery({
    queryKey: ['ratingAll', typeActivity],
    queryFn: () => getRatingAll(typeActivity),
    select: ({ data }) => data,
    enabled: !!typeActivity,
  });

  useEffect(() => {
    calculateRating(data?.results, setRatingAll, unn);
  }, [data, unn]);

  return (
    <RatingStyle.Container>
      <S.Title>Республика</S.Title>
      <RatingTable
        data={ratingAll?.map((item) =>
          item.company_short_name ? item : { ...item, company_short_name: item.company_full_name },
        )}
        isLoading={isLoading}
      />
    </RatingStyle.Container>
  );
};

export default RatingAll;
