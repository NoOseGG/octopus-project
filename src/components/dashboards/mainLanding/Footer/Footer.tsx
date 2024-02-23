import React from 'react';
import { Container, InnerContainer } from '../styles/MainLandingStyles';
import styled from 'styled-components';
import logo from '../../../../assets/logo.png';
import { ClockCircleOutlined, MailOutlined } from '@ant-design/icons';

const Footer: React.FC = () => {
  return (
    <Container backgroundColor={'#232528'}>
      <InnerContainer>
        <FooterContainer>
          <LeftColumn>
            <LogoContainer>
              <Logo src={logo} alt={'Лого'} />
              <Title>Analytix</Title>
            </LogoContainer>
          </LeftColumn>
          <MiddleColumn></MiddleColumn>
          <RightColumn>
            <InfoContainer>
              <ClockCircleOutlined style={{ color: 'white' }} />
              <Text>Работаем с 09:00 до 18:00</Text>
            </InfoContainer>
            <InfoContainer>
              <MailOutlined style={{ color: 'white' }} />
              <Text>analytix@gmail.com</Text>
            </InfoContainer>
          </RightColumn>
        </FooterContainer>
      </InnerContainer>
    </Container>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
`;

const LeftColumn = styled.div``;

const MiddleColumn = styled.div``;

const RightColumn = styled.div``;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const Title = styled.div`
  font-size: 24px;
  color: white;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Text = styled.span`
  font-size: 16px;
  color: white;
`;