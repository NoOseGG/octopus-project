import { Content } from '@app/components/dashboards/dashboard/styles/DetailedInformationCompanyStyle';
import React from 'react';
import { DetailedTableObject } from '@app/interfaces/interfaces';

export enum DetailsTableType {
  COMPETITORS,
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
          sorter: (a: DetailedTableObject, b: DetailedTableObject) => b.king_group - a.king_group,
          render: (text: number) => <Content>{text}</Content>,
        },
        {
          title: 'Оценка',
          dataIndex: 'king',
          key: 'king',
          width: '5%',
          showSorterTooltip: false,
          sorter: (a: DetailedTableObject, b: DetailedTableObject) => b.king - a.king,
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
  }
};
