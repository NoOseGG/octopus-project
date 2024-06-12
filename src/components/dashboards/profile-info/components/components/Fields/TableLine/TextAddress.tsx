import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import CopyButton from '@app/components/dashboards/profile-info/components/components/Buttons/CopyButton/CopyButton';
import { YANDEX_MAP_BASE_URL } from '@app/constants/Constants';
import { Popover } from 'antd';
import styled from 'styled-components';
import './TextAddress.styles.css';

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
            {/*<GlobalOutlined onClick={() => handleClick(field)} />*/}
            <IconContainer id={'iconContainer'} onClick={() => handleClick(field)}>
              <svg
                id={'yandexMap'}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id={'firstPath'}
                  d="M8 1C4.6862 1 2 3.6862 2 7C2 8.6563 2.6711 10.156 3.7565 11.2417C4.8422 12.328 7.4 13.9 7.55 15.55C7.57249 15.7974 7.7516 16 8 16C8.2484 16 8.42751 15.7974 8.45 15.55C8.6 13.9 11.1578 12.328 12.2435 11.2417C13.3289 10.156 14 8.6563 14 7C14 3.6862 11.3138 1 8 1Z"
                  fill="#FF4433"
                />
                <path
                  d="M8.00002 9.10015C9.15982 9.10015 10.1 8.15994 10.1 7.00015C10.1 5.84035 9.15982 4.90015 8.00002 4.90015C6.84023 4.90015 5.90002 5.84035 5.90002 7.00015C5.90002 8.15994 6.84023 9.10015 8.00002 9.10015Z"
                  fill="white"
                />
              </svg>
            </IconContainer>
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

const IconContainer = styled.span`
  margin-top: 5px;
  cursor: pointer;
`;
