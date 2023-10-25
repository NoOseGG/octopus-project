import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import { GiasComplaintSubmit } from '@app/store/types/Subject';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import DataFieldDate from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import styled from 'styled-components';

type MyComponentProps = {
  giasComplaintSubmit: GiasComplaintSubmit[];
};

const SubjectGiasCompaintSubmit: React.FC<MyComponentProps> = ({ giasComplaintSubmit }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <Container>
      {Boolean(giasComplaintSubmit.length) && (
        <>
          <Card title="Реестр ГИАС аккредитованных заказчиков" style={{ width: '100%' }}>
            <DataFieldDate
              name="Дата и время размещения жалобы на ЭТП"
              content={giasComplaintSubmit[index].from_dttm}
            />
            <DataField name="Реестровый номер жалобы" content={giasComplaintSubmit[index].reg_number} />
            <DataField name="Код статуса жалобы" content={giasComplaintSubmit[index].status_code} />
            <DataField name="Наименование статуса жалобы" content={giasComplaintSubmit[index].status_name} />
            <DataFieldDate
              name="Дата и время размещения жалобы в ГИАС"
              content={giasComplaintSubmit[index].from_dttm_gias}
            />
            <DataField name="Идентификатор закупки" content={giasComplaintSubmit[index].purchase_hash_diff} />
            <DataField name="Форма тендера" content={giasComplaintSubmit[index].tender_form} />
            <DataFieldDate
              name="Начала срока приостановления закупки"
              content={giasComplaintSubmit[index].suspend_from_dttm}
            />
            <DataFieldDate
              name="Окончание срока приостановления закупки"
              content={giasComplaintSubmit[index].suspend_to_dttm}
            />
            <DataFieldDate name="Дата и время рассмотрения жалобы" content={giasComplaintSubmit[index].review_dttm} />
            <DataFieldDate name="Дата и время начала торгов" content={giasComplaintSubmit[index].redeployment_dttm} />
            <DataField name="Ссылка на документ жалобы" content={giasComplaintSubmit[index].complaint_file_url} />
            <DataField name="Описание отмены жалобы" content={giasComplaintSubmit[index].withdrawal_complaint_descr} />
            <DataField
              name="Дата и время отмены жалобы"
              content={giasComplaintSubmit[index].withdrawal_complaint_dttm}
            />
            <DataField
              name="Ссылка на документ об отказе в рассмотрении жалобы"
              content={giasComplaintSubmit[index].complaint_refuse_url}
            />
          </Card>
          {Boolean(giasComplaintSubmit.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={giasComplaintSubmit.length}
              defaultPageSize={1}
              size={'small'}
              onChange={(page) => handleClick(page)}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default SubjectGiasCompaintSubmit;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
