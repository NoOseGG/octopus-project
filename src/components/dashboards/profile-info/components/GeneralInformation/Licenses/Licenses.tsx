import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { useAppSelector } from '@app/hooks/reduxHooks';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';

const Licenses: React.FC = () => {
  const licenses = useAppSelector((state) => state.searchProfile.profile.licenses);

  return (
    <>
      {Boolean(licenses.length) && (
        <S.StyledTable>
          <thead>
            <tr>
              <td>
                <S.Title>Лицензии</S.Title>
              </td>
            </tr>
          </thead>
          <tbody>
            <TableLine name={'Номер лицензии'} field={licenses[0]?.license_number} isCopyable={true} />
            <TableLine name={'Дата начала действия'} field={licenses[0]?.from_dttm} isDate={true} />
            <TableLine name={'Орган выдавший'} field={licenses[0]?.state_body_name} />
            <TableLine name={'Название'} field={licenses[0]?.license_name} />
            <TableLine name={'Статус'} field={licenses[0]?.status_name} />
          </tbody>
        </S.StyledTable>
      )}
    </>
  );
};

export default Licenses;
