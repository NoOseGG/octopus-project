import React from 'react';
import { Card, Typography } from 'antd';
import { Description } from '@app/store/types/Subject';

type MyComponentProps = {
  descriptions: Description[];
};

const { Text } = Typography;

const SubjectDescriptions: React.FC<MyComponentProps> = ({ descriptions }) => {
  return (
    <Card title="Описание организации" style={{ width: '100%' }}>
      {Boolean(descriptions.length > 0) && (
        <>
          <Text>{descriptions[0].description}</Text>
        </>
      )}
    </Card>
  );
};

export default SubjectDescriptions;
