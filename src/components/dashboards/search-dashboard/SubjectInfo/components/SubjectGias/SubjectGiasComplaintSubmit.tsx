import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import DataField from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataField';
import DataFieldDate from '@app/components/dashboards/search-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import styled from 'styled-components';
import { useAppSelector } from '@app/hooks/reduxHooks';

const SubjectGiasComplaintSubmit: React.FC = () => {
  const gias_complaint_submit = useAppSelector((state) => state.searchProfile.profile.gias_complaint_submit);

  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <>
      {Boolean(gias_complaint_submit.length) && (
        <Container>
          {Boolean(gias_complaint_submit.length) && (
            <>
              <Card title="Реестр ГИАС аккредитованных заказчиков" style={{ width: '100%' }}>
                <DataFieldDate
                  name="Дата и время размещения жалобы на ЭТП"
                  content={gias_complaint_submit[index].from_dttm}
                />
                <DataField name="Реестровый номер жалобы" content={gias_complaint_submit[index].reg_number} />
                <DataField name="Код статуса жалобы" content={gias_complaint_submit[index].status_code} />
                <DataField name="Наименование статуса жалобы" content={gias_complaint_submit[index].status_name} />
                <DataFieldDate
                  name="Дата и время размещения жалобы в ГИАС"
                  content={gias_complaint_submit[index].from_dttm_gias}
                />
                <DataField name="Идентификатор закупки" content={gias_complaint_submit[index].purchase_hash_diff} />
                <DataField name="Форма тендера" content={gias_complaint_submit[index].tender_form} />
                <DataFieldDate
                  name="Начала срока приостановления закупки"
                  content={gias_complaint_submit[index].suspend_from_dttm}
                />
                <DataFieldDate
                  name="Окончание срока приостановления закупки"
                  content={gias_complaint_submit[index].suspend_to_dttm}
                />
                <DataFieldDate
                  name="Дата и время рассмотрения жалобы"
                  content={gias_complaint_submit[index].review_dttm}
                />
                <DataFieldDate
                  name="Дата и время начала торгов"
                  content={gias_complaint_submit[index].redeployment_dttm}
                />
                <DataField name="Ссылка на документ жалобы" content={gias_complaint_submit[index].complaint_file_url} />
                <DataField
                  name="Описание отмены жалобы"
                  content={gias_complaint_submit[index].withdrawal_complaint_descr}
                />
                <DataField
                  name="Дата и время отмены жалобы"
                  content={gias_complaint_submit[index].withdrawal_complaint_dttm}
                />
                <DataField
                  name="Ссылка на документ об отказе в рассмотрении жалобы"
                  content={gias_complaint_submit[index].complaint_refuse_url}
                />
              </Card>
              {Boolean(gias_complaint_submit.length > 1) && (
                <Pagination
                  style={{ alignSelf: 'center' }}
                  defaultCurrent={1}
                  total={gias_complaint_submit.length}
                  defaultPageSize={1}
                  size={'small'}
                  onChange={(page) => handleClick(page)}
                />
              )}
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default SubjectGiasComplaintSubmit;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
