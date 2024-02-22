import React from 'react';
import { Container, InnerContainer } from '../styles/MainLandingStyles';
import styled from 'styled-components';
import logo from '../../../../assets/logo.png';
import { Button } from 'antd';

const Header: React.FC = () => {
  return (
    <Container backgroundColor={'white'}>
      <InnerContainer>
        <HeaderContainer>
          <LogoContainer>
            <Logo src={logo} alt={'Лого'} />
            <Title>Analytix</Title>
          </LogoContainer>
          <MenuContainer>
            <MenuItem>Возможности</MenuItem>
            <MenuItem>Тарифы</MenuItem>
            <MenuItem>О Нас</MenuItem>
          </MenuContainer>
          <ButtonContainer>
            <StyledButton>Войти</StyledButton>
            <StyledButton>Попробовать</StyledButton>
          </ButtonContainer>
        </HeaderContainer>
      </InnerContainer>
    </Container>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

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
`;

const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 70px;
  gap: 20px;
`;

const MenuItem = styled.div`
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledButton = styled(Button)``;
