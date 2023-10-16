import React, { useState } from 'react';
import { Phone } from '@app/store/types/Subject';
import { Link } from 'react-router-dom';
import { Modal, Table, Typography } from 'antd';
import { formatDate, formatPhoneNumber } from '@app/utils/utils';
import { ColumnsType } from 'antd/es/table';
import { MODAL_WIDTH } from '@app/constants/Constants';

type MyComponentProps = {
  phones: Phone[];
};

const { Text } = Typography;

const SubjectPhones: React.FC<MyComponentProps> = ({ phones }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const newPhones = phones.map((phone) => ({
    ...phone,
    from_dttm: `${formatDate(phone.from_dttm)}`,
    to_dttm: `${formatDate(phone.to_dttm)}`,
  }));

  const success = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      {Boolean(newPhones.length) && (
        <>
          <Text strong={true}>Телефон: </Text> <Text copyable={{ tooltips: false }}>{phones[0].phone_number}</Text>
          {newPhones.length > 1 && (
            <Link to="#" onClick={success}>
              {' '}
              ({phones.length})
            </Link>
          )}
          <br />
        </>
      )}
      {Boolean(newPhones.length) && (
        <Modal title="Телефоны" visible={modalVisible} onCancel={handleCancel} footer={null} width={MODAL_WIDTH}>
          <div>
            <Table columns={columns} dataSource={newPhones}></Table>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SubjectPhones;

const columns: ColumnsType<Phone> = [
  {
    title: 'Телефон',
    dataIndex: 'phone_number',
    key: 'phone_number',
    render: (text) => (
      <Text strong={true} copyable={{ tooltips: false }}>
        {formatPhoneNumber(text)}
      </Text>
    ),
  },
  {
    title: 'Дата начала действия',
    dataIndex: 'from_dttm',
    key: 'from_dttm',
  },
  {
    title: 'Дата окончания действия',
    dataIndex: 'to_dttm',
    key: 'to_dttm',
  },
];
