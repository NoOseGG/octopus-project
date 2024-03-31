import { Content } from '@app/components/dashboards/dashboard/styles/DetailedInformationCompanyStyle';
import { formatDate } from '@app/utils/utils';
import React from 'react';

export enum DetailsTableType {
  COMPETITORS,
}

const getColumn = (title: string, field: string, isLink = false, isDate = false) => {
  let renderText;
  if (isDate) {
    if (isDate) {
      renderText = (text: string) => {
        return <div>{formatDate(text, true)}</div>;
      };
    }
  } else {
    renderText = (text: string) => {
      return <Content>{text}</Content>;
    };
  }

  return {
    title: title,
    dataIndex: field,
    key: field,
    render: renderText,
  };
};

export const getColumns = (detailed: DetailsTableType) => {
  switch (detailed) {
    case DetailsTableType.COMPETITORS: {
      return [
        getColumn('УНП', 'legal_entity_id', true),
        getColumn('Сокращенное наименование', 'company_short_name'),
        getColumn('Вид деятельности', 'type_activity_name'),
        getColumn('Дата регистрации', 'company_date_registration'),
        getColumn('Состояние', 'company_status_name'),
        getColumn('Полный адрес', 'address_full'),
      ];
    }
  }
};
