import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { httpAxios } from '@app/api/http.api';
import { DashboardObjectForRating, ResponseDashboard } from '@app/interfaces/interfaces';
import { DASH } from '@app/constants/enums/Dashboards';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import RatingTable from '@app/components/tables/RatingTable/RatingTable';
import { calculateRating } from '@app/components/dashboards/profile-info/components/GeneralInformation/RatingByKind/utils';
import * as RatingStyle from '@app/components/dashboards/profile-info/components/GeneralInformation/RatingByKind/styles/RatingByKingStyles';
import attention from '@app/assets/attention.svg';

type MyComponentProps = {
  typeActivity: string;
  region: string;
  unn: string;
};

const getRatingRegion = (typeActivity: string, region: string) => {
  return httpAxios.get<ResponseDashboard>(
    DASH.BASE +
      DASH.STATUS_AT +
      DASH.IS_NULL_FALSE('king') +
      DASH.TYPE_ACTIVITY(typeActivity) +
      DASH.ADDRESS_REGION_ICONTAINS(region) +
      DASH.PAGE_SIZE(10000) +
      DASH.ORDERING('-king'),
  );
};

const RatingAll: React.FC<MyComponentProps> = ({ typeActivity, region, unn }) => {
  const [ratingRegion, setRatingRegion] = useState<DashboardObjectForRating[] | undefined>(undefined);
  const { data, isLoading } = useQuery({
    queryKey: ['ratingRegion', typeActivity, region],
    queryFn: () => getRatingRegion(typeActivity, region),
    select: ({ data }) => data,
    enabled: !!typeActivity && !!region,
  });

  useEffect(() => {
    calculateRating(data?.results, setRatingRegion, unn);
  }, [data, unn]);

  if (data && data.results.length < 1) {
    return (
      <div>
        <S.Title>Область</S.Title>{' '}
        <RatingStyle.TextContainer>
          <RatingStyle.Image src={attention} />
          <RatingStyle.Text>Конкуренты по области отсутствуют</RatingStyle.Text>
        </RatingStyle.TextContainer>
      </div>
    );
  }

  return (
    <RatingStyle.Container>
      <S.Title>Область</S.Title>
      <RatingTable data={ratingRegion} isLoading={isLoading} />
    </RatingStyle.Container>
  );
};

export default RatingAll;
