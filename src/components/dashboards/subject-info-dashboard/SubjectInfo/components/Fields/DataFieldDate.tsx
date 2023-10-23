import React from 'react';
import { Typography } from 'antd';
import { formatDate } from '@app/utils/utils';

const { Text } = Typography;

type MyComponentProps = {
  name: string;
  content: string | number | null;
};

const DataField: React.FC<MyComponentProps> = ({ name, content }) => {
  return (
    <>
      {Boolean(content) && (
        <>
          <Text strong={true}>{`${name}: `}</Text>
          {typeof content === 'string' && <Text>{formatDate(content)}</Text>}
          <br />
        </>
      )}
    </>
  );
};

export default DataField;
