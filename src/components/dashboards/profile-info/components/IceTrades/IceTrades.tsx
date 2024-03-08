import React from 'react';
import styled from 'styled-components';
import Info from '@app/components/dashboards/profile-info/components/IceTrades/components/Info/Info';
import ListOfSuppliers from '@app/components/dashboards/profile-info/components/IceTrades/components/ListOfSuppliers/ListOfSuppliers';
import ListOfProducts from '@app/components/dashboards/profile-info/components/IceTrades/components/ListOfProducts/ListOfProducts';
import HistoryCompletedPurchases from '@app/components/dashboards/profile-info/components/IceTrades/components/HistoryCompletedPurchases/HistoryCompletedPurchases';
import HistoryNotCompletedPurchases from '@app/components/dashboards/profile-info/components/IceTrades/components/HistoryNotCompletedPurchases/HistoryNotCompletedPurchases';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { IceTradeNamesEnum } from '@app/components/dashboards/profile-info/components/IceTrades/types/IceTradeTypes';

const IceTrades: React.FC = () => {
  const iceTradeCustomer = useAppSelector((state) => state.searchProfile.profile.icetrade_customer);
  const iceTradeParticipant = useAppSelector((state) => state.searchProfile.profile.icetrade_participant);
  const iceTradeOtherParticipant = useAppSelector((state) => state.searchProfile.profile.icetrade_other_participant);

  return (
    <Container>
      {Boolean(iceTradeCustomer.length) && (
        <>
          <Info iceTrade={iceTradeCustomer} iceTradeNamesEnum={IceTradeNamesEnum.CUSTOMER} />
          <ListContainer>
            <ListOfSuppliers iceTrade={iceTradeCustomer} />
            <ListOfProducts iceTrade={iceTradeCustomer} />
          </ListContainer>
          <HistoryCompletedPurchases iceTrade={iceTradeCustomer} iceTradeNamesEnum={IceTradeNamesEnum.CUSTOMER} />
          <HistoryNotCompletedPurchases iceTrade={iceTradeCustomer} iceTradeNamesEnum={IceTradeNamesEnum.CUSTOMER} />
        </>
      )}
      {Boolean(iceTradeParticipant.length) && (
        <>
          <Info iceTrade={iceTradeParticipant} iceTradeNamesEnum={IceTradeNamesEnum.PARTICIPANT} />
          <ListContainer>
            <ListOfSuppliers iceTrade={iceTradeParticipant} />
            <ListOfProducts iceTrade={iceTradeParticipant} />
          </ListContainer>
          <HistoryCompletedPurchases iceTrade={iceTradeParticipant} iceTradeNamesEnum={IceTradeNamesEnum.PARTICIPANT} />
          <HistoryNotCompletedPurchases
            iceTrade={iceTradeParticipant}
            iceTradeNamesEnum={IceTradeNamesEnum.PARTICIPANT}
          />
        </>
      )}
      {Boolean(iceTradeOtherParticipant.length) && (
        <>
          <Info iceTrade={iceTradeOtherParticipant} iceTradeNamesEnum={IceTradeNamesEnum.OTHER_PARTICIPANT} />
          <ListContainer>
            <ListOfSuppliers iceTrade={iceTradeOtherParticipant} />
            <ListOfProducts iceTrade={iceTradeOtherParticipant} />
          </ListContainer>
          <HistoryCompletedPurchases
            iceTrade={iceTradeOtherParticipant}
            iceTradeNamesEnum={IceTradeNamesEnum.OTHER_PARTICIPANT}
          />
          <HistoryNotCompletedPurchases
            iceTrade={iceTradeOtherParticipant}
            iceTradeNamesEnum={IceTradeNamesEnum.OTHER_PARTICIPANT}
          />
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
