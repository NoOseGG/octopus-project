import { Content } from '@app/components/dashboards/dashboard/styles/DetailedInformationCompanyStyle';
import React from 'react';

export enum IceTradeTableType {
  COMPLETED_PARTICIPANTS,
  COMPLETED_PURCHASES,
}

const getColumn = (title: string, field: string, width = 'auto') => {
  const renderText = (text: string) => {
    return text ? <Content>{text}</Content> : <Content textAlign={'center'}>-</Content>;
  };

  return {
    title: title,
    dataIndex: field,
    key: field,
    width: width,
    render: renderText,
  };
};

export const getColumns = (detailed: IceTradeTableType) => {
  switch (detailed) {
    case IceTradeTableType.COMPLETED_PARTICIPANTS:
      return [getColumn('Наименование', 'name'), getColumn('Сумма', 'sum')];
    case IceTradeTableType.COMPLETED_PURCHASES:
      return [
        getColumn('Наименование', 'name'),
        getColumn('Сумма', 'sum'),
        getColumn('Дата', 'date'),
        getColumn('Исполнитель', 'participant'),
      ];
  }
};
