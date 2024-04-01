import { Content } from '@app/components/dashboards/dashboard/styles/DetailedInformationCompanyStyle';
import { formatDate, formatPhoneNumber } from '@app/utils/utils';
import React from 'react';

export enum DetailsTableType {
  COMPETITORS,
}

const getColumn = (title: string, field: string, isLink = false, isDate = false, isPhone = false) => {
  let renderText;
  if (isDate) {
    if (isDate) {
      renderText = (text: string) => {
        return <div>{formatDate(text, true)}</div>;
      };
    }
  } else if (isPhone) {
    renderText = (text: string) => {
      return <Content>{formatPhoneNumber(text)}</Content>;
    };
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
        getColumn('Дата регистрации', 'company_date_registration'),
        getColumn('Полный адрес', 'address_full'),
        getColumn('Электронный адрес', 'contact_email'),
        {
          title: 'Телефон',
          dataIndex: 'contact_phone_number',
          key: 'contact_phone_number',
          width: 'auto',
          ellipsis: true,
          render: (text: string | undefined) => {
            return text && <Content>{formatPhoneNumber(text)}</Content>;
          },
        },
      ];
    }
  }
};
