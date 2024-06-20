import { Title, Content } from '@app/components/dashboards/dashboard/styles/DetailedInformationCompanyStyle';
import React from 'react';
import { formatNumberWithCommas } from '@app/utils/utils';

export enum IceTradeTableType {
  COMPLETED_PARTICIPANTS,
  COMPLETED_PURCHASES,
}

const getColumn = (title: string, field: string, isNumber = false, width = 'auto') => {
  const renderText = (text: string) => {
    return text ? <Content>{text}</Content> : <Content textAlign={'center'}>-</Content>;
  };

  const renderTextNum = (text: string) => {
    return text ? <Content>{formatNumberWithCommas(Number(text))}</Content> : <Content textAlign={'center'}>-</Content>;
  };

  return {
    title: <Title>{title}</Title>,
    dataIndex: field,
    key: field,
    width: width,
    render: isNumber ? renderTextNum : renderText,
  };
};

export const getColumns = (detailed: IceTradeTableType) => {
  switch (detailed) {
    case IceTradeTableType.COMPLETED_PARTICIPANTS:
      return [getColumn('Наименование', 'name'), getColumn('Сумма', 'sum', true)];
    case IceTradeTableType.COMPLETED_PURCHASES:
      return [
        getColumn('Наименование', 'name'),
        getColumn('Сумма', 'sum', true),
        getColumn('Дата', 'date'),
        getColumn('Исполнитель', 'participant'),
      ];
  }
};
