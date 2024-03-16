import { Link } from 'react-router-dom';
import styles from '@app/components/dashboards/search-dashboard/subjectsList/subject-item/SubjectItem.module.css';
import { SUBJECT_INFO_DASHBOARD_PATH } from '@app/components/router/AppRouter';
import { Content } from '@app/components/dashboards/dashboard/styles/DetailedInformationCompanyStyle';
import React from 'react';
import { DETAILED_TYPE } from '@app/components/dashboards/dashboard/components/DetailedInformation/DetailedInformationTypes';
import { formatDate } from '@app/utils/utils';

const getColumn = (title: string, field: string, isLink = false, isDate = false) => {
  let renderText;
  if (isLink) {
    renderText = (text: string, record: any) => (
      <Link className={styles.link} to={`${SUBJECT_INFO_DASHBOARD_PATH}/${record.legal_entity_id}`} target={'_blank'}>
        <span style={{ cursor: 'pointer', textDecoration: 'underline', fontSize: 14 }}>{text}</span>
      </Link>
    );
  } else if (isDate) {
    if (isDate) {
      renderText = (text: string) => {
        return <Content>{formatDate(text, true)}</Content>;
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

// const columns = [
//   getColumn('УНП', 'legal_entity_id', true),
//   getColumn('Сокращенное наименование', 'company_short_name'),
//   getColumn('Вид деятельности', 'type_activity_name'),
//   getColumn('Дата регистрации', 'company_date_registration'),
//   getColumn('Состояние', 'company_status_name'),
//   getColumn('Полный адрес', 'address_full'),
//   getColumn('Сайт', 'contact_web_site'),
//   getColumn('Электроная почта', 'contact_email'),
//   getColumn('Наименование инспекции НМС', 'tax_office_name'),
// ];

export const getColumns = (detailed: DETAILED_TYPE) => {
  switch (detailed) {
    case DETAILED_TYPE.LE_CREATED:
      return [
        getColumn('УНП', 'legal_entity_id', true),
        getColumn('Сокращенное наименование', 'company_short_name'),
        getColumn('Вид деятельности', 'type_activity_name'),
        getColumn('Дата регистрации', 'company_date_registration'),
        getColumn('Состояние', 'company_status_name'),
        getColumn('Полный адрес', 'address_full'),
      ];

    case DETAILED_TYPE.LE_LIQUIDATED:
      return [
        getColumn('УНП', 'legal_entity_id', true),
        getColumn('Сокращенное наименование', 'company_short_name'),
        getColumn('Вид деятельности', 'type_activity_name'),
        getColumn('Дата ликвидации', 'company_status_from_dttm'),
        getColumn('Состояние', 'company_status_name'),
        getColumn('Возраст субъекта', 'age_short'),
        getColumn('Полный адрес', 'address_full'),
        getColumn('Наименование инспекции НМС', 'tax_office_name'),
      ];

    case DETAILED_TYPE.LE_BANKRUPTED:
      return [
        getColumn('УНП', 'legal_entity_id', true),
        getColumn('Сокращенное наименование', 'company_short_name'),
        getColumn('Вид деятельности', 'type_activity_name'),
        getColumn('Дата регистрации', 'company_date_registration'),
        getColumn('Дата банкротства', 'company_status_from_dttm'),
        getColumn('Состояние', 'company_status_name'),
        getColumn('Возраст субъекта', 'age_short'),
        getColumn('Полный адрес', 'address_full'),
        getColumn('Наименование инспекции НМС', 'tax_office_name'),
      ];

    case DETAILED_TYPE.LE_CHECKED:
      return [
        getColumn('УНП', 'legal_entity_id', true),
        getColumn('Сокращенное наименование', 'company_short_name'),
        getColumn('Вид деятельности', 'type_activity_name'),
        getColumn('Состояние', 'company_status_name'),
        getColumn('Дата проверки', 'inspection_dttm', false, true),
        getColumn('Возраст субъекта', 'age_short'),
        getColumn('Город', 'address_settlement'),
        getColumn('Проверяющий орган', 'inspection_short_name'),
      ];

    case DETAILED_TYPE.ST_CREATED:
      return [
        getColumn('УНП', 'legal_entity_id', true),
        getColumn('Полное наименование', 'company_full_name'),
        getColumn('Вид деятельности', 'type_activity_name'),
        getColumn('Дата регистрации', 'company_date_registration'),
        getColumn('Состояние', 'company_status_name'),
        getColumn('Наименование инспекции НМС', 'state_body_crt_name'),
      ];

    case DETAILED_TYPE.ST_LIQUIDATED:
      return [
        getColumn('УНП', 'legal_entity_id', true),
        getColumn('Сокращенное наименование', 'company_short_name'),
        getColumn('Вид деятельности', 'type_activity_name'),
        getColumn('Дата ликвидации', 'company_status_from_dttm'),
        getColumn('Состояние', 'company_status_name'),
        getColumn('Возраст субъекта', 'age_short'),
        getColumn('Полный адрес', 'address_full'),
        getColumn('Наименование инспекции НМС', 'tax_office_name'),
      ];

    case DETAILED_TYPE.ST_BANKRUPTED:
      return [
        getColumn('УНП', 'legal_entity_id', true),
        getColumn('Сокращенное наименование', 'company_short_name'),
        getColumn('Вид деятельности', 'type_activity_name'),
        getColumn('Дата регистрации', 'company_date_registration'),
        getColumn('Дата банкротства', 'company_status_from_dttm'),
        getColumn('Состояние', 'company_status_name'),
        getColumn('Возраст субъекта', 'age_short'),
        getColumn('Полный адрес', 'address_full'),
        getColumn('Наименование инспекции НМС', 'tax_office_name'),
      ];

    case DETAILED_TYPE.ST_CHECKED:
      return [
        getColumn('УНП', 'legal_entity_id', true),
        getColumn('Сокращенное наименование', 'company_short_name'),
        getColumn('Вид деятельности', 'type_activity_name'),
        getColumn('Состояние', 'company_status_name'),
        getColumn('Дата проверки', 'inspection_dttm', false, true),
        getColumn('Возраст субъекта', 'age_short'),
        getColumn('Город', 'address_settlement'),
        getColumn('Проверяющий орган', 'inspection_short_name'),
      ];
  }
};
