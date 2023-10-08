import React from 'react';
import { Address, Emails, Phone } from '@app/store/types/Subject';
import { Card } from 'antd';
import SubjectEmails from '@app/components/medical-dashboard/SubjectInfoTest/components/SubjectContactsTest/SubjectEmails/SubjectEmails';
import SubjectPhones from '@app/components/medical-dashboard/SubjectInfoTest/components/SubjectContactsTest/SubjectPhones/SubjectPhones';
import SubjectAddresses from '@app/components/medical-dashboard/SubjectInfoTest/components/SubjectContactsTest/SubjectAddresses/SubjectAddresses';

type MyComponentProps = {
  emails: Emails[];
  phones: Phone[];
  addresses: Address[];
};

const SubjectContacts: React.FC<MyComponentProps> = ({ emails, phones, addresses }) => {
  return (
    <Card title="Контакты" style={{ width: '100%' }}>
      <SubjectEmails emails={emails} />
      <SubjectPhones phones={phones} />
      <SubjectAddresses addresses={addresses} />
    </Card>
  );
};

export default SubjectContacts;
