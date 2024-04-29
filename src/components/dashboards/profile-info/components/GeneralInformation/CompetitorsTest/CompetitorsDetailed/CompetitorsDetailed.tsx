import React from 'react';
import { useQuery } from '@tanstack/react-query';
import competitorsService from '@app/services/competitors.service';
import DetailedTable from '@app/components/tables/DetailedTable/DetailedTable';
import styled from 'styled-components';
import { DetailsTableType } from '@app/components/tables/DetailedTable/utils';
import { CompetitorsProps } from '@app/components/dashboards/profile-info/components/GeneralInformation/CompetitorsTest/types/CompetitorsType';
import { useAppSelector } from '@app/hooks/reduxHooks';

const CompetitorsDetailed: React.FC<CompetitorsProps> = ({ settlement, typeActivity }) => {
  const unn = useAppSelector((state) => state.searchProfile.profile.unn);
  const { data } = useQuery({
    queryKey: [competitorsService.COMPETITORS_KEY.DETAILS, settlement, typeActivity],
    queryFn: () => competitorsService.getDataForDetailed(settlement, typeActivity),
    select: ({ data }) => data,
    enabled: Boolean(settlement.length) && Boolean(typeActivity.length),
  });

  return (
    <>
      {data && (
        <CompetitorsDetailedContainer>
          <DetailedTable
            data={data?.results.filter((item) => item.legal_entity_id !== unn)}
            type={DetailsTableType.COMPETITORS}
            sizePage={5}
          />
        </CompetitorsDetailedContainer>
      )}
    </>
  );
};

export default CompetitorsDetailed;

const CompetitorsDetailedContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`;
