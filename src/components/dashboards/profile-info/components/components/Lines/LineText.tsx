import React from 'react';
import styled from 'styled-components';
import CopyButton from '@app/components/dashboards/profile-info/components/components/Buttons/CopyButton/CopyButton';
import { formatDate } from '@app/utils/utils';

type MyComponent = {
  name: string;
  content: string | null;
  isCopyable?: boolean;
  isDate?: boolean;
};

const LineText: React.FC<MyComponent> = ({ name, content, isCopyable, isDate }) => {
  return content ? (
    <Line>
      <LeftSide>{name}</LeftSide>
      <RightSide>
        {isCopyable && <CopyButton text={content} />}
        {isDate ? formatDate(content) : content}
      </RightSide>
    </Line>
  ) : null;
};

export default LineText;

const Line = styled.div`
  display: flex;

  &:nth-child(odd) {
    background-color: #f2f2f2;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  font-size: 0.9374rem;
  padding: 2px 0;
  color: #666;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  font-size: 0.9374rem;
  padding: 2px 0;
  gap: 5px;
  color: black;
`;
