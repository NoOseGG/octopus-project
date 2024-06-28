import React from 'react';
import styled from 'styled-components';
import GetSubscribe from '@app/components/dashboards/mainLanding/Tariffs/Modal/Form/GetSubscribe';

type TariffsModal = {
  isOpen: boolean;
  onSetIsOpen: (value: boolean) => void;
  countMonth: number;
  countUser: number;
  price: number;
};

const TariffsModal: React.FC<TariffsModal> = ({ isOpen, onSetIsOpen, countMonth, countUser, price }) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <GetSubscribe countMonth={countMonth} countUser={countUser} price={price} onSetIsOpen={onSetIsOpen} />
      </ModalContainer>
    </Overlay>
  );
};

export default TariffsModal;

const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`;

const ModalContainer = styled.div`
  width: 1000px;
  padding: 20px 20px;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
