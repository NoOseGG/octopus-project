import React from 'react';
import styled from 'styled-components';
import { MyStyles } from '@app/styles/themes/myStyles/myStyles';

const TabButton: React.FC = ({ children }) => {
  return <TabButtonStyle>{children}</TabButtonStyle>;
};

export default TabButton;

const TabButtonStyle = styled('button')`
  color: #fff;
  background-color: ${MyStyles.primaryColor};
  border: 1px solid rgba(170, 170, 170, 0.33);
  border-radius: 5px;
  height: 1.725rem;
  padding: 0 0.5rem;
  font-size: 0.9375rem;
  line-height: 1.625rem;

  &:hover {
    color: ${MyStyles.primaryColor};
    background-color: #fff;
    cursor: pointer;
  }
`;
