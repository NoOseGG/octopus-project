import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { httpAxios } from '@app/api/http.api';
import { DashboardObjectForRating, ResponseDashboard, ResponseDashboardForRating } from '@app/interfaces/interfaces';
import { DASH } from '@app/constants/enums/Dashboards';
import DetailedTable from '@app/components/tables/DetailedTable/DetailedTable';
import { DetailsTableType } from '@app/components/tables/DetailedTable/utils';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { AxiosResponse } from 'axios';

type MyComponentProps = {
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

const RatingAll: React.FC<MyComponentProps> = ({ typeActivity }) => {
  const [ratingAll, setRatingAll] = useState([]);
  const { data, isLoading } = useQuery({
    queryKey: ['ratingAll', typeActivity],
    queryFn: () => getRatingAll(typeActivity),
    select: ({ data }) => data,
    enabled: !!typeActivity,
  });

  const columns: ColumnsType<DashboardObjectForRating> = [
    {
      title: 'Позиция',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'УНП',
      dataIndex: 'legal_entity_id',
      key: 'legal_entity_id',
    },
  ];

  useEffect(() => {
    const result = data?.results.slice(0, 5).map((item, index) => ({ ...item, position: index + 1 }));
    console.log(result);
    setRatingAll(ratingAll);
  }, [data]);

  return <>{data?.results && <Table columns={columns} data={ratingAll} />}</>;
};

export default RatingAll;
