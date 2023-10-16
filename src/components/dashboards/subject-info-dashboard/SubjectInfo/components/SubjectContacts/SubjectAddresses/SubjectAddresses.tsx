import React, { useState } from 'react';
import { Address } from '@app/store/types/Subject';
import { Link } from 'react-router-dom';
import { Modal, Table, Typography } from 'antd';
import { formatDate } from '@app/utils/utils';
import { ColumnsType } from 'antd/es/table';

type MyComponentProps = {
  addresses: Address[];
};

const { Text } = Typography;

const SubjectAddresses: React.FC<MyComponentProps> = ({ addresses }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const newAddresses = addresses.map((address) => ({
    ...address,
    from_dttm: `${formatDate(address.from_dttm)}`,
  }));

  const success = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      {Boolean(newAddresses.length) && (
        <>
          <Text strong={true}>Адрес: </Text> <Text copyable={{ tooltips: false }}>{newAddresses[0].full_address}</Text>
          {newAddresses.length > 1 && (
            <Link to="#" onClick={success}>
              {' '}
              ({newAddresses.length})
            </Link>
          )}
        </>
      )}
      {Boolean(newAddresses.length) && (
        <Modal title="Адреса" visible={modalVisible} onCancel={handleCancel} footer={null} width={'auto'}>
          <div>
            <Table columns={columns} dataSource={newAddresses}></Table>
          </div>
        </Modal>
      )}
      <br />
    </>
  );
};

export default SubjectAddresses;

const columns: ColumnsType<Address> = [
  {
    title: 'Почтовый индекс',
    dataIndex: 'postcode',
    key: 'postcode',
  },
  {
    title: 'Область',
    dataIndex: 'region',
    key: 'region',
  },
  {
    title: 'Район',
    dataIndex: 'district',
    key: 'district',
  },
  {
    title: 'Населенный пункт',
    dataIndex: 'settlement',
    key: 'settlement',
  },
  {
    title: 'Полный адрес',
    dataIndex: 'full_address',
    key: 'full_address',
  },
  {
    title: 'Дата начала действия',
    dataIndex: 'from_dttm',
    key: 'from_dttm',
  },
];
