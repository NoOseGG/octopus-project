import React from 'react';

import { IceTradeCustomer } from '@app/store/types/Subject';
import { Line, LineConfig } from '@ant-design/charts';

interface YearCount {
  [key: number]: number;
}

type IceTradeByAgeProps = {
  icetrade: IceTradeCustomer[];
};

const IceTradesByAge: React.FC<IceTradeByAgeProps> = ({ icetrade }) => {
  const data = icetrade
    .filter((item) => item.purchase_status === 'Состоялась' && item.contract_date)
    .reduce<YearCount>((acc, obj) => {
      if (obj.contract_date) {
        const year = new Date(obj.contract_date).getFullYear();
        acc[year] = (acc[year] || 0) + 1;
        return acc;
      }
      return acc;
    }, {});

  const result = Object.keys(data).map((year) => ({
    year: parseInt(year, 10),
    value: data[parseInt(year, 10)],
  }));

  const config: LineConfig = {
    data: result ? result : [],
    xField: 'year',
    yField: 'value',
    label: {},
    point: {
      size: 5,
      shape: 'dot',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
        cursor: 'pointer',
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
    meta: {
      year: {
        alias: 'Год',
      },
      value: {
        alias: 'Количество',
      },
    },
  };

  return <Line style={{ width: '100%' }} {...config}></Line>;
};

export default IceTradesByAge;
