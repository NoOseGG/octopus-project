import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { Address } from '@app/store/types/Subject';
import { formatDate } from '@app/utils/utils';
import TableLineCollapsed from '@app/components/dashboards/profile-info/components/components/Fields/TableLineCollapsed/TableLineCollapsed';

const BasicDetails: React.FC = () => {
  const taxOffices = useAppSelector((state) => state.searchProfile.profile.tax_offices);
  const addresses = useAppSelector((state) => state.searchProfile.profile.addresses);
  const countries = useAppSelector((state) => state.searchProfile.profile.countries);

  const newFullAddresses = addresses
    ?.map((item, index) => {
      const date = index !== 0 ? `(${formatDate(item.from_dttm)})` : '';
      return `${getFullAddress(item)} ${date}`;
    })
    .filter((full_name) => full_name !== null) as string[];

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
          <TableLineCollapsed
            name={'Юридический адрес'}
            fields={newFullAddresses}
            isCopyable={true}
            postfix={'предыдущие адреса'}
          />
        </tbody>
      </S.StyledTable>
    </>
  );
};

export default BasicDetails;

const getFullAddress = (address: Address): string | null => {
  let result = '';
  if (address?.region !== null) result += address?.region + ', ';
  if (address?.full_address !== null) result += address?.full_address + ' ';
  if (address?.building_type !== null) result += `(${address?.building_type})`;

  return Boolean(result) ? result : null;
};
