import React, { Fragment, useState } from 'react';
import { GiasComplaintReceive } from '@app/store/types/Subject';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import ButtonShow from '@app/components/dashboards/profile-info/components/components/Fields/ButtonShow/ButtonShow';
import { formatDate } from '@app/utils/utils';

const COLLAPSE_OPEN = 'Закрыть все жалобы';
const COLLAPSE_CLOSE = 'Показать все жалобы';

type MyComponentProps = {
  gias_complaint_receive: GiasComplaintReceive[];
};

const TableLineGiasComplaintSubmit: React.FC<MyComponentProps> = ({ gias_complaint_receive }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [textCollapseButton, setTextCollapseButton] = useState(COLLAPSE_CLOSE);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
    if (isCollapsed) setTextCollapseButton(COLLAPSE_CLOSE);
    else setTextCollapseButton(COLLAPSE_OPEN);
  };

  if (gias_complaint_receive.length === 1) {
    return (
      <>
        {gias_complaint_receive.map((item, index) => (
          <Fragment key={index}>
            <TableLine name={'Дата и время размещения жалобы на ЭТП'} field={formatDate(item.from_dttm)} />
            <TableLine name={'Реестровый номер жалобы'} field={item.reg_number} />
            <TableLine name={'Код статуса жалобы'} field={item.status_code} />
            <TableLine name={'Наименование статуса жалобы'} field={item.status_name} />
            <TableLine name={'Дата и время размещения жалобы в ГИАС'} field={formatDate(item.from_dttm_gias)} />
            <TableLine name={'Идентификатор закупки'} field={item.purchase_hash_diff} />
            <TableLine name={'Форма тендера'} field={item.tender_form} />
            <TableLine name={'Начала срока приостановления закупки'} field={formatDate(item.suspend_from_dttm)} />
            <TableLine name={'Окончание срока приостановления закупки'} field={formatDate(item.suspend_to_dttm)} />
            <TableLine name={'Дата и время рассмотрения жалобы'} field={formatDate(item.review_dttm)} />
            <TableLine name={'Дата и время начала торгов'} field={formatDate(item.redeployment_dttm)} />
            <TableLine name={'Ссылка на документ жалобы'} field={item.complaint_file_url} />
            <TableLine name={'Описание отмены жалобы'} field={item.withdrawal_complaint_descr} />
            <TableLine name={'Дата и время отмены жалобы'} field={formatDate(item.withdrawal_complaint_dttm)} />
            <TableLine name={'Ссылка на документ об отказе в рассмотрении жалобы'} field={item.complaint_refuse_url} />
            <TableLine name={'УНП организатора закупки'} field={item.legal_entity_id_name} />
            <TableLine name={'Наименование организации подающей жалобу'} field={item.legal_entity_id} />
          </Fragment>
        ))}
      </>
    );
  } else {
    return (
      <>
        {!isCollapsed ? (
          <>
            {gias_complaint_receive.slice(0, 1).map((item, index) => (
              <Fragment key={index}>
                <TableLine name={'Дата и время размещения жалобы на ЭТП'} field={formatDate(item.from_dttm)} />
                <TableLine name={'Реестровый номер жалобы'} field={item.reg_number} />
                <TableLine name={'Код статуса жалобы'} field={item.status_code} />
                <TableLine name={'Наименование статуса жалобы'} field={item.status_name} />
                <TableLine name={'Дата и время размещения жалобы в ГИАС'} field={formatDate(item.from_dttm_gias)} />
                <TableLine name={'Идентификатор закупки'} field={item.purchase_hash_diff} />
                <TableLine name={'Форма тендера'} field={item.tender_form} />
                <TableLine name={'Начала срока приостановления закупки'} field={formatDate(item.suspend_from_dttm)} />
                <TableLine name={'Окончание срока приостановления закупки'} field={formatDate(item.suspend_to_dttm)} />
                <TableLine name={'Дата и время рассмотрения жалобы'} field={formatDate(item.review_dttm)} />
                <TableLine name={'Дата и время начала торгов'} field={formatDate(item.redeployment_dttm)} />
                <TableLine name={'Ссылка на документ жалобы'} field={item.complaint_file_url} />
                <TableLine name={'Описание отмены жалобы'} field={item.withdrawal_complaint_descr} />
                <TableLine name={'Дата и время отмены жалобы'} field={formatDate(item.withdrawal_complaint_dttm)} />
                <TableLine
                  name={'Ссылка на документ об отказе в рассмотрении жалобы'}
                  field={item.complaint_refuse_url}
                />
                <TableLine name={'УНП организатора закупки'} field={item.legal_entity_id_name} />
                <TableLine name={'Наименование организации подающей жалобу'} field={item.legal_entity_id} />
              </Fragment>
            ))}
          </>
        ) : (
          <>
            {gias_complaint_receive.map((item, index) => (
              <Fragment key={index}>
                <TableLine name={'Дата и время размещения жалобы на ЭТП'} field={formatDate(item.from_dttm)} />
                <TableLine name={'Реестровый номер жалобы'} field={item.reg_number} />
                <TableLine name={'Код статуса жалобы'} field={item.status_code} />
                <TableLine name={'Наименование статуса жалобы'} field={item.status_name} />
                <TableLine name={'Дата и время размещения жалобы в ГИАС'} field={formatDate(item.from_dttm_gias)} />
                <TableLine name={'Идентификатор закупки'} field={item.purchase_hash_diff} />
                <TableLine name={'Форма тендера'} field={item.tender_form} />
                <TableLine name={'Начала срока приостановления закупки'} field={formatDate(item.suspend_from_dttm)} />
                <TableLine name={'Окончание срока приостановления закупки'} field={formatDate(item.suspend_to_dttm)} />
                <TableLine name={'Дата и время рассмотрения жалобы'} field={formatDate(item.review_dttm)} />
                <TableLine name={'Дата и время начала торгов'} field={formatDate(item.redeployment_dttm)} />
                <TableLine name={'Ссылка на документ жалобы'} field={item.complaint_file_url} />
                <TableLine name={'Описание отмены жалобы'} field={item.withdrawal_complaint_descr} />
                <TableLine name={'Дата и время отмены жалобы'} field={formatDate(item.withdrawal_complaint_dttm)} />
                <TableLine
                  name={'Ссылка на документ об отказе в рассмотрении жалобы'}
                  field={item.complaint_refuse_url}
                />
                <TableLine name={'УНП организатора закупки'} field={item.legal_entity_id_name} />
                <TableLine name={'Наименование организации подающей жалобу'} field={item.legal_entity_id} />
                <br />
              </Fragment>
            ))}
          </>
        )}
        <span onClick={() => handleClick()}>
          <ButtonShow>
            {isCollapsed ? (
              <>{textCollapseButton}</>
            ) : (
              <>
                {textCollapseButton} ({gias_complaint_receive.length})
              </>
            )}
          </ButtonShow>
        </span>
      </>
    );
  }
};

export default TableLineGiasComplaintSubmit;
