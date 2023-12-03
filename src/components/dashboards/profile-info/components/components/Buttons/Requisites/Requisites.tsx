import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { ShareAltOutlined } from '@ant-design/icons';

const Requisites: React.FC = () => {
  const { short_name } = useAppSelector((state) => state.searchProfile.profile.names[0]);
  const { full_address } = useAppSelector((state) => state.searchProfile.profile.addresses[0]);

  return (
    <Container>
      <Title>Реквизиты</Title>
      <LineText>{short_name}</LineText>
      <LineText>{full_address}</LineText>
      <ButtonContainer>
        <ButtonCopyStyle>Скопировать</ButtonCopyStyle>
        <ButtonShareStyle>
          <ShareAltOutlined />
        </ButtonShareStyle>
      </ButtonContainer>
    </Container>
  );
};

export default Requisites;

const Container = styled.div`
  width: 100%;
  margin-inline: 15px;
  padding: 0.9375rem;
  background: white;
  border-radius: 12px;
  border: 1px solid rgba(170, 170, 170, 0.33);
`;

const ButtonContainer = styled.div`
  margin-top: 0.8735rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonCopyStyle = styled(Button)`
  width: 11.4375rem;
  height: 2rem;
  background: #f1f5fb;
  border-radius: 0.3125rem;
  border-width: 0;
  color: #0057ff;
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
  width: 3rem;
  height: 2rem;
  background: #f1f5fb;
  border-radius: 0.3125rem;
  border-width: 0;
  color: #0057ff;
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
