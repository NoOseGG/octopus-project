import { Content } from '@app/components/dashboards/dashboard/styles/DetailedInformationCompanyStyle';
import { formatDate, formatPhoneNumber } from '@app/utils/utils';
import React from 'react';

export enum DetailsTableType {
  COMPETITORS,
}

const getColumn = (title: string, field: string, isLink = false, isDate = false, isPhone = false, width = 'auto') => {
  let renderText;
  if (isDate) {
    if (isDate) {
      renderText = (text: string) => {
        return text ? <div>{formatDate(text, true)}</div> : <Content textAlign={'center'}>-</Content>;
      };
    }
  } else if (isPhone) {
    renderText = (text: string) => {
      return text ? <Content>{formatPhoneNumber(text)}</Content> : <Content textAlign={'center'}>-</Content>;
    };
  } else {
    renderText = (text: string) => {
      return text ? <Content>{text}</Content> : <Content textAlign={'center'}>-</Content>;
    };
  }

  return {
    title: title,
    dataIndex: field,
    key: field,
    width: width,
    render: renderText,
  };
};

export const getColumns = (detailed: DetailsTableType) => {
  switch (detailed) {
    case DetailsTableType.COMPETITORS: {
      return [
        getColumn('УНП', 'legal_entity_id'),
        getColumn('Сокращенное наименование', 'company_short_name'),
        getColumn('Дата регистрации', 'company_date_registration'),
        getColumn('Полный адрес', 'address_full'),
        getColumn('Электронный адрес', 'contact_email'),
        getColumn('Сайт', 'contact_web_site'),
        {
          title: 'Телефон',
          dataIndex: 'contact_phone_number',
          key: 'contact_phone_number',
          width: 'auto',
          ellipsis: true,
          render: (text: string | undefined) => {
            return text ? <Content>{formatPhoneNumber(text)}</Content> : <Content textAlign={'center'}>-</Content>;
          },
        },
        getColumn('Индекс', 'king_group', false, false, false, '5%'),
        getColumn('Оценка', 'king', false, false, false, '5%'),
      ];
    }
  }
};
