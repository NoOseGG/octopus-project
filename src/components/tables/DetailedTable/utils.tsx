import { Content } from '@app/components/dashboards/dashboard/styles/DetailedInformationCompanyStyle';
import React from 'react';
import { DashboardObject } from '@app/interfaces/interfaces';

export enum DetailsTableType {
  COMPETITORS,
  RATING_ALL,
  FEEDBACK,
  ICE_TRADE_PARTICIPANTS,
}

const getColumn = (title: string, field: string, width = 'auto') => {
  // let renderText;
  // if (isDate) {
  //   if (isDate) {
  //     renderText = (text: string) => {
  //       return text ? <div>{formatDate(text, true)}</div> : <Content textAlign={'center'}>-</Content>;
  //     };
  //   }
  // } else if (isPhone) {
  //   renderText = (text: string) => {
  //     return text ? <Content>{formatPhoneNumber(text)}</Content> : <Content textAlign={'center'}>-</Content>;
  //   };
  // } else {
  //   renderText = (text: string) => {
  //     return text ? <Content>{text}</Content> : <Content textAlign={'center'}>-</Content>;
  //   };
  // }

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

export const getColumns = (detailed: DetailsTableType) => {
  switch (detailed) {
    case DetailsTableType.COMPETITORS: {
      return [
        getColumn('УНП', 'legal_entity_id', '10%'),
        getColumn('Сокращенное наименование', 'company_short_name', '30%'),
        {
          title: 'Индекс',
          dataIndex: 'king_group',
          key: 'king_group',
          width: '5%',
          showSorterTooltip: false,
          sorter: (a: DashboardObject, b: DashboardObject) => b.king_group - a.king_group,
          render: (text: number) => <Content style={{ color: getColorByKind(text), fontWeight: 700 }}>{text}</Content>,
        },
        {
          title: 'Оценка',
          dataIndex: 'king',
          key: 'king',
          width: '5%',
          showSorterTooltip: false,
          sorter: (a: DashboardObject, b: DashboardObject) => b.king - a.king,
          render: (text: number) => <Content>{text}</Content>,
        },
        getColumn('Дата регистрации', 'company_date_registration', '15%'),
        getColumn('Полный адрес', 'address_full', '35%'),
        // getColumn('Электронный адрес', 'contact_email'),
        // getColumn('Сайт', 'contact_web_site'),
        // {
        //   title: 'Телефон',
        //   dataIndex: 'contact_phone_number',
        //   key: 'contact_phone_number',
        //   width: 'auto',
        //   ellipsis: true,
        //   render: (text: string | undefined) => {yar
        //     return text ? <Content>{formatPhoneNumber(text)}</Content> : <Content textAlign={'center'}>-</Content>;
        //   },
        // },
      ];
    }
    case DetailsTableType.RATING_ALL:
      return [
        getColumn('Позиция', 'position'),
        getColumn('УНП', 'legal_entity_id'),
        getColumn('Сокращенное наименование', 'company_short_name'),
      ];
    case DetailsTableType.FEEDBACK:
      return [
        getColumn('Позиция', 'position'),
        getColumn('УНП', 'legal_entity_id'),
        getColumn('Сокращенное наименование', 'company_short_name'),
      ];
    case DetailsTableType.ICE_TRADE_PARTICIPANTS:
      return [getColumn('Наименование', 'name'), getColumn('Сумма', 'sum')];
  }
};

const getColorByKind = (kind: number | null): string => {
  switch (kind) {
    case 0:
    case 1:
    case 2:
      return 'red';
    case 3:
    case 4:
    case 5:
    case 6:
      return 'orange';
    case 7:
    case 8:
    case 9:
      return 'green';
    default:
      return 'red';
  }
};
