import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { httpAxios } from '@app/api/http.api';
import { DashboardObjectForRating, ResponseDashboardForRating } from '@app/interfaces/interfaces';
import { DASH } from '@app/constants/enums/Dashboards';
import RatingTable from '@app/components/tables/RatingTable/RatingTable';
import styled from 'styled-components';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { calculateRating } from '@app/components/dashboards/profile-info/components/GeneralInformation/RatingByKind/utils';

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
    <Container>
      <S.Title>Республика</S.Title>
      <RatingTable data={ratingAll} isLoading={isLoading} />
    </Container>
  );
};

export default RatingAll;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
