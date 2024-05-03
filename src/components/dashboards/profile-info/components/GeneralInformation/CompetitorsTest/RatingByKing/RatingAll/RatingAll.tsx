import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { httpAxios } from '@app/api/http.api';
import { DashboardObjectForRating, ResponseDashboardForRating } from '@app/interfaces/interfaces';
import { DASH } from '@app/constants/enums/Dashboards';
import RatingTable from '@app/components/tables/RatingTable/RatingTable';
import styled from 'styled-components';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';

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
    if (data?.results) {
      const result: DashboardObjectForRating[] = data.results.slice(0, 5).map((item, index) => {
        if (item.legal_entity_id === unn) return { ...item, position: index + 1, highlight: true };
        else return { ...item, position: index + 1 };
      });
      const index = data.results.findIndex((item) => item.legal_entity_id === unn);
      if (index > 4) result.push({ ...data?.results[index], position: index + 1, highlight: true });

      setRatingAll(result);
    }
  }, [data, unn]);

  return (
    <Container>
      <S.Title>Рейтинг в стране</S.Title>
      <RatingTable data={ratingAll} isLoading={isLoading} />
    </Container>
  );
};

export default RatingAll;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
