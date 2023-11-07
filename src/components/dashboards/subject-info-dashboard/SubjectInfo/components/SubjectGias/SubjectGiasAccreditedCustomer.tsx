import React, { useState } from 'react';
import { Card, Pagination } from 'antd';
import DataField from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataField';
import DataFieldDate from '@app/components/dashboards/subject-info-dashboard/SubjectInfo/components/Fields/DataFieldDate';
import styled from 'styled-components';
import { useAppSelector } from '@app/hooks/reduxHooks';

const SubjectGiasAccreditedCustomer: React.FC = () => {
  const gias_accredited_customer = useAppSelector((state) => state.searchProfile.profile.gias_accredited_customer);

  const [index, setIndex] = useState(0);

  const handleClick = (page: number) => {
    setIndex(page - 1);
  };

  return (
    <>
      {Boolean(gias_accredited_customer.length) && (
        <Container>
          <Card title="Реестр ГИАС аккредитованных заказчиков" style={{ width: '100%' }}>
            <DataFieldDate name={'Дата включения в реестр'} content={gias_accredited_customer[index].from_dttm} />
            <DataFieldDate name={'Дата исключения из реестра'} content={gias_accredited_customer[index].to_dttm} />
            {gias_accredited_customer[index].is_customer ? (
              <DataField name={'Является или нет поставщиком'} content={'Да'} />
            ) : (
              <DataField name={'Является или нет поставщиком'} content={'Нет'} />
            )}
            {gias_accredited_customer[index].is_organizer ? (
              <DataField name={'Является или нет заказчиком'} content={'Да'} />
            ) : (
              <DataField name={'Является или нет заказчиком'} content={'Нет'} />
            )}
            <DataFieldDate
              name={'Ведомственная принадлежность'}
              content={gias_accredited_customer[index].departmental_affiliation}
            />
          </Card>
          {Boolean(gias_accredited_customer.length > 1) && (
            <Pagination
              style={{ alignSelf: 'center' }}
              defaultCurrent={1}
              total={gias_accredited_customer.length}
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

export default SubjectGiasAccreditedCustomer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
