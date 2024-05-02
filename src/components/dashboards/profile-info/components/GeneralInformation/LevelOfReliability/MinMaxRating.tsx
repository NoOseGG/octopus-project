import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { httpAxios } from '@app/api/http.api';
import { DASH } from '@app/constants/enums/Dashboards';
import { ResponseDashboard } from '@app/interfaces/interfaces';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Skeleton } from 'antd';
import styled from 'styled-components';

const getMinRating = (typeActivity: string | null, settlement: string | null) => {
  if (!typeActivity || !settlement) return;
  return httpAxios.get<ResponseDashboard>(
    DASH.BASE +
      DASH.TYPE_ACTIVITY(typeActivity) +
      DASH.ADDRESS_SETTLEMENT_ICONTAINS(settlement) +
      DASH.IS_NULL_FALSE('king') +
      DASH.PAGE_SIZE(1000) +
      DASH.ORDERING('king'),
  );
};

const MinMaxRating: React.FC = () => {
  const typeActivity = useAppSelector((state) => state.searchProfile.profile.types_activities[0].name);
  const settlement = useAppSelector((state) => state.searchProfile.profile.addresses[0].settlement);
  const { data } = useQuery({
    queryKey: ['minRating', typeActivity, settlement],
    queryFn: () => getMinRating(typeActivity, settlement),
    enabled: !!typeActivity && !!settlement,
  });

  return (
    <>
      {data ? (
        <Container>
          Показатели оценки у прямых конкурентов
          <RatingContainer>
            <span>Минимум - {data?.data?.results[0]?.king}.</span>
            <span>Максимум - {data?.data?.results[data?.data?.results?.length - 1]?.king}.</span>
          </RatingContainer>
        </Container>
      ) : (
        <Skeleton />
      )}
    </>
  );
};

export default MinMaxRating;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
