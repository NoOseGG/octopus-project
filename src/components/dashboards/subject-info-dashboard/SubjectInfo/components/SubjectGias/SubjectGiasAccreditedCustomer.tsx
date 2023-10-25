import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import { GiasAccreditedCustomer } from '@app/store/types/Subject';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import DataFieldDate from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import styled from 'styled-components';

type MyComponentProps = {
  giasAccreditedCustomer: GiasAccreditedCustomer[];
};

const SubjectGiasAccreditedCustomer: React.FC<MyComponentProps> = ({ giasAccreditedCustomer }) => {
  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <Container>
      {Boolean(giasAccreditedCustomer.length) && (
        <>
          <Card title="Реестр ГИАС аккредитованных заказчиков" style={{ width: '100%' }}>
            <DataFieldDate name={'Дата включения в реестр'} content={giasAccreditedCustomer[index].from_dttm} />
            <DataFieldDate name={'Дата исключения из реестра'} content={giasAccreditedCustomer[index].to_dttm} />
            {giasAccreditedCustomer[index].is_customer ? (
              <DataField name={'Является или нет поставщиком'} content={'Да'} />
            ) : (
              <DataField name={'Является или нет поставщиком'} content={'Нет'} />
            )}
            {giasAccreditedCustomer[index].is_organizer ? (
              <DataField name={'Является или нет заказчиком'} content={'Да'} />
            ) : (
              <DataField name={'Является или нет заказчиком'} content={'Нет'} />
            )}
            <DataFieldDate
              name={'Ведомственная принадлежность'}
              content={giasAccreditedCustomer[index].departmental_affiliation}
            />
          </Card>
          {Boolean(giasAccreditedCustomer.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={giasAccreditedCustomer.length}
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

export default SubjectGiasAccreditedCustomer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
