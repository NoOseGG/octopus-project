import React from 'react';
import { Address, Emails, Phone, WebSite } from '@app/store/types/Subject';
import { Card } from 'antd';
import SubjectPhones from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectContacts/SubjectPhones/SubjectPhones';
import SubjectAddresses from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectContacts/SubjectAddresses/SubjectAddresses';
import SubjectWebSites from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectContacts/SubjectWebSites/SubjectWebSites';
import SubjectEmails from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectContacts/SubjectEmails/SubjectEmails';

type MyComponentProps = {
  emails: Emails[];
  phones: Phone[];
  addresses: Address[];
  webSites: WebSite[];
};

const SubjectContacts: React.FC<MyComponentProps> = ({ emails, phones, addresses, webSites }) => {
  return (
    <>
      {Boolean(emails.length) && Boolean(phones.length) && Boolean(addresses.length) && Boolean(webSites.length) && (
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
