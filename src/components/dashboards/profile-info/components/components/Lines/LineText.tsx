import React, { ReactNode } from 'react';
import styled from 'styled-components';
import CopyButton from '@app/components/dashboards/profile-info/components/components/Buttons/CopyButton/CopyButton';
import { formatDate, formatPhoneNumber } from '@app/utils/utils';
import YandexIcon from '@app/components/dashboards/profile-info/components/components/Lines/YandexIcon';

type MyComponent = {
  name: string;
  content: string | null;
  isCopyable?: boolean;
  isDate?: boolean;
  isPhone?: boolean;
  isMap?: boolean;
  isLink?: boolean;
  isColor?: boolean;
  buttonCollapse?: ReactNode;
};

const LineText: React.FC<MyComponent> = ({
  name,
  content,
  isCopyable,
  isDate,
  isPhone,
  isMap,
  isLink,
  isColor,
  buttonCollapse,
}) => {
  return content ? (
    <Line>
      <LeftSide>{name}</LeftSide>
      <RightSide>
        {isCopyable && <CopyButton text={content} />}
        {!isDate && !isPhone && !isLink && <Text isColor={isColor}>{content}</Text>}
        {isDate && <Text isColor={isColor}>{formatDate(content)}</Text>}
        {isPhone && <Text isColor={isColor}>{formatPhoneNumber(content)}</Text>}
        {isLink && (
          <TextLink href={`https://${content}`} target="_blank" rel="noopener noreferrer">
            {content}
          </TextLink>
        )}
        {isMap && <YandexIcon address={content} />}
        {buttonCollapse && buttonCollapse}
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

type TextProps = {
  isColor: boolean | undefined;
};

const Text = styled.span<TextProps>`
  color: #000;
  text-decoration: ${(props) => props.isColor && 'line-through'};
  text-decoration-color: ${(props) => props.isColor && '#E27150'};
  text-decoration-thickness: ${(props) => props.isColor && '1.5px'};
`;

const TextLink = styled.a`
  text-decoration: underline;
`;
