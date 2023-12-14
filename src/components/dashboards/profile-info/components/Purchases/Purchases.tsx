import React, { useEffect, useState } from 'react';
import PurchasesFilters from '@app/components/dashboards/profile-info/components/Purchases/Filters/PurchasesFilters';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { IceTradeCustomer } from '@app/store/types/Subject';
import MyPurchase from '@app/components/dashboards/profile-info/components/Purchases/components/Purchase/MyPurchase';
import { IceTrade } from '@app/components/dashboards/profile-info/components/Purchases/Filters/PurchasesFiltersTypes';

const Purchases: React.FC = () => {
  const iceTradeCustomer = useAppSelector((state) => state.searchProfile.profile.icetrade_customer);
  const iceTradeParticipant = useAppSelector((state) => state.searchProfile.profile.icetrade_participant);
  const iceTradeOtherParticipant = useAppSelector((state) => state.searchProfile.profile.icetrade_other_participant);
  const iceTradeOrganizer = useAppSelector((state) => state.searchProfile.profile.icetrade_organizer);
  const iceTradeOrganizerNegotiations = useAppSelector(
    (state) => state.searchProfile.profile.icetrade_organizer_negotiations,
  );

  const [purchases, setPurchases] = useState<IceTrade[]>([]);

  const handleSetPurchases = (iceTrade: IceTradeCustomer[]) => {
    setPurchases(iceTrade);
  };

  useEffect(() => {
    console.log(JSON.stringify(purchases));
  }, [purchases]);

  return (
    <div>
      <h3>Статистика</h3>
      <h3>Контракты</h3>
      <PurchasesFilters
        iceTrades={{
          iceTradeCustomer,
          iceTradeParticipant,
          iceTradeOtherParticipant,
          iceTradeOrganizer,
          iceTradeOrganizerNegotiations,
        }}
        handleSetPurchase={handleSetPurchases}
      />
      {purchases.map((item, index) => (
        <MyPurchase purchase={item} key={index} />
      ))}
    </div>
  );
};

export default Purchases;
