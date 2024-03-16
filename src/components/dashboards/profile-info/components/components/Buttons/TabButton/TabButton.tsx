import React from 'react';
import styled from 'styled-components';

const TabButton: React.FC = ({ children }) => {
  return <TabButtonStyle>{children}</TabButtonStyle>;
};

export default TabButton;

const TabButtonStyle = styled('button')`
  color: #fff;
  background-color: #0057ff;
  border: none;
  border-radius: 5px;
  height: 1.625rem;
  padding: 0 0.5rem;
  font-size: 0.9375rem;
  line-height: 1.625rem;

  &:hover {
    background-color: #00a6ff;
    cursor: pointer;
  }
`;
