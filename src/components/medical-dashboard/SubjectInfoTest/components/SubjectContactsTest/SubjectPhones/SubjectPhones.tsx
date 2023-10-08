import React, { useState } from 'react';
import { Phone } from '@app/store/types/Subject';
import { Link } from 'react-router-dom';
import { Modal, Typography } from 'antd';

type MyComponentProps = {
  phones: Phone[];
};

const { Text } = Typography;

const SubjectPhones: React.FC<MyComponentProps> = ({ phones }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const success = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      {Boolean(phones.length) && (
        <>
          <Text strong={true}>Телефон: </Text> <Text copyable={{ tooltips: false }}>{phones[0].phone_number}</Text>
          {phones.length > 1 && (
            <Link to="#" onClick={success}>
              {' '}
              ({phones.length})
            </Link>
          )}
          <br />
        </>
      )}
      {Boolean(phones.length) && (
        <Modal title="Телефоны" visible={modalVisible} onCancel={handleCancel} footer={null}>
          <div>
            {phones.map((phone, index) => (
              <>
                <Text key={index} copyable={{ tooltips: false }}>{`${phone.phone_number}`}</Text>
                <br />
              </>
            ))}
          </div>
        </Modal>
      )}
    </>
  );
};

export default SubjectPhones;
