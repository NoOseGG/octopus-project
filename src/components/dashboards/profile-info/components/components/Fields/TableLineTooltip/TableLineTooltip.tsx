import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { BulbOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import styled from 'styled-components';

type MyComponentProps = {
  name: string | null | undefined;
  field: string | null | undefined;
  description: string | null;
};

const TableLineTooltip: React.FC<MyComponentProps> = ({ name, field, description }) => {
  return (
    <>
      {name && field && (
        <S.StyledRow>
          <S.LeftCell>
            <S.Text>{name}</S.Text>
          </S.LeftCell>
          <S.RightCell>
            <S.Text>
              {field}{' '}
              {description && (
                <Popover trigger={'hover'} content={<StyledTooltipContent>{description}</StyledTooltipContent>}>
                  <BulbOutlined />
                </Popover>
              )}
            </S.Text>
          </S.RightCell>
        </S.StyledRow>
      )}
    </>
  );
};

export default TableLineTooltip;

const StyledTooltipContent = styled.div`
  max-width: 700px;
  max-height: 250px;
  overflow: auto;
`;
