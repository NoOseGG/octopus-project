import React from 'react';
import { Tabs } from 'antd';
import {
  IceTradeCustomer,
  IceTradeOrganizer,
  IceTradeOrganizerNegotiations,
  IceTradeOtherParticipant,
  IceTradeParticipant,
} from '@app/store/types/Subject';
import SubjectIceTradeCustomer from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIceTrade/SubjectIceTradeCustomer/SubjectIceTradeCustomer';
import SubjectIceTradeOtherParticipant from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIceTrade/SubjectIceTradeOtherParticipant/SubjectIceTradeOtherParticipant';
import SubjectIceTradeParticipant from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIceTrade/SubjectIceTradeParticipant/SubjectIceTradeParticipant';
import SubjectIceTradeOrganizer from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIceTrade/SubjectIceTradeOrganizer/SubjectIceTradeOrganizer';
import styled from 'styled-components';

type MyComponentProps = {
  icetrade_customer: IceTradeCustomer[];
  icetrade_participant: IceTradeParticipant[];
  icetrade_other_participant: IceTradeOtherParticipant[];
  icetrade_organizer_negotiations: IceTradeOrganizerNegotiations[];
  icetrade_organizer: IceTradeOrganizer[];
};

const SubjectIceTrade: React.FC<MyComponentProps> = ({
  icetrade_customer,
  icetrade_participant,
  icetrade_other_participant,
  icetrade_organizer_negotiations,
  icetrade_organizer,
}) => {
  return (
    <>
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
    </>
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
