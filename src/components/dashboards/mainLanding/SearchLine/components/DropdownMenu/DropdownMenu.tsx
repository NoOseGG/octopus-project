import React from 'react';
import styled from 'styled-components';
import { Organization } from '@app/store/slices/search/searchSlice';

type MyComponentProps = {
  data: Organization[];
};

const DropdownMenu: React.FC<MyComponentProps> = ({ data }) => {
  return (
    <DropdownMenuContainer>
      {Boolean(data.length) && (
        <>
          {data.map((item, index) => (
            <div key={index}>{item.full_name}</div>
          ))}
        </>
      )}
    </DropdownMenuContainer>
  );
};

export default DropdownMenu;

const DropdownMenuContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  width: 100%;
  max-height: 300px;
  overflow-y: scroll;
`;
