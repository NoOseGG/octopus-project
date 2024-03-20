import React from 'react';
import { Container, InnerContainer } from '../styles/MainLandingStyles';
import styled from 'styled-components';
import logo from '../../../../assets/logo.png';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doCheckAuth, setTokenInState } from '@app/store/slices/authSlice';
import { readToken } from '@app/services/localStorage.service';

export enum ScrollType {
  MainFunction = 'mainFunction',
  Sources = 'sources',
  Map = 'map',
  Tariffs = 'tariffs',
}

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
      case ScrollType.Tariffs: {
        const section = document.getElementById(ScrollType.Tariffs);
        section?.scrollIntoView({ behavior: 'smooth' });
        break;
      }
    }
  };

  const handleClickLogIn = () => {
    dispatch(setTokenInState());
    dispatch(doCheckAuth);
    if (readToken() !== null) {
      navigate('/search');
    } else {
      navigate('/auth/login');
    }
  };

  const handleClickSigUp = () => {
    navigate('/auth/sign-up');
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
            <MenuItem onClick={() => scrollToMainFunction(ScrollType.Tariffs)}>Тарифы</MenuItem>
          </MenuContainer>
          <ButtonContainer>
            <StyledButton onClick={handleClickLogIn}>Войти</StyledButton>
            <StyledButton onClick={handleClickSigUp}>Попробовать</StyledButton>
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
  color: #000;

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
  color: #000;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 1s; /* Время эффекта */

  &:hover {
    color: red; /* Меняем цвет текста */
    transform: scale(1.2); /* Увеличиваем масштаб */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledButton = styled(Button)`
  color: #000;
  background-color: white;
  font-size: 14px;
  text-transform: uppercase;
`;
