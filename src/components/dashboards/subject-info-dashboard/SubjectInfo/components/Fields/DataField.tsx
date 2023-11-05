import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

type MyComponentProps = {
  name: string;
  content: string | number | null;
};

const DataField: React.FC<MyComponentProps> = ({ name, content }) => {
  if (content === 0) {
    return (
      <>
        {content === 0 && (
          <>
            <Text strong={true}>{`${name}: `}</Text>
            <Text>0</Text>
            <br />
          </>
        )}
      </>
    );
  } else {
    return (
      <>
        {Boolean(content) && (
          <>
            <Text strong={true}>{`${name}: `}</Text>
            <Text>{content}</Text>
            <br />
          </>
        )}
      </>
    );
  }
};

export default DataField;
