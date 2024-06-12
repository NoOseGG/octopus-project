import React from 'react';
import styled from 'styled-components';
import { MyStyles } from '@app/styles/themes/myStyles/myStyles';

type TabButtonProps = {
  isActive: boolean;
  tabKey: string;
  handleClick: (key: string) => void;
};

const TabButton: React.FC<TabButtonProps> = ({ children, isActive, tabKey, handleClick }) => {
  return (
    <TabButtonStyle isActive={isActive} onClick={() => handleClick(tabKey)}>
      {children}
    </TabButtonStyle>
  );
};

export default TabButton;

type Props = {
  isActive: boolean;
};

const TabButtonStyle = styled('button')<Props>`
  color: ${(props) => (props.isActive ? MyStyles.primaryColor : '#fff')};
  background-color: ${(props) => (props.isActive ? MyStyles.focusColor : MyStyles.primaryColor)};
  border: 1px solid rgba(170, 170, 170, 0.33);
  border-radius: 5px;
  height: 1.725rem;
  padding: 0 0.5rem;
  font-size: 0.9375rem;
  line-height: 1.625rem;
  cursor: pointer;

  &:hover {
    color: ${MyStyles.primaryColor};
    background-color: #fff;
  }
`;
