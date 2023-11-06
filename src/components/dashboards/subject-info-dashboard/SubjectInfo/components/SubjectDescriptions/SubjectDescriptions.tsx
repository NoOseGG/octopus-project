import React from 'react';
import { Card, Typography } from 'antd';
import { useAppSelector } from '@app/hooks/reduxHooks';

const { Text } = Typography;

const SubjectDescriptions: React.FC = () => {
  const descriptions = useAppSelector((state) => state.searchProfile.profile.descriptions);

  return (
    <>
      {Boolean(descriptions.length) && (
        <Card title="Описание организации" style={{ width: '100%' }}>
          {Boolean(descriptions.length > 0) && (
            <>
              <Text>{descriptions[0].description}</Text>
            </>
          )}
        </Card>
      )}
    </>
  );
};

export default SubjectDescriptions;
