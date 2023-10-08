import React, { useState } from 'react';
import { Emails } from '@app/store/types/Subject';
import { Link } from 'react-router-dom';
import { Modal, Typography } from 'antd';

type MyComponentProps = {
  emails: Emails[];
};

const { Text } = Typography;

const SubjectEmails: React.FC<MyComponentProps> = ({ emails }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const success = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      {Boolean(emails.length) && (
        <>
          <Text strong={true}>Емайл: </Text> <Text copyable={{ tooltips: false }}>{emails[0].email}</Text>
          {emails.length > 1 && (
            <Link to="#" onClick={success}>
              {' '}
              ({emails.length})
            </Link>
          )}
          <br />
        </>
      )}
      {Boolean(emails.length) && (
        <Modal title="Емейлы" visible={modalVisible} onCancel={handleCancel} footer={null}>
          <div>
            {emails.map((email, index) => (
              <>
                <Text key={index} copyable={true}>{`${email.email}`}</Text>
                <br />
              </>
            ))}
          </div>
        </Modal>
      )}
    </>
  );
};

export default SubjectEmails;
