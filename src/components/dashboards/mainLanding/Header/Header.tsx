import React from 'react';
import { Container, InnerContainer } from '../styles/MainLandingStyles';
import styled from 'styled-components';
import logo from '../../../../assets/logo.png';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const handleClickLogIn = () => {
    console.log('click');
  };

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
            <Link to={'/auth/login'}>
              <StyledButton onClick={handleClickLogIn}>Войти</StyledButton>
            </Link>
            <Link to={'/auth/sign-up'}>
              <StyledButton>Попробовать</StyledButton>
            </Link>
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

  @media (max-width: 580px) {
    width: 30px;
    height: 30px;
  }
`;

const Title = styled.div`
  font-size: 24px;

  @media (max-width: 580px) {
    font-size: 16px;
  }
`;

const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 980px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledButton = styled(Button)``;
