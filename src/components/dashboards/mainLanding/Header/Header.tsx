import React, { useEffect } from 'react';
import { Container, InnerContainer } from '../styles/MainLandingStyles';
import styled from 'styled-components';
import logo from '../../../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doCheckAuth, setTokenInState } from '@app/store/slices/authSlice';
import { readToken } from '@app/services/localStorage.service';
import { scrollToLanding, ScrollType } from '@app/components/dashboards/mainLanding/utils/utils';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doCheckAuth());
  }, [dispatch]);

  const handleClickLogIn = () => {
    dispatch(setTokenInState());
    dispatch(doCheckAuth);
    if (readToken() !== null) {
      navigate('/search');
    } else {
      navigate('/auth/login');
    }
  };

  // const handleClickSigUp = () => {
  //   navigate('/auth/sign-up');
  // };

  return (
    <Container backgroundColor={'#0a0a19'}>
      <InnerContainer>
        <HeaderContainer>
          <LogoContainer>
            <Logo src={logo} alt={'Лого'} />
            <Title>Analytix</Title>
          </LogoContainer>
          <MenuContainer>
            <MenuItem onClick={() => scrollToLanding(ScrollType.MainFunction)}>Возможности</MenuItem>
            <MenuItem onClick={() => scrollToLanding(ScrollType.Sources)}>Источники</MenuItem>
            <MenuItem onClick={() => scrollToLanding(ScrollType.Map)}>Карта</MenuItem>
            <MenuItem onClick={() => scrollToLanding(ScrollType.ServiceFor)}>Кому подойдет</MenuItem>
            <MenuItem onClick={() => scrollToLanding(ScrollType.Tariffs)}>Тарифы</MenuItem>
          </MenuContainer>
          <ButtonContainer>
            <StyledButton onClick={handleClickLogIn}>Войти</StyledButton>
            <ButtonDemo onClick={() => scrollToLanding(ScrollType.Demo)}>Запрос Демо</ButtonDemo>
            {/*<StyledButton onClick={handleClickSigUp}>Попробовать</StyledButton>*/}
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
  color: #fff;
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
  transition: 1s; /* Время эффекта */
  color: rgba(255, 255, 255, 0.6);

  &:hover {
    color: #60a200; /* Меняем цвет текста */
    transform: scale(1.2); /* Увеличиваем масштаб */
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledButton = styled.button`
  border: 1px solid #fff;
  padding: 0 60px;
  border-radius: 12px;
  background-color: #fff;
  color: #000;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: transparent;
    border-color: #fff;
  }

  @media (max-width: 500px) {
    font-size: 10px;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const ButtonDemo = styled.button`
  padding: 8px 23px 10px;
  line-height: 1.43;
  border-radius: 10px;
  border: 1px solid #76b41b;
  color: #76b41b;
  background-color: transparent;
  transition: all 0.15s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: rgba(118, 180, 27, 0.16);
  }
`;
