import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { BulbOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

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
                <Tooltip destroyTooltipOnHide={true} placement={'left'} title={description}>
                  <BulbOutlined />
                </Tooltip>
              )}
            </S.Text>
          </S.RightCell>
        </S.StyledRow>
      )}
    </>
  );
};

export default TableLineTooltip;
