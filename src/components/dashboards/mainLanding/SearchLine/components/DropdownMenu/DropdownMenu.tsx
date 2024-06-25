import React from 'react';
import styled from 'styled-components';
import { Organization } from '@app/store/slices/search/searchSlice';

type MyComponentProps = {
  data: Organization[];
  handleClick: (value: string, unp: string) => void;
};

const DropdownMenu: React.FC<MyComponentProps> = ({ data, handleClick }) => {
  return (
    <DropdownMenuContainer>
      {Boolean(data.length) && (
        <>
          {data.map((item, index) => (
            <Item onClick={() => handleClick(item.full_name, item.unn)} key={index}>
              {item.full_name}
            </Item>
          ))}
        </>
      )}
    </DropdownMenuContainer>
  );
};

export default DropdownMenu;

const DropdownMenuContainer = styled.div`
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
`;

const Item = styled.div`
  word-wrap: break-word;
  cursor: pointer;
  padding: 10px;

  &:hover {
    background-color: #efecec;
  }
`;
