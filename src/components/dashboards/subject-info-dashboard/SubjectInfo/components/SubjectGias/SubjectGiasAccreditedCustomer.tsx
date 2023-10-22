import React from 'react';
import { Card } from 'antd';
import { GiasAccreditedCustomer } from '@app/store/types/Subject';
import { formatDate } from '@app/utils/utils';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';

type MyComponentProps = {
  giasAccreditedCustomer: GiasAccreditedCustomer[];
};

const SubjectGiasAccreditedCustomer: React.FC<MyComponentProps> = ({ giasAccreditedCustomer }) => {
  return (
    <Card title="Реестр ГИАС аккредитованных заказчиков" style={{ width: '100%' }}>
      <DataField name={'Дата включения в реестр'} content={formatDate(giasAccreditedCustomer[0].from_dttm)} />
      <DataField name={'Дата исключения из реестра'} content={formatDate(giasAccreditedCustomer[0].to_dttm)} />
      {giasAccreditedCustomer[0].is_customer ? (
        <DataField name={'Является или нет поставщиком'} content={'Да'} />
      ) : (
        <DataField name={'Является или нет поставщиком'} content={'Нет'} />
      )}
      {giasAccreditedCustomer[0].is_organizer ? (
        <DataField name={'Является или нет заказчиком'} content={'Да'} />
      ) : (
        <DataField name={'Является или нет заказчиком'} content={'Нет'} />
      )}
      <DataField
        name={'Ведомственная принадлежность'}
        content={formatDate(giasAccreditedCustomer[0].departmental_affiliation)}
      />
    </Card>
  );
};

export default SubjectGiasAccreditedCustomer;
