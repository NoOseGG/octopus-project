import React from 'react';
import { Card } from 'antd';
import { GiasComplaintSubmit } from '@app/store/types/Subject';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';

type MyComponentProps = {
  giasComplaintSubmit: GiasComplaintSubmit[];
};

const SubjectGiasCompaintSubmit: React.FC<MyComponentProps> = ({ giasComplaintSubmit }) => {
  return (
    <Card title="Реестр ГИАС аккредитованных заказчиков" style={{ width: '100%' }}>
      {giasComplaintSubmit[0].from_dttm && (
        <DataField name="Дата и время размещения жалобы на ЭТП" content={giasComplaintSubmit[0].from_dttm} />
      )}
      {giasComplaintSubmit[0].reg_number && (
        <DataField name="Реестровый номер жалобы" content={giasComplaintSubmit[0].reg_number} />
      )}
      {giasComplaintSubmit[0].status_code && (
        <DataField name="Код статуса жалобы" content={giasComplaintSubmit[0].reg_number} />
      )}
      {giasComplaintSubmit[0].status_name && (
        <DataField name="Наименование статуса жалобы" content={giasComplaintSubmit[0].status_name} />
      )}
      {giasComplaintSubmit[0].from_dttm_gias && (
        <DataField name="Дата и время размещения жалобы в ГИАС" content={giasComplaintSubmit[0].from_dttm_gias} />
      )}
      {giasComplaintSubmit[0].purchase_hash_diff && (
        <DataField name="Идентификатор закупки" content={giasComplaintSubmit[0].purchase_hash_diff} />
      )}
      {giasComplaintSubmit[0].tender_form && (
        <DataField name="Форма тендера" content={giasComplaintSubmit[0].tender_form} />
      )}
      {giasComplaintSubmit[0].suspend_from_dttm && (
        <DataField name="Начала срока приостановления закупки" content={giasComplaintSubmit[0].suspend_from_dttm} />
      )}
      {giasComplaintSubmit[0].suspend_to_dttm && (
        <DataField name="Окончание срока приостановления закупки" content={giasComplaintSubmit[0].suspend_to_dttm} />
      )}
      {giasComplaintSubmit[0].review_dttm && (
        <DataField name="Дата и время рассмотрения жалобы" content={giasComplaintSubmit[0].review_dttm} />
      )}
      {giasComplaintSubmit[0].redeployment_dttm && (
        <DataField name="Дата и время начала торгов" content={giasComplaintSubmit[0].redeployment_dttm} />
      )}
      {giasComplaintSubmit[0].complaint_file_url && (
        <DataField name="Ссылка на документ жалобы" content={giasComplaintSubmit[0].complaint_file_url} />
      )}
      {giasComplaintSubmit[0].withdrawal_complaint_descr && (
        <DataField name="Описание отмены жалобы" content={giasComplaintSubmit[0].withdrawal_complaint_descr} />
      )}
      {giasComplaintSubmit[0].withdrawal_complaint_dttm && (
        <DataField name="Дата и время отмены жалобы" content={giasComplaintSubmit[0].withdrawal_complaint_dttm} />
      )}
      {giasComplaintSubmit[0].complaint_refuse_url && (
        <DataField
          name="Ссылка на документ об отказе в рассмотрении жалобы"
          content={giasComplaintSubmit[0].complaint_refuse_url}
        />
      )}
    </Card>
  );
};

export default SubjectGiasCompaintSubmit;
