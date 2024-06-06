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
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #073d49;
  color: #fff;
  border-radius: 16px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Text = styled.div`
  max-width: 400px;
  font-size: 16px;
  line-height: 1.3;
  text-align: center;
`;

const StrongText = styled.span`
  font-weight: 700;
`;
