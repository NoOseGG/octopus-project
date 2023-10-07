import React, { useState } from 'react';
import { Emails, Phone } from '@app/store/types/Subject';
import { Card } from 'antd';

type MyComponentProps = {
  emails: Emails[];
  phones: Phone[];
};

const SubjectPhones: React.FC<MyComponentProps> = ({ emails, phones }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card title="Контакты" style={{ width: '100%' }}>
      {emails.length && <p>Емайл: {emails[0].email}</p>}
      {phones.length && <p>Телефон: {phones[0].phone_number}</p>}
    </Card>
  );
};

export default SubjectPhones;
