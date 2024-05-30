import React from 'react';
import styled from 'styled-components';
import { IServiceForItem } from '@app/components/dashboards/mainLanding/ServiceFor/data';

type Props = {
  item: IServiceForItem;
};

const Item: React.FC<Props> = ({ item }) => {
  return (
    <ItemContainer>
      <Image src={item.icon} />
      <Text>
        <StrongText>{item.title}</StrongText> {item.text}
      </Text>
    </ItemContainer>
  );
};

export default Item;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
`;

const Text = styled.div`
  padding: 0 50px;
  font-size: 20px;
  color: #000;
  line-height: 1.3;
  text-align: center;
`;

const StrongText = styled.span`
  font-weight: 700;
`;
