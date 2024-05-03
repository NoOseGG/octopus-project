import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { httpAxios } from '@app/api/http.api';
import { DashboardObjectForRating, ResponseDashboard } from '@app/interfaces/interfaces';
import { DASH } from '@app/constants/enums/Dashboards';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import RatingTable from '@app/components/tables/RatingTable/RatingTable';
import styled from 'styled-components';

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
    if (data?.results) {
      const result: DashboardObjectForRating[] = data.results.slice(0, 5).map((item, index) => {
        if (item.legal_entity_id === unn) return { ...item, position: index + 1, highlight: true };
        else return { ...item, position: index + 1 };
      });
      const index = data.results.findIndex((item) => item.legal_entity_id === unn);
      if (index > 4) result.push({ ...data?.results[index], position: index + 1, highlight: true });

      setRatingSettlement(result);
    }
  }, [data, unn]);

  return (
    <Container>
      <S.Title>Рейтинг в городе</S.Title>
      <RatingTable data={ratingSettlement} isLoading={isLoading} />
    </Container>
  );
};

export default RatingAll;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
