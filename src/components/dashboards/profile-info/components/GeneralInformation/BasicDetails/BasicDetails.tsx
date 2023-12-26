import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import { useAppSelector } from '@app/hooks/reduxHooks';

const BasicDetails: React.FC = () => {
  const taxOffices = useAppSelector((state) => state.searchProfile.profile.tax_offices);
  const addresses = useAppSelector((state) => state.searchProfile.profile.addresses);
  const countries = useAppSelector((state) => state.searchProfile.profile.countries);

  return (
    <>
      <S.StyledTable>
        <thead>
          <tr>
            <td>
              <S.Title>Основные реквизиты</S.Title>
            </td>
          </tr>
        </thead>
        <tbody>
          <TableLine name={'Регистратор'} field={taxOffices[0]?.name} />
          <TableLine name={'Дата начала действия'} field={taxOffices[0]?.from_dttm} isDate={true} />
          <TableLine name={'Страна регистрации'} field={countries[0]?.name} />
          <TableLine name={'Юридический адрес'} field={addresses[0]?.full_address} />
        </tbody>
      </S.StyledTable>
    </>
  );
};

export default BasicDetails;
