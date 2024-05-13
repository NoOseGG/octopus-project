import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Tabs, TabsProps } from 'antd';
import { dashboardController, reCreatedController } from '@app/api/http.api';
import StickyBox from 'react-sticky-box';
import TabButton from '@app/components/dashboards/profile-info/components/components/Buttons/TabButton/TabButton';
import CreatedSoleTrade from '@app/components/dashboards/dashboard/soleTrade/CreatedSoleTrade';
import LiquidatedSoleTrade from '@app/components/dashboards/dashboard/soleTrade/LiquidatedSoleTrade';
import BankruptedSoleTrade from '@app/components/dashboards/dashboard/soleTrade/BankruptedSoleTrade';
import CheckedSoleTrade from '@app/components/dashboards/dashboard/soleTrade/CheckedSoleTrade';

enum TABS {
  CREATED = '1',
  LIQUIDATED = '2',
  BANKRUPTED = '3',
  CHECKED = '4',
}

const DashboardSoleTrader: React.FC = () => {
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
      {
        /*<Title>Индивидуальные предприниматели (ИП)</Title>*/

        <Tabs defaultActiveKey={TABS.CREATED} style={{ width: '100%' }} renderTabBar={renderTabBar}>
          <Tabs.TabPane
            tab={
              <TabButton isActive={activeKey === TABS.CREATED} tabKey={TABS.CREATED} handleClick={handleTabChange}>
                Созданные
              </TabButton>
            }
            key={TABS.CREATED}
          >
            <CreatedSoleTrade />
          </Tabs.TabPane>

          <Tabs.TabPane
            tab={
              <TabButton
                isActive={activeKey === TABS.LIQUIDATED}
                tabKey={TABS.LIQUIDATED}
                handleClick={handleTabChange}
              >
                Ликвидированные
              </TabButton>
            }
            key={TABS.LIQUIDATED}
          >
            <LiquidatedSoleTrade />
          </Tabs.TabPane>

          <Tabs.TabPane
            tab={
              <TabButton
                isActive={activeKey === TABS.BANKRUPTED}
                tabKey={TABS.BANKRUPTED}
                handleClick={handleTabChange}
              >
                Обанкроченные
              </TabButton>
            }
            key={TABS.BANKRUPTED}
          >
            <BankruptedSoleTrade />
          </Tabs.TabPane>

          <Tabs.TabPane
            tab={
              <TabButton isActive={activeKey === TABS.CHECKED} tabKey={TABS.CHECKED} handleClick={handleTabChange}>
                Проверенные
              </TabButton>
            }
            key={TABS.CHECKED}
          >
            <CheckedSoleTrade />
          </Tabs.TabPane>
        </Tabs>
      }
    </Container>
  );
};

export default DashboardSoleTrader;

const Container = styled.div`
  flex-grow: 1;
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 700;
`;
