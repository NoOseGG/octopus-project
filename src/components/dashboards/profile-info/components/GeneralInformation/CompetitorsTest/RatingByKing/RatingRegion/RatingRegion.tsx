import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { httpAxios } from '@app/api/http.api';
import { DashboardObjectForRating, ResponseDashboard } from '@app/interfaces/interfaces';
import { DASH } from '@app/constants/enums/Dashboards';
import styled from 'styled-components';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import RatingTable from '@app/components/tables/RatingTable/RatingTable';

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
    if (data?.results) {
      const result: DashboardObjectForRating[] = data.results.slice(0, 5).map((item, index) => {
        if (item.legal_entity_id === unn) return { ...item, position: index + 1, highlight: true };
        else return { ...item, position: index + 1 };
      });
      const index = data.results.findIndex((item) => item.legal_entity_id === unn);
      if (index > 4) result.push({ ...data?.results[index], position: index + 1, highlight: true });

      setRatingRegion(result);
    }
  }, [data, unn]);

  return (
    <Container>
      <S.Title>Рейтинг в области</S.Title>
      <RatingTable data={ratingRegion} isLoading={isLoading} />
    </Container>
  );
};

export default RatingAll;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
