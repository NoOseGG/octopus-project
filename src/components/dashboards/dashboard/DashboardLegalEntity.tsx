import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Tabs, TabsProps } from 'antd';
import { dashboardController, reCreatedController } from '@app/api/http.api';
import TabButton from '@app/components/dashboards/profile-info/components/components/Buttons/TabButton/TabButton';
import StickyBox from 'react-sticky-box';
import CreatedLegalEntity from '@app/components/dashboards/dashboard/legalEntity/CreatedLegalEntity';
import LiquidatedLegalEntity from '@app/components/dashboards/dashboard/legalEntity/LiquidatedLegalEntity';
import BankruptedLegalEntity from '@app/components/dashboards/dashboard/legalEntity/BankruptedLegalEntity';
import CheckedLegalEntity from '@app/components/dashboards/dashboard/legalEntity/CheckedLegalEntity';

enum TABS {
  CREATED = '1',
  LIQUIDATED = '2',
  BANKRUPTED = '3',
  CHECKED = '4',
}

const DashboardLegalEntity: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>(TABS.CREATED);

  useEffect(() => {
    return () => {
      dashboardController.abort();
      reCreatedController();
    };
  }, []);

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
    <StickyBox offsetTop={0} offsetBottom={20} style={{ zIndex: 1 }}>
      <DefaultTabBar {...props} style={{ background: '#fff' }} />
    </StickyBox>
  );

  return (
    <Container>
      {/*<Title>Юридические лица</Title>*/}

      <Tabs defaultActiveKey={TABS.CREATED} style={{ width: '100%' }} renderTabBar={renderTabBar}>
        <Tabs.TabPane
          tab={
            <TabButton isActive={activeKey === TABS.CREATED} tabKey={TABS.CREATED} handleClick={handleTabChange}>
              Созданные
            </TabButton>
          }
          key={TABS.CREATED}
        >
          <CreatedLegalEntity />
        </Tabs.TabPane>

        <Tabs.TabPane
          tab={
            <TabButton isActive={activeKey === TABS.LIQUIDATED} tabKey={TABS.LIQUIDATED} handleClick={handleTabChange}>
              Ликвидированные
            </TabButton>
          }
          key={TABS.LIQUIDATED}
        >
          <LiquidatedLegalEntity />
        </Tabs.TabPane>

        <Tabs.TabPane
          tab={
            <TabButton isActive={activeKey === TABS.BANKRUPTED} tabKey={TABS.BANKRUPTED} handleClick={handleTabChange}>
              Обанкроченные
            </TabButton>
          }
          key={TABS.BANKRUPTED}
        >
          <BankruptedLegalEntity />
        </Tabs.TabPane>

        <Tabs.TabPane
          tab={
            <TabButton isActive={activeKey === TABS.CHECKED} tabKey={TABS.CHECKED} handleClick={handleTabChange}>
              Проверенные
            </TabButton>
          }
          key={TABS.CHECKED}
        >
          <CheckedLegalEntity />
        </Tabs.TabPane>
      </Tabs>
    </Container>
  );
};

export default DashboardLegalEntity;

const Container = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 700;
`;
