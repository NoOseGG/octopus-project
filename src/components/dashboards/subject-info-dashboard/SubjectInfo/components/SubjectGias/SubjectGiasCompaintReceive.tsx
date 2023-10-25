import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import { GiasComplaintReceive } from '@app/store/types/Subject';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import DataFieldDate from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import styled from 'styled-components';

type MyComponentProps = {
  giasComplaintReceive: GiasComplaintReceive[];
};

const SubjectGiasCompaintReceive: React.FC<MyComponentProps> = ({ giasComplaintReceive }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <Container>
      {Boolean(giasComplaintReceive.length) && (
        <>
          <Card title="Реестр жалоб ГИАС которые отправлял субъект" style={{ width: '100%' }}>
            <DataFieldDate
              name="Дата и время размещения жалобы на ЭТП"
              content={giasComplaintReceive[index].from_dttm}
            />
            <DataField name="Реестровый номер жалобы" content={giasComplaintReceive[index].reg_number} />
            <DataField name="Код статуса жалобы" content={giasComplaintReceive[index].status_code} />
            <DataField name="Наименование статуса жалобы" content={giasComplaintReceive[index].status_name} />
            <DataField
              name="Дата и время размещения жалобы в ГИАС"
              content={giasComplaintReceive[index].from_dttm_gias}
            />
            <DataField name="Идентификатор закупки" content={giasComplaintReceive[index].purchase_hash_diff} />
            <DataField name="Форма тендера" content={giasComplaintReceive[index].tender_form} />
            <DataFieldDate
              name="Начала срока приостановления закупки"
              content={giasComplaintReceive[index].suspend_from_dttm}
            />
            <DataFieldDate
              name="Окончание срока приостановления закупки"
              content={giasComplaintReceive[index].suspend_to_dttm}
            />
            <DataFieldDate name="Дата и время рассмотрения жалобы" content={giasComplaintReceive[index].review_dttm} />
            <DataFieldDate name="Дата и время начала торгов" content={giasComplaintReceive[index].redeployment_dttm} />
            <DataField name="Ссылка на документ жалобы" content={giasComplaintReceive[index].complaint_file_url} />
            <DataField name="Описание отмены жалобы" content={giasComplaintReceive[index].withdrawal_complaint_descr} />
            <DataFieldDate
              name="Дата и время отмены жалобы"
              content={giasComplaintReceive[index].withdrawal_complaint_dttm}
            />
            <DataFieldDate
              name="Ссылка на документ об отказе в рассмотрении жалобы"
              content={giasComplaintReceive[index].complaint_refuse_url}
            />
            <DataFieldDate name="УНП организатора закупки" content={giasComplaintReceive[index].legal_entity_id_name} />
            <DataFieldDate
              name="Наименование организации подающей жалобу"
              content={giasComplaintReceive[index].legal_entity_id}
            />
          </Card>
          {Boolean(giasComplaintReceive.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={giasComplaintReceive.length}
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

export default SubjectGiasCompaintReceive;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
