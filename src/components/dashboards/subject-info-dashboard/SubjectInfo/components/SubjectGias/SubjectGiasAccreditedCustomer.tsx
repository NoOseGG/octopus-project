import React from 'react';
import { Card, Typography } from 'antd';
import { GiasAccreditedCustomer } from '@app/store/types/Subject';
import { formatDate } from '@app/utils/utils';

const { Text } = Typography;

type MyComponentProps = {
  giasAccreditedCustomer: GiasAccreditedCustomer[];
};

const SubjectGiasAccreditedCustomer: React.FC<MyComponentProps> = ({ giasAccreditedCustomer }) => {
  return (
    <Card title="Реестр ГИАС аккредитованных заказчиков" style={{ width: '100%' }}>
      {giasAccreditedCustomer[0].from_dttm && (
        <>
          <Text strong={true}>Дата включения в реестр: </Text>{' '}
          <Text>{formatDate(giasAccreditedCustomer[0].from_dttm)}</Text>
          <br />
        </>
      )}
      {giasAccreditedCustomer[0].to_dttm && (
        <>
          <Text strong={true}>Дата исключения из реестра: </Text>{' '}
          <Text>{formatDate(giasAccreditedCustomer[0].to_dttm)}</Text>
          <br />
        </>
      )}
      {Boolean(giasAccreditedCustomer[0].is_customer) && (
        <>
          <Text strong={true}>Является или нет поставщиком: </Text>{' '}
          {giasAccreditedCustomer[0].is_customer ? <Text>Да</Text> : <Text>Нет</Text>}
          <Text>{giasAccreditedCustomer[0].is_customer}</Text>
          <br />
        </>
      )}
      {Boolean(giasAccreditedCustomer[0].is_organizer) && (
        <>
          <Text strong={true}>Является или нет заказчиком: </Text> <Text>{giasAccreditedCustomer[0].is_organizer}</Text>
          {giasAccreditedCustomer[0].is_organizer ? <Text>Да</Text> : <Text>Нет</Text>}
          <br />
        </>
      )}
      {giasAccreditedCustomer[0].departmental_affiliation && (
        <>
          <Text strong={true}>Ведомственная принадлежность: </Text>
          <Text>{giasAccreditedCustomer[0].departmental_affiliation}</Text>
          <br />
        </>
      )}
    </Card>
  );
};

export default SubjectGiasAccreditedCustomer;
