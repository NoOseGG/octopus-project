import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import payAttentionImage from '../../../../assets/landing/payAttention/PayAttention.jpg';
import './style.css';
import { clickedPayAttention, getPayAttention } from '@app/services/localStorage.service';

const PayAttentionModal: React.FC = () => {
  const [isModelVisible, setIsModalVisible] = useState(false);

  const closeModal = () => {
    clickedPayAttention();
    setIsModalVisible(false);
  };

  useEffect(() => {
    setTimeout(() => {
      if (getPayAttention() !== 'true') setIsModalVisible(true);
    }, 5000);
  }, []);

  return isModelVisible ? (
    <ModalWrapper>
      <ModalContent>
        <PayAttentionContainer>
          <PayAttentionImage src={payAttentionImage} alt={'Обратите внимание'} />
          <Text>
            <strong>Уважаемые пользователи!</strong>
          </Text>
          <Text>
            Телефонные звонки, смс-сообщения (viber, tg и прочие) в адрес субъектов хозяйствования, сведения о
            контактных телефонах которызх размещены в настоящем веб-сервисе, с предложением товаров, работ, услуг{' '}
            <RedText>являются рекламой</RedText> с точки зрения законодательства о рекламе.
          </Text>
          <Text>
            Подобная реклама <RedText>допускается только с письменного согласия субъекта хозяйствования</RedText> (пункт
            1 статьи 12 Закона Республики Беларусь от 10 мая 2007 г. №225-3 {'"'}О Рекламе{'"'}).
          </Text>
          <Text>
            <strong>Аналагичной позиции придерживается и Национальный центр по защите персональных данных.</strong>
          </Text>
          <Text>
            Нарушение рекламодателем, рекламопроизводителем, рекламораспространителем законодательства о рекламе влечет
            административную ответсвенность.
          </Text>
          <StyledButton type={'primary'} onClick={closeModal}>
            Закрыть
          </StyledButton>
        </PayAttentionContainer>
      </ModalContent>
    </ModalWrapper>
  ) : (
    <div></div>
  );
};

export default PayAttentionModal;

const PayAttentionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ModalWrapper = styled.div`
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ModalContent = styled.div`
  width: 500px;
  height: auto;
  background-color: white;
  padding: 20px;
  border-radius: 16px;

  @media (max-height: 600px) {
    padding: 10px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 40px;
  width: 100%;

  @media (max-height: 600px) {
    margin-top: 20px;
  }
`;

const PayAttentionImage = styled.img`
  width: 100%;
`;

const Text = styled.div`
  color: #000;
  width: 100%;
  margin-top: 10px;
  font-size: 16px;
  text-align: center;

  @media (max-height: 800px) {
    font-size: 15px;
  }

  @media (max-height: 760px) {
    line-height: 1.2;
  }

  @media (max-height: 600px) {
    margin-top: 0;
    line-height: 1.2;
  }
`;

const RedText = styled.span`
  color: red;
  text-decoration: underline;

  @media (max-height: 800px) {
    font-size: 15px;
  }

  @media (max-height: 760px) {
    line-height: 1.2;
  }
`;
