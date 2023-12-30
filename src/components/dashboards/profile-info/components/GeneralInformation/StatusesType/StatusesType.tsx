import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { useAppSelector } from '@app/hooks/reduxHooks';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';

const StatusesTypes: React.FC = () => {
  const statuses_types = useAppSelector((state) => state.searchProfile.profile.statuses_types);

  return (
    <>
      {Boolean(statuses_types.length) && (
        <S.StyledTable>
          <thead>
            <tr>
              <td>
                <S.Title>Данные о способах создания / ликвидации</S.Title>
              </td>
            </tr>
          </thead>
          <tbody>
            <TableLine name={'Код'} field={statuses_types[0]?.status_code} />
            <TableLine name={'Наименование'} field={statuses_types[0]?.name} />
            <TableLine name={'Код типа'} field={statuses_types[0]?.type_code} />
            <TableLine name={'Дата начала действия'} field={statuses_types[0]?.from_dttm} isDate={true} />
            <TableLine name={'Дата окончания действия'} field={statuses_types[0]?.to_dttm} isDate={true} />
          </tbody>
        </S.StyledTable>
      )}
    </>
  );
};

export default StatusesTypes;
