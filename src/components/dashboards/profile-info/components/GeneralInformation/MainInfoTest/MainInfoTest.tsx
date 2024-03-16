import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import { useAppSelector } from '@app/hooks/reduxHooks';
import TableLineCollapsed from '@app/components/dashboards/profile-info/components/components/Fields/TableLineCollapsed/TableLineCollapsed';
import { formatDate } from '@app/utils/utils';
import { Address } from '@app/store/types/Subject';

const MainInfoTest: React.FC = () => {
  const unn = useAppSelector((state) => state.searchProfile.profile.unn);
  const names = useAppSelector((state) => state.searchProfile.profile.names);
  const status = useAppSelector((state) => state.searchProfile.profile.statuses);
  const dateRegEGR = useAppSelector((state) => state.searchProfile.profile.date_reg_egr);
  const age_full = useAppSelector((state) => state.searchProfile.profile.age_short);
  const taxOffices = useAppSelector((state) => state.searchProfile.profile.tax_offices);
  const addresses = useAppSelector((state) => state.searchProfile.profile.addresses);
  const typeActivities = useAppSelector((state) => state.searchProfile.profile.types_activities);
  const states_bodies = useAppSelector((state) => state.searchProfile.profile.states_bodies);

  const newFullAddresses = addresses
    ?.map((item) => {
      const date = `(с ${formatDate(item.from_dttm)})`;
      return `${getFullAddress(item)} ${date}`;
    })
    .filter((full_name) => full_name !== null) as string[];

  const newTypeActivities = typeActivities?.map((item) => {
    return `${item?.name} (Код: ${item?.code})`;
  });

  return (
    <S.StyledTable>
      <thead>
        <tr>
          <td>
            <S.Title>Регистрационные данные</S.Title>
          </td>
        </tr>
      </thead>
      <tbody>
        <TableLine name={'УНП'} field={unn} isCopyable={true} />
        <TableLine name={'Сокращенное наименование'} field={names[0]?.short_name} isCopyable={true} />
        {names?.length > 1 && (
          <TableLineCollapsed
            name={'Полное наименование'}
            fields={
              names
                ?.map((item) => {
                  const date = `(с ${formatDate(item.from_dttm)})`;
                  return `${item.full_name} ${date}`;
                })
                .filter((full_name) => full_name !== null) as string[]
            }
            isCopyable={true}
            postfix={'предыдущие наименования'}
          />
        )}
        <TableLineCollapsed
          name={'Юридический адрес'}
          fields={newFullAddresses}
          isCopyable={true}
          postfix={'предыдущие адреса'}
        />
        <TableLineCollapsed
          name={'Вид деятельности'}
          fields={newTypeActivities}
          postfix={'предыдущие виды деятельности'}
        />
        <TableLine name={'Дата регистрации в ЕГР'} field={dateRegEGR} isDate={true} />
        <TableLine name={'Продолжительность деятельности'} field={age_full} />
        <TableLine
          name={'Статус'}
          field={
            status[0]?.name === 'Действующий'
              ? status[0]?.name
              : `${status[0]?.name} (${formatDate(status[0]?.from_dttm)})`
          }
        />
        <TableLine name={'Регистрирующий орган'} field={states_bodies[0]?.full_name} />
        <TableLine name={'Налоговый учет'} field={taxOffices[0]?.name} />
      </tbody>
    </S.StyledTable>
  );
};

export default MainInfoTest;

const getFullAddress = (address: Address): string | null => {
  let result = '';
  if (address?.region !== null) result += address?.region + ', ';
  if (address?.full_address !== null) result += address?.full_address + ' ';
  if (address?.building_type !== null) result += `(${address?.building_type})`;

  return Boolean(result) ? result : null;
};
