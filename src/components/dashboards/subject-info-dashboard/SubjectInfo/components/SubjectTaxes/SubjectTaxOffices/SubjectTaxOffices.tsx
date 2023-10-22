import React from 'react';
import { TaxOffice } from '@app/store/types/Subject';
import { Card } from 'antd';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import { formatDate } from '@app/utils/utils';

type MyComponentProps = {
  taxOffices: TaxOffice[];
};

const SubjectTaxOffices: React.FC<MyComponentProps> = ({ taxOffices }) => {
  const newTaxOffices = taxOffices.map((taxOffice) => ({
    ...taxOffice,
    from_dttm: `${formatDate(taxOffice.from_dttm)}`,
    to_dttm: `${formatDate(taxOffice.to_dttm)}`,
  }));

  return (
    <Card style={{ width: '100%' }}>
      {Boolean(newTaxOffices.length) && (
        <>
          <DataField name="Код" content={newTaxOffices[0].code} />
          <DataField name="Наимменвание" content={newTaxOffices[0].name} />
          <DataField name="Код региона" content={newTaxOffices[0].region_code} />
          <DataField name="Название региона" content={newTaxOffices[0].region_name} />
          <DataField name="Дата начала действия" content={newTaxOffices[0].from_dttm} />
          <DataField name="Дата окончания действия" content={newTaxOffices[0].to_dttm} />
        </>
      )}
    </Card>
  );
};

export default SubjectTaxOffices;
