import React from 'react';
import { useQuery } from '@tanstack/react-query';
import competitorsService from '@app/services/competitors.service';
import DetailedTable from '@app/components/tables/DetailedTable/DetailedTable';
import styled from 'styled-components';
import { DetailsTableType } from '@app/components/tables/DetailedTable/utils';

type MyComponentsProps = {
  settlement: string;
  typeActivity: string;
};

const CompetitorsDetailed: React.FC<MyComponentsProps> = ({ settlement, typeActivity }) => {
  const { data } = useQuery({
    queryKey: ['detailsCompetitors', settlement, typeActivity],
    queryFn: () => competitorsService.getDataForDetailed(settlement, typeActivity),
    select: ({ data }) => data,
    enabled: Boolean(settlement.length) && Boolean(typeActivity.length),
  });

  return (
    <>
      {data && (
        <CompetitorsDetailedContainer>
          <DetailedTable data={data?.results} type={DetailsTableType.COMPETITORS} />
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
