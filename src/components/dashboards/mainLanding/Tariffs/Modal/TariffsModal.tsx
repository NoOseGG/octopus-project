import React from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';

type TariffsModal = {
  isOpen: boolean;
  onSetIsOpen: (value: boolean) => void;
};

const TariffsModal: React.FC<TariffsModal> = ({ isOpen, onSetIsOpen }) => {
  return (
    <Modal
      title="Оформление тарифа"
      centered
      visible={isOpen}
      onOk={() => onSetIsOpen(false)}
      onCancel={() => onSetIsOpen(false)}
      width={1000}
    >
      <Container>
        <h1>В разработке! 28.06.2024 будет готово</h1>
      </Container>
    </Modal>
  );
};

export default TariffsModal;

const Container = styled.div`
  padding: 50px 20px;
`;
