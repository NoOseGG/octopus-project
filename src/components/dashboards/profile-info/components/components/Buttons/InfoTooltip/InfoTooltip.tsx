import React from 'react';
import styled from 'styled-components';
import { BulbOutlined } from '@ant-design/icons';
import { Popover } from 'antd';

const InfoTooltip: React.FC = () => {
  return (
    <InfoTooltipContainer>
      <Popover trigger={'hover'} content={'Какой-то период'}>
        <BulbOutlined size={12} />
      </Popover>
    </InfoTooltipContainer>
  );
};

export default InfoTooltip;

const InfoTooltipContainer = styled.div``;
