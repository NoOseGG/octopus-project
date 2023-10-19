import React, { useState } from 'react';
import { WebSite } from '@app/store/types/Subject';
import { Link } from 'react-router-dom';
import { Modal, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { formatDate, formatPhoneNumber } from '@app/utils/utils';

type MyComponentProps = {
  webSites: WebSite[];
};

const { Text } = Typography;

const SubjectWebSites: React.FC<MyComponentProps> = ({ webSites }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const newWebSites = webSites.map((webSite) => ({
    ...webSite,
    from_dttm: `${formatDate(webSite.from_dttm)}`,
    to_dttm: `${formatDate(webSite.to_dttm)}`,
  }));

  const success = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      {Boolean(webSites.length) && (
        <>
          <Text strong={true}>Электронная почта: </Text>{' '}
          {webSites[0].url ? (
            <Link to={webSites[0].url} target="_blank">
              {webSites[0].url}
            </Link>
          ) : (
            <Link to="#" target="_blank">
              {webSites[0].url}
            </Link>
          )}
          {newWebSites.length > 1 && (
            <Link to="#" onClick={success}>
              {' '}
              ({newWebSites.length})
            </Link>
          )}
          <br />
        </>
      )}
      {Boolean(newWebSites.length) && (
        <Modal title="Электроная почта" visible={modalVisible} onCancel={handleCancel} footer={null}>
          <div>
            <Table columns={columns} dataSource={newWebSites} pagination={{ size: 'small' }}></Table>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SubjectWebSites;

const columns: ColumnsType<WebSite> = [
  {
    title: 'Электронная почта',
    dataIndex: 'url',
    key: 'url',
    render: (webSite) => (
      <Link to={webSite.url} target="_blank">
        {formatPhoneNumber(webSite)}
      </Link>
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
