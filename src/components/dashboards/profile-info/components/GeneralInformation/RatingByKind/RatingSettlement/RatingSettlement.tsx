import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { httpAxios } from '@app/api/http.api';
import { DashboardObjectForRating, ResponseDashboard } from '@app/interfaces/interfaces';
import { DASH } from '@app/constants/enums/Dashboards';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import RatingTable from '@app/components/tables/RatingTable/RatingTable';
import styled from 'styled-components';
import { calculateRating } from '@app/components/dashboards/profile-info/components/GeneralInformation/RatingByKind/utils';

type MyComponentProps = {
  typeActivity: string;
  settlement: string;
  unn: string;
};

const getRatingSettlement = (typeActivity: string, settlement: string) => {
  return httpAxios.get<ResponseDashboard>(
    DASH.BASE +
      DASH.STATUS_AT +
      DASH.IS_NULL_FALSE('king') +
      DASH.TYPE_ACTIVITY(typeActivity) +
      DASH.ADDRESS_SETTLEMENT_ICONTAINS(settlement) +
      DASH.PAGE_SIZE(10000) +
      DASH.ORDERING('-king'),
  );
};

const RatingAll: React.FC<MyComponentProps> = ({ typeActivity, settlement, unn }) => {
  const [ratingSettlement, setRatingSettlement] = useState<DashboardObjectForRating[] | undefined>(undefined);
  const { data, isLoading } = useQuery({
    queryKey: ['ratingSettlement', typeActivity, settlement],
    queryFn: () => getRatingSettlement(typeActivity, settlement),
    select: ({ data }) => data,
    enabled: !!typeActivity && !!settlement,
  });

  useEffect(() => {
    calculateRating(data?.results, setRatingSettlement, unn);
  }, [data, unn]);

  return (
    <Container>
      <S.Title>Город</S.Title>
      <RatingTable data={ratingSettlement} isLoading={isLoading} />
    </Container>
  );
};

export default RatingAll;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
