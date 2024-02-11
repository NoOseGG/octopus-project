import React from 'react';
import styled from 'styled-components';
import Info from '@app/components/dashboards/profile-info/components/IceTrades/components/Info/Info';
import ListOfSuppliers from '@app/components/dashboards/profile-info/components/IceTrades/components/ListOfSuppliers/ListOfSuppliers';
import ListOfProducts from '@app/components/dashboards/profile-info/components/IceTrades/components/ListOfProducts/ListOfProducts';
import HistoryCompletedPurchases from '@app/components/dashboards/profile-info/components/IceTrades/components/HistoryCompletedPurchases/HistoryCompletedPurchases';
import HistoryNotCompletedPurchases from '@app/components/dashboards/profile-info/components/IceTrades/components/HistoryNotCompletedPurchases/HistoryNotCompletedPurchases';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { NamesEnum } from '@app/components/dashboards/profile-info/components/IceTrades/types/IceTradeTypes';

const IceTrades: React.FC = () => {
  const iceTradeCustomer = useAppSelector((state) => state.searchProfile.profile.icetrade_customer);
  const iceTradeParticipant = useAppSelector((state) => state.searchProfile.profile.icetrade_participant);
  const iceTradeOtherParticipant = useAppSelector((state) => state.searchProfile.profile.icetrade_other_participant);
  const iceTradeOrganizer = useAppSelector((state) => state.searchProfile.profile.icetrade_organizer);
  const iceTradeOrganizerNegotiations = useAppSelector(
    (state) => state.searchProfile.profile.icetrade_organizer_negotiations,
  );

  return (
    <Container>
      {Boolean(iceTradeCustomer.length) && (
        <>
          <Info iceTrade={iceTradeCustomer} name={NamesEnum.CUSTOMER} />
          <ListContainer>
            <ListOfSuppliers iceTrade={iceTradeCustomer} />
            <ListOfProducts iceTrade={iceTradeCustomer} />
          </ListContainer>
          <HistoryCompletedPurchases iceTrade={iceTradeCustomer} />
          <HistoryNotCompletedPurchases iceTrade={iceTradeCustomer} />
        </>
      )}
      {Boolean(iceTradeParticipant.length) && (
        <>
          <Info iceTrade={iceTradeParticipant} name={NamesEnum.PARTICIPANT} />
          <ListContainer>
            <ListOfSuppliers iceTrade={iceTradeParticipant} />
            <ListOfProducts iceTrade={iceTradeParticipant} />
          </ListContainer>
          <HistoryCompletedPurchases iceTrade={iceTradeParticipant} />
          <HistoryNotCompletedPurchases iceTrade={iceTradeParticipant} />
        </>
      )}
      {Boolean(iceTradeOtherParticipant.length) && (
        <>
          <Info iceTrade={iceTradeOtherParticipant} name={NamesEnum.OTHER_PARTICIPANT} />
          <ListContainer>
            <ListOfSuppliers iceTrade={iceTradeOtherParticipant} />
            <ListOfProducts iceTrade={iceTradeOtherParticipant} />
          </ListContainer>
          <HistoryCompletedPurchases iceTrade={iceTradeOtherParticipant} />
          <HistoryNotCompletedPurchases iceTrade={iceTradeOtherParticipant} />
        </>
      )}
      {Boolean(iceTradeOrganizer.length) && (
        <>
          <Info iceTrade={iceTradeOrganizer} name={NamesEnum.ORGANIZER} />
          <ListContainer>
            <ListOfSuppliers iceTrade={iceTradeOrganizer} />
            <ListOfProducts iceTrade={iceTradeOrganizer} />
          </ListContainer>
          <HistoryCompletedPurchases iceTrade={iceTradeOrganizer} />
          <HistoryNotCompletedPurchases iceTrade={iceTradeOrganizer} />
        </>
      )}

      {Boolean(iceTradeOrganizerNegotiations.length) && (
        <>
          <Info iceTrade={iceTradeOrganizerNegotiations} name={NamesEnum.ORGANIZER_NEGOTIATIONS} />
          <ListContainer>
            <ListOfSuppliers iceTrade={iceTradeOrganizerNegotiations} />
            <ListOfProducts iceTrade={iceTradeOrganizerNegotiations} />
          </ListContainer>
          <HistoryCompletedPurchases iceTrade={iceTradeOrganizerNegotiations} />
          <HistoryNotCompletedPurchases iceTrade={iceTradeOrganizerNegotiations} />
        </>
      )}
    </Container>
  );
};

export default IceTrades;

const Container = styled.div``;

const ListContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
`;
