import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { ShareAltOutlined } from '@ant-design/icons';
import { notificationController } from '@app/controllers/notificationController';
import { useLocation } from 'react-router';

const Requisites: React.FC = () => {
  const names = useAppSelector((state) => state.searchProfile.profile.names);
  const addresses = useAppSelector((state) => state.searchProfile.profile.addresses);
  const unn = useAppSelector((state) => state.searchProfile.profile.unn);
  const location = useLocation();

  const getCopyText = (text = null): string => {
    if (text !== null) return text;
    let requisites = '';
    if (Boolean(names[0]?.short_name?.length)) requisites += names[0]?.short_name + '\n';
    else requisites += names[0]?.full_name;
    if (Boolean(addresses[0]?.full_address?.length)) requisites += addresses[0]?.full_address + '\n';
    if (Boolean(unn?.length)) requisites += `УНП: ${unn}`;

    return requisites;
  };

  const handleCopyClick = (isShare = false) => {
    try {
      if (isShare) {
        const currentUrl = 'https://analytix.by' + location.pathname;
        navigator.clipboard.writeText(currentUrl);
        notificationController.success({ message: 'Сылка на субъекта скопирована' });
      } else {
        const copyText = getCopyText();
        navigator.clipboard.writeText(copyText);
        notificationController.success({ message: 'Реквизиты скопированы' });
      }
    } catch (err) {
      console.error('Не удалось скопировать текст:', err);
    }
  };

  return (
    <Container>
      <Title>Реквизиты</Title>
      <LineText>{names[0]?.short_name ? names[0]?.short_name : names[0]?.full_name}</LineText>
      <LineText>{addresses[0]?.full_address}</LineText>
      <LineText>УНП: {unn}</LineText>
      <ButtonContainer>
        <ButtonCopyStyle onClick={() => handleCopyClick()}>Скопировать</ButtonCopyStyle>
        <ButtonShareStyle onClick={() => handleCopyClick(true)}>
          <ShareAltOutlined />
        </ButtonShareStyle>
      </ButtonContainer>
    </Container>
  );
};

export default Requisites;

const Container = styled.div`
  width: 100%;
  padding: 0.9375rem;
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(170, 170, 170, 0.33);
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 0.8735rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonCopyStyle = styled(Button)`
  width: 100%;
  height: 2rem;
  background-color: #f1f5fb;
  border-radius: 0.3125rem;
  border-width: 0;
  color: #00509a;
  font-weight: 500;
  font-size: 0.9375rem;
  line-height: 1.375rem;
  padding: 0.3125rem 0.625rem;
  margin-right: 0.8125rem;

  &:hover {
    color: #ff4d78;
    border-color: #aaaaaa54;
    background-color: #fbf3e9;
  }
`;

const ButtonShareStyle = styled(Button)`
  width: 100%;
  height: 2rem;
  background: #f1f5fb;
  border-radius: 0.3125rem;
  border-width: 0;
  color: #00509a;
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 1.375rem;
  padding: 8px 7px 9px;

  &:hover {
    color: #ff4d78;
    border-color: #aaaaaa54;
    background-color: #fbf3e9;
  }
`;

const Title = styled.h5`
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 1.125rem;
  color: #222;
  margin-top: 0;
`;

const LineText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 0.8125rem;
  color: #222;
  line-height: 1.125rem;
`;
