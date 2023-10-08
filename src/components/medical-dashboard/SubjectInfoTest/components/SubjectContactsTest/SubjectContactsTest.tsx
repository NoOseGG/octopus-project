import React, { useState } from 'react';
import { Address, Emails, Phone } from '@app/store/types/Subject';
import { Card, Typography } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type MyComponentProps = {
  emails: Emails[];
  phones: Phone[];
  addresses: Address[];
};

const { Title, Text } = Typography;

const SubjectContacts: React.FC<MyComponentProps> = ({ emails, phones, addresses }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card title="Контакты" style={{ width: '100%' }}>
      {Boolean(emails.length) && (
        <>
          <Text strong={true}>Емайл: </Text> <Text copyable={true}>{emails[0].email}</Text>
          {emails.length > 1 && <Link to="#"> ({emails.length})</Link>}
        </>
      )}
      <br />
      {Boolean(phones.length) && (
        <>
          <Text strong={true}>Телефон: </Text> <Text copyable={true}>{phones[0].phone_number}</Text>
          {phones.length > 1 && <Link to="#"> ({phones.length})</Link>}
        </>
      )}
      <br />
      {Boolean(addresses.length) && (
        <>
          <Text strong={true}>Адрес: </Text> <Text copyable={true}>{addresses[0].full_address}</Text>
          {addresses.length > 1 && <Link to="#"> ({addresses.length})</Link>}
        </>
      )}
    </Card>
  );
};

export default SubjectContacts;
