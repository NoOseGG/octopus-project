import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import DataField from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataField';
import DataFieldDate from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import styled from 'styled-components';
import { useAppSelector } from '@app/hooks/reduxHooks';

const SubjectGiasCompaintReceive: React.FC = () => {
  const gias_complaint_receive = useAppSelector((state) => state.searchProfile.profile.gias_complaint_receive);

  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <>
      {Boolean(gias_complaint_receive.length) && (
        <Container>
          <Card title="Реестр жалоб ГИАС которые отправлял субъект" style={{ width: '100%' }}>
            <DataFieldDate
              name="Дата и время размещения жалобы на ЭТП"
              content={gias_complaint_receive[index].from_dttm}
            />
            <DataField name="Реестровый номер жалобы" content={gias_complaint_receive[index].reg_number} />
            <DataField name="Код статуса жалобы" content={gias_complaint_receive[index].status_code} />
            <DataField name="Наименование статуса жалобы" content={gias_complaint_receive[index].status_name} />
            <DataField
              name="Дата и время размещения жалобы в ГИАС"
              content={gias_complaint_receive[index].from_dttm_gias}
            />
            <DataField name="Идентификатор закупки" content={gias_complaint_receive[index].purchase_hash_diff} />
            <DataField name="Форма тендера" content={gias_complaint_receive[index].tender_form} />
            <DataFieldDate
              name="Начала срока приостановления закупки"
              content={gias_complaint_receive[index].suspend_from_dttm}
            />
            <DataFieldDate
              name="Окончание срока приостановления закупки"
              content={gias_complaint_receive[index].suspend_to_dttm}
            />
            <DataFieldDate
              name="Дата и время рассмотрения жалобы"
              content={gias_complaint_receive[index].review_dttm}
            />
            <DataFieldDate
              name="Дата и время начала торгов"
              content={gias_complaint_receive[index].redeployment_dttm}
            />
            <DataField name="Ссылка на документ жалобы" content={gias_complaint_receive[index].complaint_file_url} />
            <DataField
              name="Описание отмены жалобы"
              content={gias_complaint_receive[index].withdrawal_complaint_descr}
            />
            <DataFieldDate
              name="Дата и время отмены жалобы"
              content={gias_complaint_receive[index].withdrawal_complaint_dttm}
            />
            <DataFieldDate
              name="Ссылка на документ об отказе в рассмотрении жалобы"
              content={gias_complaint_receive[index].complaint_refuse_url}
            />
            <DataFieldDate
              name="УНП организатора закупки"
              content={gias_complaint_receive[index].legal_entity_id_name}
            />
            <DataFieldDate
              name="Наименование организации подающей жалобу"
              content={gias_complaint_receive[index].legal_entity_id}
            />
          </Card>
          {Boolean(gias_complaint_receive.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={gias_complaint_receive.length}
              defaultPageSize={1}
              size={'small'}
              onChange={(page) => handleClick(page)}
            />
          )}
        </Container>
      )}
    </>
  );
};

export default SubjectGiasCompaintReceive;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
