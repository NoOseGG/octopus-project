import React from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import styled from 'styled-components';

type MyComponentProps = {
  isCollapsed?: boolean;
  setCollapsed: (value: boolean) => void;
};

const CollapsedButton: React.FC<MyComponentProps> = ({ isCollapsed, setCollapsed }) => {
  const handleClick = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <CollapseButtonContainer onClick={handleClick}>
      {isCollapsed ? <UpOutlined style={{ color: 'dodgerblue' }} /> : <DownOutlined style={{ color: 'dodgerblue' }} />}
    </CollapseButtonContainer>
  );
};

export default CollapsedButton;

const CollapseButtonContainer = styled.div`
  cursor: pointer;
`;
