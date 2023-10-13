import React from 'react';
import { Card } from 'antd';
import { GiasComplaintReceive } from '@app/store/types/Subject';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';

type MyComponentProps = {
  giasComplaintReceive: GiasComplaintReceive[];
};

const SubjectGiasCompaintReceive: React.FC<MyComponentProps> = ({ giasComplaintReceive }) => {
  return (
    <Card title="Реестр жалоб ГИАС которые отправлял субъект" style={{ width: '100%' }}>
      {giasComplaintReceive[0].from_dttm && (
        <DataField name="Дата и время размещения жалобы на ЭТП" content={giasComplaintReceive[0].from_dttm} />
      )}
      {giasComplaintReceive[0].reg_number && (
        <DataField name="Реестровый номер жалобы" content={giasComplaintReceive[0].reg_number} />
      )}
      {giasComplaintReceive[0].status_code && (
        <DataField name="Код статуса жалобы" content={giasComplaintReceive[0].status_code} />
      )}
      {giasComplaintReceive[0].status_name && (
        <DataField name="Наименование статуса жалобы" content={giasComplaintReceive[0].status_name} />
      )}
      {giasComplaintReceive[0].from_dttm_gias && (
        <DataField name="Дата и время размещения жалобы в ГИАС" content={giasComplaintReceive[0].from_dttm_gias} />
      )}
      {giasComplaintReceive[0].purchase_hash_diff && (
        <DataField name="Идентификатор закупки" content={giasComplaintReceive[0].purchase_hash_diff} />
      )}
      {giasComplaintReceive[0].tender_form && (
        <DataField name="Форма тендера" content={giasComplaintReceive[0].tender_form} />
      )}
      {giasComplaintReceive[0].suspend_from_dttm && (
        <DataField name="Начала срока приостановления закупки" content={giasComplaintReceive[0].suspend_to_dttm} />
      )}
      {giasComplaintReceive[0].suspend_to_dttm && (
        <DataField name="Окончание срока приостановления закупки" content={giasComplaintReceive[0].suspend_to_dttm} />
      )}
      {giasComplaintReceive[0].review_dttm && (
        <DataField name="Дата и время рассмотрения жалобы" content={giasComplaintReceive[0].review_dttm} />
      )}
      {giasComplaintReceive[0].redeployment_dttm && (
        <DataField name="Дата и время начала торгов" content={giasComplaintReceive[0].redeployment_dttm} />
      )}
      {giasComplaintReceive[0].complaint_file_url && (
        <DataField name="Ссылка на документ жалобы" content={giasComplaintReceive[0].complaint_file_url} />
      )}
      {giasComplaintReceive[0].withdrawal_complaint_descr && (
        <DataField name="Описание отмены жалобы" content={giasComplaintReceive[0].withdrawal_complaint_descr} />
      )}
      {giasComplaintReceive[0].withdrawal_complaint_dttm && (
        <DataField name="Дата и время отмены жалобы" content={giasComplaintReceive[0].withdrawal_complaint_dttm} />
      )}
      {giasComplaintReceive[0].complaint_refuse_url && (
        <DataField
          name="Ссылка на документ об отказе в рассмотрении жалобы"
          content={giasComplaintReceive[0].complaint_refuse_url}
        />
      )}
      {giasComplaintReceive[0].legal_entity_id_name && (
        <DataField name="УНП организатора закупки" content={giasComplaintReceive[0].legal_entity_id_name} />
      )}
      {giasComplaintReceive[0].legal_entity_id && (
        <DataField name="Наименование организации подающей жалобу" content={giasComplaintReceive[0].legal_entity_id} />
      )}
    </Card>
  );
};

export default SubjectGiasCompaintReceive;
