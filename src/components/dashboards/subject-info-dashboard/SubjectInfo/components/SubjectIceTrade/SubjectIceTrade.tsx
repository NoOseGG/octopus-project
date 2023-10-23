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
import SubjectIceTradeParticipant from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/SubjectIceTrade/SubjectIceTradeParticipant/SubjectIceTradeParticipant';

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
    </Tabs>
  );
};

export default SubjectIceTrade;
