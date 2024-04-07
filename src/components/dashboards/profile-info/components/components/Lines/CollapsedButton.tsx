import React from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { MyStyles } from '@app/styles/themes/myStyles/myStyles';

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
      {isCollapsed ? <UpOutlined /> : <DownOutlined />}
    </CollapseButtonContainer>
  );
};

export default CollapsedButton;

const CollapseButtonContainer = styled.div`
  color: ${MyStyles.primaryColor};
  cursor: pointer;
`;
