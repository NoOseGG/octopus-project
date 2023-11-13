import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

type MyComponentProps = {
  name: string;
  content: string | number | null;
};

const DataFieldUrl: React.FC<MyComponentProps> = ({ name, content }) => {
  return (
    <>
      {Boolean(content) && (
        <>
          <Text strong={true}>{`${name}: `}</Text>
          {typeof content === 'string' && (
            <a href={content} target="_blank" rel="noreferrer">
              {content}
            </a>
          )}
          <br />
        </>
      )}
    </>
  );
};

export default DataFieldUrl;
