import React from 'react';
import { Space, Spin } from 'antd';

const Spiner: React.FC = () => {
  return (
    <Space size="middle">
      <Spin size="large" />
    </Space>
  );
};

export default Spiner;
