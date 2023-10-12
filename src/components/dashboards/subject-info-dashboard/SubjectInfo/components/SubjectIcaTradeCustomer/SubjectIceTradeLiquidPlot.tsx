import React from 'react';
import { Liquid } from '@ant-design/charts';
import { IceTradeCustomer } from '@app/store/types/Subject';

type MyComponentProps = {
  icetrade_customer: IceTradeCustomer[];
};

const SubjectIceTradeLiquidPlot: React.FC<MyComponentProps> = ({ icetrade_customer }) => {
  const countTrade = icetrade_customer.length;
  const countSuccessTrade = icetrade_customer.filter((item) => item.lot_status === 'Закупка завершена').length;
  const percentTrade = countSuccessTrade / countTrade;

  const config = {
    percent: percentTrade,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: {
      length: 128,
    },
  };
  return (
    <div style={{ alignSelf: 'center' }}>
      <Liquid {...config} />
    </div>
  );
};

export default SubjectIceTradeLiquidPlot;
