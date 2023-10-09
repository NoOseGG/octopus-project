import React from 'react';
import { Address, Emails, Phone, WebSite } from '@app/store/types/Subject';
import { Card } from 'antd';
import SubjectEmails from '@app/components/medical-dashboard/SubjectInfoTest/components/SubjectContactsTest/SubjectEmails/SubjectEmails';
import SubjectPhones from '@app/components/medical-dashboard/SubjectInfoTest/components/SubjectContactsTest/SubjectPhones/SubjectPhones';
import SubjectAddresses from '@app/components/medical-dashboard/SubjectInfoTest/components/SubjectContactsTest/SubjectAddresses/SubjectAddresses';
import SubjectWebSites from '@app/components/medical-dashboard/SubjectInfoTest/components/SubjectContactsTest/SubjectWebSites/SubjectWebSites';

type MyComponentProps = {
  emails: Emails[];
  phones: Phone[];
  addresses: Address[];
  webSites: WebSite[];
};

const SubjectContacts: React.FC<MyComponentProps> = ({ emails, phones, addresses, webSites }) => {
  return (
    <Card title="Контакты" style={{ width: '100%' }}>
      <SubjectEmails emails={emails} />
      <SubjectPhones phones={phones} />
      <SubjectAddresses addresses={addresses} />
      <SubjectWebSites webSites={webSites} />
    </Card>
  );
};

export default SubjectContacts;
