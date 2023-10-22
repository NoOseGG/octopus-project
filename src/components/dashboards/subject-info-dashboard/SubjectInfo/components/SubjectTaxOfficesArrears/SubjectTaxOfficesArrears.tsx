import React from 'react';
import { TaxOfficeArrea } from '@app/store/types/Subject';
import { Card } from 'antd';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import { formatDate } from '@app/utils/utils';

type MyComponentProps = {
  taxOfficesArrears: TaxOfficeArrea[];
};

const SubjectTaxOfficesArrears: React.FC<MyComponentProps> = ({ taxOfficesArrears }) => {
  const newTaxOfficesArrears = taxOfficesArrears.map((taxOfficeArrea) => ({
    ...taxOfficeArrea,
    from_dttm: `${formatDate(taxOfficeArrea.from_dttm)}`,
    to_dttm: `${formatDate(taxOfficeArrea.to_dttm)}`,
  }));

  return (
    <Card style={{ width: '100%' }}>
      {Boolean(newTaxOfficesArrears.length) && (
        <>
          <DataField name="Код" content={newTaxOfficesArrears[0].code} />
          <DataField name="Наимменвание" content={newTaxOfficesArrears[0].name} />
          <DataField name="Код региона" content={newTaxOfficesArrears[0].region_code} />
          <DataField name="Название региона" content={newTaxOfficesArrears[0].region_name} />
          <DataField name="Дата начала действия" content={newTaxOfficesArrears[0].from_dttm} />
          <DataField name="Дата окончания действия" content={newTaxOfficesArrears[0].to_dttm} />
        </>
      )}
    </Card>
  );
};

export default SubjectTaxOfficesArrears;
