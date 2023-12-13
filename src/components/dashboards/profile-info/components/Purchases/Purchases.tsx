import React from 'react';
import PurchasesFilters from '@app/components/dashboards/profile-info/components/Purchases/Filters/PurchasesFilters';

const Purchases: React.FC = () => {
  return (
    <div>
      <h3>Статистика</h3>
      <h3>Контракты</h3>
      <PurchasesFilters />
    </div>
  );
};

export default Purchases;
