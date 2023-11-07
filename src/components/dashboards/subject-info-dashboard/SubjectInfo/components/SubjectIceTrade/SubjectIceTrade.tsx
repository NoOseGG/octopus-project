import React from 'react';
import { Tabs } from 'antd';
import SubjectIceTradeCustomer from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIceTrade/SubjectIceTradeCustomer/SubjectIceTradeCustomer';
import SubjectIceTradeOtherParticipant from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIceTrade/SubjectIceTradeOtherParticipant/SubjectIceTradeOtherParticipant';
import SubjectIceTradeParticipant from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIceTrade/SubjectIceTradeParticipant/SubjectIceTradeParticipant';
import SubjectIceTradeOrganizer from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIceTrade/SubjectIceTradeOrganizer/SubjectIceTradeOrganizer';
import styled from 'styled-components';
import { useAppSelector } from '@app/hooks/reduxHooks';

const SubjectIceTrade: React.FC = () => {
  const icetrade_customer = useAppSelector((state) => state.searchProfile.profile.icetrade_customer);
  const icetrade_participant = useAppSelector((state) => state.searchProfile.profile.icetrade_participant);
  const icetrade_other_participant = useAppSelector((state) => state.searchProfile.profile.icetrade_other_participant);
  const icetrade_organizer_negotiations = useAppSelector(
    (state) => state.searchProfile.profile.icetrade_organizer_negotiations,
  );
  const icetrade_organizer = useAppSelector((state) => state.searchProfile.profile.icetrade_organizer);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Title>Закупки IceTrade</Title>
      <Container>
        <Tabs defaultActiveKey={'1'} style={{ width: '100%' }} centered>
          {Boolean(icetrade_customer.length) && (
            <Tabs.TabPane tab={'Покупатель'} key={'1'}>
              <SubjectIceTradeCustomer icetrade_customer={icetrade_customer} />
            </Tabs.TabPane>
          )}

          {Boolean(icetrade_participant.length) && (
            <Tabs.TabPane tab={'Участник'} key={'2'}>
              <SubjectIceTradeParticipant icetrade_participant={icetrade_participant} />
            </Tabs.TabPane>
          )}

          {Boolean(icetrade_other_participant.length) && (
            <Tabs.TabPane tab={'Другой участник'} key={'3'}>
              <SubjectIceTradeOtherParticipant icetrade_other_participant={icetrade_other_participant} />
            </Tabs.TabPane>
          )}

          {Boolean(icetrade_organizer.length) && (
            <Tabs.TabPane tab={'Организатор'} key={'4'}>
              <SubjectIceTradeOrganizer icetrade_organizer={icetrade_organizer} />
            </Tabs.TabPane>
          )}

          {Boolean(icetrade_organizer_negotiations.length) && (
            <Tabs.TabPane tab={'Переговоры с организатором'} key={'4'}>
              <SubjectIceTradeOrganizer icetrade_organizer={icetrade_organizer} />
            </Tabs.TabPane>
          )}
        </Tabs>
      </Container>
    </div>
  );
};

export default SubjectIceTrade;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 26px;
  font-weight: 700;
`;
