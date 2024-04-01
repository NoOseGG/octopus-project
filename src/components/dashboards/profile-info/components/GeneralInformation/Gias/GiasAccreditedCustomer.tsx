import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';

const GiasAccreditedCustomer: React.FC = () => {
  const gias_accredited_customer = useAppSelector((state) => state.searchProfile.profile.gias_accredited_customer);

  return (
    <>
      {Boolean(gias_accredited_customer.length) && (
        <>
          <S.StyledTable>
            <thead>
              <tr>
                <td>
                  <S.Title>Реестр аккредитованных заказчиков</S.Title>
                </td>
              </tr>
            </thead>
            <tbody>
              <TableLine
                name={'Дата включения в реестр'}
                field={gias_accredited_customer[0]?.from_dttm}
                isDate={true}
              />
              <TableLine
                name={'Дата исключения из реестра'}
                field={gias_accredited_customer[0]?.to_dttm}
                isDate={true}
              />
              <TableLine
                name={'Является или нет поставщиком'}
                field={gias_accredited_customer[0]?.is_customer ? 'Да' : 'Нет'}
              />
              <TableLine
                name={'Является или нет заказчиком'}
                field={gias_accredited_customer[0]?.is_organizer ? 'Да' : 'Нет'}
              />
              <TableLine
                name={'Ведомственная принадлежность'}
                field={gias_accredited_customer[0]?.departmental_affiliation}
              />
            </tbody>
          </S.StyledTable>
          <S.MyDivider />
        </>
      )}
    </>
  );
};

export default GiasAccreditedCustomer;
