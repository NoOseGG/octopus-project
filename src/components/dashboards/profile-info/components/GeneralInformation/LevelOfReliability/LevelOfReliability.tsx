import React from 'react';
import KindIndicator from '@app/components/dashboards/profile-info/components/GeneralInformation/LevelOfReliability/KindIndicator';
import MinMaxRating from '@app/components/dashboards/profile-info/components/GeneralInformation/LevelOfReliability/MinMaxRating';
import styled from 'styled-components';
import { httpAxios } from '@app/api/http.api';
import { DASH } from '@app/constants/enums/Dashboards';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { useQuery } from '@tanstack/react-query';
import PercentIndex from '@app/components/dashboards/profile-info/components/GeneralInformation/LevelOfReliability/PercentIndex';
import PercentRating from '@app/components/dashboards/profile-info/components/GeneralInformation/LevelOfReliability/PercentRating';
import { ResponseDashboard } from '@app/interfaces/interfaces';

import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { Skeleton } from 'antd';

const getMinRating = (typeActivity: string | null, settlement: string | null) => {
  if (!typeActivity || !settlement) return;
  return httpAxios.get<ResponseDashboard>(
    DASH.BASE +
      DASH.TYPE_ACTIVITY(typeActivity) +
      DASH.ADDRESS_SETTLEMENT_ICONTAINS(settlement) +
      DASH.IS_NULL_FALSE('king') +
      DASH.PAGE_SIZE(100000) +
      DASH.ORDERING('king'),
  );
};

const LevelOfReliability: React.FC = () => {
  const typeActivity = useAppSelector((state) => state.searchProfile.profile.types_activities[0]?.name);
  const settlement = useAppSelector((state) => state.searchProfile.profile.addresses[0]?.settlement);
  const { data, isLoading } = useQuery({
    queryKey: ['minRating', typeActivity, settlement],
    queryFn: () => getMinRating(typeActivity, settlement),
    enabled: !!typeActivity && !!settlement,
  });

  if (isLoading) {
    return <Skeleton active={true} />;
  }

  return (
    <>
      {Boolean(data?.data.results.length) && (
        <>
          <Container>
            <KindIndicator />
            {data?.data && (
              <MinMaxRating
                min={data?.data?.results[0]?.king}
                max={data?.data?.results[data?.data?.results?.length - 1]?.king}
              />
            )}
          </Container>
          <S.Title>
            Сравнительный анализ значений индекса и показателей оценки у группы аналогичных компаний (прямых
            конкурентов).
          </S.Title>
          <RatingContainer>
            {data?.data && <PercentIndex data={data?.data} />}
            {data?.data && <PercentRating data={data?.data} />}
          </RatingContainer>
          <S.MyDivider />
        </>
      )}
    </>
  );
};

export default LevelOfReliability;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 1300px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
