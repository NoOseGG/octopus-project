import React from 'react';
import { Container, InnerContainer } from '../styles/MainLandingStyles';
import styled from 'styled-components';
import logo from '../../../../assets/logo.png';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export enum ScrollType {
  MainFunction = 'mainFunction',
  Sources = 'sources',
  Map = 'map',
}

const Header: React.FC = () => {
  const handleClickLogIn = () => {
    console.log('click');
  };

  const scrollToMainFunction = (scrollType: ScrollType) => {
    switch (scrollType) {
      case ScrollType.MainFunction: {
        const section = document.getElementById(ScrollType.MainFunction);
        section?.scrollIntoView({ behavior: 'smooth' });
        break;
      }
      case ScrollType.Sources: {
        const section = document.getElementById(ScrollType.Sources);
        section?.scrollIntoView({ behavior: 'smooth' });
        break;
      }
      case ScrollType.Map: {
        const section = document.getElementById(ScrollType.Map);
        section?.scrollIntoView({ behavior: 'smooth' });
        break;
      }
    }
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
            <MenuItem onClick={() => scrollToMainFunction(ScrollType.MainFunction)}>Возможности</MenuItem>
            <MenuItem onClick={() => scrollToMainFunction(ScrollType.Sources)}>Источники</MenuItem>
            <MenuItem onClick={() => scrollToMainFunction(ScrollType.Map)}>Карта</MenuItem>
            <MenuItem>Тарифы</MenuItem>
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
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    font-size: 17px;
    color: red;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  font-size: 14px;
  text-transform: uppercase;
`;
