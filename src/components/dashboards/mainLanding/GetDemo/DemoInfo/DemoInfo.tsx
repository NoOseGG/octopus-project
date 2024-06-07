import React from 'react';
import styled from 'styled-components';
import { Timeline } from 'antd';

const DemoInfo: React.FC = () => {
  return (
    <DemoInfoContainer>
      <Title>Срок доступа:</Title>
      <Timeline style={{ paddingLeft: 20, marginBottom: 0 }}>
        <Timeline.Item color={'green'}>Доступ на 24 часа</Timeline.Item>
      </Timeline>
      <Title>Вы получите:</Title>
      <Timeline style={{ paddingLeft: 20 }}>
        <Timeline.Item color={'green'}>Полную информацию о субъекте</Timeline.Item>
        <Timeline.Item color={'green'}>Доступ к дашборду</Timeline.Item>
      </Timeline>
    </DemoInfoContainer>
  );
};

export default DemoInfo;

const DemoInfoContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const Title = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 800;
`;
