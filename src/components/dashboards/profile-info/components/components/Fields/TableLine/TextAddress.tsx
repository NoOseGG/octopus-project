import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import CopyButton from '@app/components/dashboards/profile-info/components/components/Buttons/CopyButton/CopyButton';
import { GlobalOutlined } from '@ant-design/icons';
import { YANDEX_MAP_BASE_URL } from '@app/constants/Constants';
import { Popover } from 'antd';
import styled from 'styled-components';

type MyComponentProps = {
  field: string;
};

const TextAddress: React.FC<MyComponentProps> = ({ field }) => {
  const handleClick = (value: string) => {
    window.open(`${YANDEX_MAP_BASE_URL}${value}`, '_blank');
  };

  return (
    <S.RightCell>
      <S.Text>
        <AddressContainer>
          <CopyButton text={field} /> {field}{' '}
          <Popover content={'Показать на карте'}>
            <GlobalOutlined onClick={() => handleClick(field)} />
          </Popover>
        </AddressContainer>
      </S.Text>
    </S.RightCell>
  );
};

export default TextAddress;

const AddressContainer = styled.div`
  align-items: center;
  flex-wrap: wrap;
`;
