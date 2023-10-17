import React from 'react';
import { GovernmentInspection } from '@app/store/types/Subject';
import { formatDate } from '@app/utils/utils';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';

type MyComponentProps = {
  governmentInspections: GovernmentInspection;
};

const SingleCommercialRegister: React.FC<MyComponentProps> = ({ governmentInspections }) => {
  return (
    <>
      {governmentInspections.legal_entity_id_gov && (
        <DataField name="УНП контролирующего (надзорного) органа" content={governmentInspections.legal_entity_id_gov} />
      )}
      {governmentInspections.legal_entity_id_gov_name && (
        <DataField
          name="Наименование контролирующего (надзорного) органа"
          content={governmentInspections.legal_entity_id_gov_name}
        />
      )}
      {governmentInspections.plan_type && <DataField name="Тип плана" content={governmentInspections.plan_type} />}
      {governmentInspections.state_body && (
        <DataField
          name="Государственный орган, утвердивший сводный план проверок"
          content={governmentInspections.state_body}
        />
      )}
      {governmentInspections.plan_name && (
        <DataField name="Наименование плана" content={governmentInspections.plan_name} />
      )}
      {governmentInspections.reason && (
        <DataField name="Основание для назначения проверки" content={governmentInspections.reason} />
      )}
      {governmentInspections.from_dttm && (
        <DataField name="Дата начала проверки" content={formatDate(governmentInspections.from_dttm)} />
      )}
    </>
  );
};

export default SingleCommercialRegister;
