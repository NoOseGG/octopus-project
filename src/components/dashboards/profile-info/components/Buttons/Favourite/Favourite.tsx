import React from 'react';
import styled from 'styled-components';
import { Button } from '@app/components/common/buttons/Button/Button';
import { AimOutlined } from '@ant-design/icons';

const Favourite: React.FC = () => {
  return (
    <FavouriteButton>
      Отслеживать <AimOutlined />
    </FavouriteButton>
  );
};

export default Favourite;

const FavouriteButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-inline: 15px;
  height: 2rem;
  background: white;
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1.375rem;
  padding: 0.3125rem 0.9375rem;
  border: 1px solid rgba(170, 170, 170, 0.33);

  &:hover {
    color: #ff4d78;
    border-color: #aaaaaa54;
    background-color: #fbf3e9;
  }
`;
