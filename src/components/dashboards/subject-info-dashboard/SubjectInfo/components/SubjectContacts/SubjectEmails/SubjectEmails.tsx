import React, { useState } from 'react';
import { Emails } from '@app/store/types/Subject';
import { Link } from 'react-router-dom';
import { Modal, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { formatDate } from '@app/utils/utils';
import { MODAL_WIDTH_SMALL } from '@app/constants/Constants';

type MyComponentProps = {
  emails: Emails[];
};

const { Text } = Typography;

const SubjectEmails: React.FC<MyComponentProps> = ({ emails }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const newEmails = emails.map((email) => ({
    ...email,
    from_dttm: `${formatDate(email.from_dttm)}`,
  }));

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
        <Modal
          title="Электронная почта"
          visible={modalVisible}
          onCancel={handleCancel}
          footer={null}
          width={MODAL_WIDTH_SMALL}
        >
          <div>
            <Table columns={columns} dataSource={newEmails} pagination={{ size: 'small' }}></Table>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SubjectEmails;

const columns: ColumnsType<Emails> = [
  {
    title: 'Электронная почта',
    dataIndex: 'email',
    key: 'email',
    render: (text) => (
      <Text strong={true} copyable={{ tooltips: false }}>
        {text}
      </Text>
    ),
  },
  {
    title: 'Дата начала действия',
    dataIndex: 'from_dttm',
    key: 'from_dttm',
  },
];
