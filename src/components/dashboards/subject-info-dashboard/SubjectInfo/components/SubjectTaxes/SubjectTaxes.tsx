import React from 'react';
import { TaxOffice, TaxOfficeArrea } from '@app/store/types/Subject';
import { Tabs } from 'antd';
import SubjectTaxOfficesArrears from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectTaxes/SubjectTaxOfficesArrears/SubjectTaxOfficesArrears';
import SubjectTaxOffices from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectTaxes/SubjectTaxOffices/SubjectTaxOffices';

type MyComponentProps = {
  taxOffices: TaxOffice[];
  taxOfficesArrears: TaxOfficeArrea[];
};

const SubjectTaxes: React.FC<MyComponentProps> = ({ taxOffices, taxOfficesArrears }) => {
  return (
    <Tabs defaultActiveKey={'1'} style={{ width: '100%' }}>
      {Boolean(taxOffices.length) && (
        <Tabs.TabPane tab={'ИМНС'} key={'1'}>
          <SubjectTaxOffices taxOffices={taxOffices} />
        </Tabs.TabPane>
      )}

      {Boolean(taxOfficesArrears.length) && (
        <Tabs.TabPane tab={'ЗАДОЛЖЕННОСТИ ИМНС'} key={'2'}>
          <SubjectTaxOfficesArrears taxOfficesArrears={taxOfficesArrears} />
        </Tabs.TabPane>
      )}
    </Tabs>
  );
};

export default SubjectTaxes;
