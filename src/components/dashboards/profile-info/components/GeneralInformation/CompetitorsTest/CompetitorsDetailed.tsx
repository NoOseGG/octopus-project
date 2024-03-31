import React from 'react';
import { useQuery } from '@tanstack/react-query';
import competitorsService from '@app/services/competitors.service';
import DetailedTable from '@app/components/tables/DetailedTable/DetailedTable';
import { DetailedTableObject } from '@app/interfaces/interfaces';
import { ColumnsType } from 'antd/es/table/Table';
import styled from 'styled-components';

type MyComponentsProps = {
  settlement: string;
  typeActivity: string;
};

const CompetitorsDetailed: React.FC<MyComponentsProps> = ({ settlement, typeActivity }) => {
  const { data } = useQuery({
    queryKey: ['detailsCompetitors'],
    queryFn: () => competitorsService.getDataForDetailed(settlement, typeActivity),
    select: ({ data }) => data,
    enabled: Boolean(settlement.length) && Boolean(typeActivity.length),
  });

  const columns: ColumnsType<DetailedTableObject> = [
    {
      title: 'legal_entity_id',
      dataIndex: 'legal_entity_id',
      key: 'legal_entity_id',
    },
  ];

  return (
    <>
      {data && (
        <CompetitorsDetailedContainer>
          <DetailedTable<DetailedTableObject> data={data?.results} columns={columns} />
        </CompetitorsDetailedContainer>
      )}
    </>
  );
};

export default CompetitorsDetailed;

const CompetitorsDetailedContainer = styled.div`
  width: 100%;
`;
