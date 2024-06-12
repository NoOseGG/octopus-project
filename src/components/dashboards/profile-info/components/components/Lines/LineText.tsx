import React, { ReactNode } from 'react';
import styled from 'styled-components';
import CopyButton from '@app/components/dashboards/profile-info/components/components/Buttons/CopyButton/CopyButton';
import { formatDate, formatPhoneNumber } from '@app/utils/utils';
import YandexIcon from '@app/components/dashboards/profile-info/components/components/Lines/YandexIcon';
import { BulbOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import AffiliationButton from '@app/components/dashboards/profile-info/components/components/Buttons/AffiliationButton/AffiliationButton';

type MyComponent = {
  name: string;
  content: string | null;
  isCopyable?: boolean;
  isDate?: boolean;
  isPhone?: boolean;
  isMap?: boolean;
  isLink?: boolean;
  isColor?: boolean;
  isContact?: boolean;
  description?: string | null;
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
  isContact,
  description,
  buttonCollapse,
}) => {
  return content ? (
    <Line>
      <LeftSide>{name}</LeftSide>
      <RightSide>
        {!isDate && !isPhone && !isLink && <Text isColor={isColor}>{content}</Text>}
        {isDate && <Text isColor={isColor}>{formatDate(content)}</Text>}
        {isPhone && <Text isColor={isColor}>{formatPhoneNumber(content)}</Text>}
        {isLink && (
          <TextLink href={`https://${content}`} target="_blank" rel="noopener noreferrer">
            {content}
          </TextLink>
        )}
        {isCopyable && <CopyButton text={content} />}
        {isMap && <YandexIcon address={content} />}
        {isContact && <AffiliationButton query={content} />}
        {!!description && (
          <Popover trigger={'hover'} content={<StyledTooltipContent>{description}</StyledTooltipContent>}>
            <BulbOutlined />
          </Popover>
        )}
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

  font-size: 0.9374rem;

  @media (max-width: 700px) {
    font-size: 12px;
    gap: 5px;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  padding: 2px 0;
  color: #000;
  word-break: break-word;
`;

const RightSide = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  padding: 2px 0;
  gap: 5px;
  color: #333;
`;

type TextProps = {
  isColor: boolean | undefined;
};

const Text = styled.span<TextProps>`
  text-decoration: ${(props) => props.isColor && 'line-through'};
  text-decoration-color: ${(props) => props.isColor && '#E27150'};
  text-decoration-thickness: ${(props) => props.isColor && '1px'};
`;

const TextLink = styled.a`
  text-decoration: underline;
`;

const StyledTooltipContent = styled.div`
  max-width: 700px;
  max-height: 250px;
  overflow: auto;
`;
