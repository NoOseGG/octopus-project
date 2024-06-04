import React from 'react';

import styled from 'styled-components';

import { scrollToLanding, ScrollType } from '@app/components/dashboards/mainLanding/utils/utils';

const Links: React.FC = () => {
  return (
    <LinksContainer>
      <Item onClick={() => scrollToLanding(ScrollType.MainFunction)}>ВОЗМОЖНОСТИ</Item>
      <Item onClick={() => scrollToLanding(ScrollType.Sources)}>ИСТОЧНИКИ</Item>
      <Item onClick={() => scrollToLanding(ScrollType.Map)}>КАРТА</Item>
      <Item onClick={() => scrollToLanding(ScrollType.ServiceFor)}>КОМУ ПОДОЙДЕТ</Item>
      <Item onClick={() => scrollToLanding(ScrollType.Tariffs)}>ТАРИФЫ</Item>
    </LinksContainer>
  );
};

export default Links;

const LinksContainer = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 700px) {
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Item = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #d0daf5;
  cursor: pointer;
  text-transform: uppercase;
`;
