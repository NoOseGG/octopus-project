import React, { useState } from 'react';
import { WebSite } from '@app/store/types/Subject';
import { Link } from 'react-router-dom';
import { Modal, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { formatDate } from '@app/utils/utils';

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
      {Boolean(newWebSites.length) && (
        <>
          <Text strong={true}>Веб-сайт: </Text>{' '}
          {newWebSites[0].url && (
            <a href={`http://${webSites[0].url}`} target="_blank" rel="noreferrer">
              {newWebSites[0].url}
            </a>
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
        <Modal title="Веб адреса" visible={modalVisible} onCancel={handleCancel} footer={null}>
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
    title: 'Веб адрес',
    dataIndex: 'url',
    key: 'url',
    render: (webSite) => (
      <a href={`http://${webSite[0].url}`} target="_blank" rel="noreferrer">
        {webSite}
      </a>
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
