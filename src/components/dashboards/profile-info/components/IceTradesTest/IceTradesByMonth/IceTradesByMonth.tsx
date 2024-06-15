import React from 'react';
import { IceTradeCustomer } from '@app/store/types/Subject';
import { ColumnConfig } from '@ant-design/charts';
import { Column } from '@ant-design/plots';

interface MonthCount {
  [key: number]: number;
}

type IceTradesByMonthProps = {
  icetrade: IceTradeCustomer[];
};

const IceTradesByMonth: React.FC<IceTradesByMonthProps> = ({ icetrade }) => {
  const lastYearDate = new Date();
  lastYearDate.setFullYear(new Date().getFullYear() - 1);
  const data = icetrade
    .filter((item) => {
      if (item.contract_date && item.purchase_status === 'Состоялась') {
        const itemDate = new Date(item.contract_date);
        return itemDate >= lastYearDate;
      }
      return false;
    })
    .reduce<MonthCount>((acc, obj) => {
      if (obj.contract_date) {
        const month = new Date(obj.contract_date).getMonth() + 1;
        acc[month] = (acc[month] || 0) + 1;
        return acc;
      }
      return acc;
    }, {});

  const result = Object.keys(data).map((month) => ({
    type: month,
    sales: data[parseInt(month, 10)],
  }));

  const config: ColumnConfig = {
    data: result ? result : [],
    xField: 'type',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    columnStyle: {
      cursor: 'pointer',
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Месяц',
      },
      sales: {
        alias: 'Количество',
      },
    },
  };

  return Boolean(result.length) ? <Column style={{ width: '50%' }} {...config} /> : null;
};

export default IceTradesByMonth;
