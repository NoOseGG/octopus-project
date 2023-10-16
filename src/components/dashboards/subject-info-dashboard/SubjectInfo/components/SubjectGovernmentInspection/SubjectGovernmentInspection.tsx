import React from 'react';
import { GovernmentInspection } from '@app/store/types/Subject';
import { Card } from 'antd';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import { formatDate } from '@app/utils/utils';

type MyComponentProps = {
  governmentInspection: GovernmentInspection[];
};

const SubjectGovernmentInspection: React.FC<MyComponentProps> = ({ governmentInspection }) => {
  return (
    <Card title="Сведения о проверках субъектов государственными органами" style={{ width: '100%' }}>
      {governmentInspection[0].legal_entity_id_gov && (
        <DataField
          name="УНП контролирующего (надзорного) органа"
          content={governmentInspection[0].legal_entity_id_gov}
        />
      )}
      {governmentInspection[0].legal_entity_id_gov_name && (
        <DataField
          name="Наименование контролирующего (надзорного) органа"
          content={governmentInspection[0].legal_entity_id_gov_name}
        />
      )}
      {governmentInspection[0].plan_type && <DataField name="Тип плана" content={governmentInspection[0].plan_type} />}
      {governmentInspection[0].state_body && (
        <DataField
          name="Государственный орган, утвердивший сводный план проверок"
          content={governmentInspection[0].state_body}
        />
      )}
      {governmentInspection[0].plan_name && (
        <DataField name="Наименование плана" content={governmentInspection[0].plan_name} />
      )}
      {governmentInspection[0].reason && (
        <DataField name="Основание для назначения проверки" content={governmentInspection[0].reason} />
      )}
      {governmentInspection[0].from_dttm && (
        <DataField name="Дата начала проверки" content={formatDate(governmentInspection[0].from_dttm)} />
      )}
    </Card>
  );
};

export default SubjectGovernmentInspection;
