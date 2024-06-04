import React from 'react';
import styled from 'styled-components';

const Links: React.FC = () => {
  return (
    <LinksContainer>
      <Item>ВОЗМОЖНОСТИ</Item>
      <Item>ИСТОЧНИКИ</Item>
      <Item>КАРТА</Item>
      <Item>КОМУ ПОДОЙДЕТ</Item>
      <Item>ТАРИФЫ</Item>
    </LinksContainer>
  );
};

export default Links;

const LinksContainer = styled.div`
  display: flex;
  gap: 40px;
`;

const Item = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #d0daf5;
  cursor: pointer;
  text-transform: uppercase;
`;
