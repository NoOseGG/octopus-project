import React from 'react';
import {
  IceTradeHistoryDataType,
  IceTradeNamesEnum,
} from '@app/components/dashboards/profile-info/components/IceTrades/types/IceTradeTypes';
import { Link } from 'react-router-dom';
import {
  TableTitle,
  TableContent,
} from '@app/components/dashboards/profile-info/components/IceTrades/styles/IceTradeStyles';
import styles from '@app/components/dashboards/search-dashboard/subjectsList/subject-item/SubjectItem.module.css';
import { SUBJECT_INFO_DASHBOARD_PATH } from '@app/components/router/AppRouter';

const getColumn = (title: string, field: string, link = false) => {
  let renderText;
  if (link) {
    renderText = (text: string, record: IceTradeHistoryDataType) => (
      <Link className={styles.link} to={`${SUBJECT_INFO_DASHBOARD_PATH}/${record.customer_id}`} target={'_blank'}>
        <TableContent style={{ cursor: 'pointer', textDecoration: 'underline' }}>{text}</TableContent>
      </Link>
    );
  } else {
    renderText = (text: string) => {
      return <TableContent>{text}</TableContent>;
    };
  }

  return {
    title: <TableTitle>{title}</TableTitle>,
    dataIndex: field,
    key: field,
    render: renderText,
  };
};

export const getIceTradeHistoryColumns = (iceTradeType: IceTradeNamesEnum) => {
  switch (iceTradeType) {
    case IceTradeNamesEnum.CUSTOMER: {
      return [
        getColumn('Дата и время окончания приема предложений', 'request_end'),
        getColumn('Предмет закупки', 'description'),
        getColumn('Объём', 'volume_lot'),
        getColumn('Стоимость в белорусских рублях', 'total_price_purchase_byn'),
        getColumn('Стоимость в долларах', 'total_price_purchase_usd'),
        getColumn('Наименование поставщика', 'firm_name'),
        getColumn('УНП поставщика', 'participants_identifier'),
        getColumn('Дата договора', 'contract_date'),
      ];
    }
    case IceTradeNamesEnum.PARTICIPANT: {
      return [
        getColumn('УНП Заказчика', 'customer_id', true),
        getColumn('Наименование заказчика', 'customer_name'),
        getColumn('Дата и время окончания приема предложений', 'request_end'),
        getColumn('Предмет закупки', 'description'),
        getColumn('Объём', 'volume_lot'),
        getColumn('Стоимость в белорусских рублях', 'total_price_purchase_byn'),
        getColumn('Стоимость в долларах', 'total_price_purchase_usd'),
        getColumn('Наименование поставщика', 'firm_name'),
        getColumn('УНП поставщика', 'participants_identifier'),
        getColumn('Дата договора', 'contract_date'),
      ];
    }
    case IceTradeNamesEnum.OTHER_PARTICIPANT: {
      return [
        getColumn('УНП Заказчика', 'customer_id', true),
        getColumn('Наименование заказчика', 'customer_name'),
        getColumn('Дата и время окончания приема предложений', 'request_end'),
        getColumn('Предмет закупки', 'description'),
        getColumn('Объём', 'volume_lot'),
        getColumn('Стоимость в белорусских рублях', 'total_price_purchase_byn'),
        getColumn('Стоимость в долларах', 'total_price_purchase_usd'),
        getColumn('Наименование поставщика', 'firm_name'),
        getColumn('УНП поставщика', 'participants_identifier'),
        getColumn('Дата договора', 'contract_date'),
      ];
    }
  }
};
