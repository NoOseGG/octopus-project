import React, { useState } from 'react';
import { MetricAddressMain } from '@app/store/types/Subject';
import { Card, Pagination } from 'antd';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import DataFieldDate from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import {
  Container,
  GRID_AREA,
} from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIndicators/SubjectIndicatorStyle';

type MyComponentProps = {
  metric_address_main: MetricAddressMain[];
};

const SubjectMetricAddressMain: React.FC<MyComponentProps> = ({ metric_address_main }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <Container gridArea={GRID_AREA.A}>
      {Boolean(metric_address_main.length) && (
        <>
          <Card title="Адрес" style={{ width: '100%' }}>
            <DataField name="Полный адрес" content={metric_address_main[index].full_address} />
            <DataFieldDate name="Дата включения" content={metric_address_main[index].from_dttm} />
            <DataField name="Количество зарегистрированных компаний" content={metric_address_main[index].count_lei} />
            <DataField name="Плотность компаний на адресе" content={metric_address_main[index].density} />
            <DataField name="Количество действующих компаний" content={metric_address_main[index].count_active} />
            <DataField name="Показатель выживаемости" content={metric_address_main[index].survival_rate} />
            <DataField name="Тип здания" content={metric_address_main[index].building_type} />
            <DataField name="Вид здания" content={metric_address_main[index].building_kind} />
          </Card>
          {Boolean(metric_address_main.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={metric_address_main.length}
              defaultPageSize={1}
              size={'small'}
              onChange={(page) => handleClick(page)}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default SubjectMetricAddressMain;
