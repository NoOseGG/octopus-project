import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

type MyComponentProps = {
  name: string;
  content: string | null;
};

const CommercialField: React.FC<MyComponentProps> = ({ name, content }) => {
  return (
    <>
      <Text strong={true}>{name}</Text> <Text>{content}</Text>
      <br />
    </>
  );
};

export default CommercialField;
