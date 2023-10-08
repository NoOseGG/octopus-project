import React, { useState } from 'react';
import { Address } from '@app/store/types/Subject';
import { Link } from 'react-router-dom';
import { Modal, Typography } from 'antd';

type MyComponentProps = {
  addresses: Address[];
};

const { Text } = Typography;

const SubjectAddresses: React.FC<MyComponentProps> = ({ addresses }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const success = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      {Boolean(addresses.length) && (
        <>
          <Text strong={true}>Адрес: </Text> <Text copyable={{ tooltips: false }}>{addresses[0].full_address}</Text>
          {addresses.length > 1 && (
            <Link to="#" onClick={success}>
              {' '}
              ({addresses.length})
            </Link>
          )}
        </>
      )}
      {Boolean(addresses.length) && (
        <Modal title="Адреса" visible={modalVisible} onCancel={handleCancel} footer={null}>
          <div>
            {addresses.map((address, index) => (
              <>
                <Text key={index} copyable={true}>{`${address.full_address}`}</Text>
                <br />
              </>
            ))}
          </div>
        </Modal>
      )}
      <br />
    </>
  );
};

export default SubjectAddresses;
