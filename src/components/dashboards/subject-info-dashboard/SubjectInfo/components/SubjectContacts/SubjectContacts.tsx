import React from 'react';
import { Card } from 'antd';
import SubjectPhones from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectContacts/SubjectPhones/SubjectPhones';
import SubjectAddresses from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectContacts/SubjectAddresses/SubjectAddresses';
import SubjectWebSites from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectContacts/SubjectWebSites/SubjectWebSites';
import SubjectEmails from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectContacts/SubjectEmails/SubjectEmails';
import { useAppSelector } from '@app/hooks/reduxHooks';

const SubjectContacts: React.FC = () => {
  const emails = useAppSelector((state) => state.searchProfile.profile.emails);
  const phones = useAppSelector((state) => state.searchProfile.profile.phones);
  const addresses = useAppSelector((state) => state.searchProfile.profile.addresses);
  const webSites = useAppSelector((state) => state.searchProfile.profile.web_sites);

  return (
    <>
      {(Boolean(emails.length) || Boolean(phones.length) || Boolean(addresses.length) || Boolean(webSites.length)) && (
        <Card title="Контакты" style={{ width: '100%' }}>
          <SubjectEmails emails={emails} />
          <SubjectPhones phones={phones} />
          <SubjectAddresses addresses={addresses} />
          <SubjectWebSites webSites={webSites} />
        </Card>
      )}
    </>
  );
};

export default SubjectContacts;
