import React from 'react';
import styled from 'styled-components';
import { BulbOutlined } from '@ant-design/icons';
import { Popover } from 'antd';

type MyComponentProps = {
  description: string;
};

const InfoTooltip: React.FC<MyComponentProps> = ({ description }) => {
  return (
    <InfoTooltipContainer>
      <Popover trigger={'hover'} content={<StyledTooltipContent>{description}</StyledTooltipContent>}>
        <BulbOutlined size={12} />
      </Popover>
    </InfoTooltipContainer>
  );
};

export default InfoTooltip;

const InfoTooltipContainer = styled.span`
  cursor: pointer;
`;

const StyledTooltipContent = styled.div`
  max-width: 700px;
  overflow: auto;
`;
