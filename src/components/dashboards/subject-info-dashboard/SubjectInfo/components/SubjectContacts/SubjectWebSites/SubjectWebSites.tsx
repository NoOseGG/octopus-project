import React, { useState } from 'react';
import { WebSite } from '@app/store/types/Subject';
import { Link } from 'react-router-dom';
import { Modal, Typography } from 'antd';

type MyComponentProps = {
  webSites: WebSite[];
};

const { Text } = Typography;

const SubjectWebSites: React.FC<MyComponentProps> = ({ webSites }) => {
  const [modalVisible, setModalVisible] = useState(false);

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
          <Text strong={true}>Вэб сайт: </Text> <Text copyable={{ tooltips: false }}>{webSites[0].url}</Text>
          {webSites.length > 1 && (
            <Link to="#" onClick={success}>
              {' '}
              ({webSites.length})
            </Link>
          )}
          <br />
        </>
      )}
      {Boolean(webSites.length) && (
        <Modal title="Вэб сайты" visible={modalVisible} onCancel={handleCancel} footer={null}>
          <div>
            {webSites.map((webSite, index) => (
              <React.Fragment key={index}>
                <Text key={index} copyable={{ tooltips: false }}>{`${webSite.url}`}</Text>
                <br />
              </React.Fragment>
            ))}
          </div>
        </Modal>
      )}
    </>
  );
};

export default SubjectWebSites;
