import React from 'react';
import { Tabs } from 'antd';
import SubjectTaxOfficesArrears from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectTaxes/SubjectTaxOfficesArrears/SubjectTaxOfficesArrears';
import SubjectTaxOffices from '@app/components/dashboards/search-dashboard/SubjectInfo/components/SubjectTaxes/SubjectTaxOffices/SubjectTaxOffices';
import { useAppSelector } from '@app/hooks/reduxHooks';

const SubjectTaxes: React.FC = () => {
  const taxOffices = useAppSelector((state) => state.searchProfile.profile.tax_offices);
  const taxOfficesArrears = useAppSelector((state) => state.searchProfile.profile.tax_offices_arrears);

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
