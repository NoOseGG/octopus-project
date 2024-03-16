import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import { useAppSelector } from '@app/hooks/reduxHooks';
import TableLineCollapsed from '@app/components/dashboards/profile-info/components/components/Fields/TableLineCollapsed/TableLineCollapsed';
import { formatDate } from '@app/utils/utils';

const MainInfo: React.FC = () => {
  const unn = useAppSelector((state) => state.searchProfile.profile.unn);
  const names = useAppSelector((state) => state.searchProfile.profile.names);
  const status = useAppSelector((state) => state.searchProfile.profile.statuses);
  const dateRegNMS = useAppSelector((state) => state.searchProfile.profile.date_reg_mns);
  const dateRegEGR = useAppSelector((state) => state.searchProfile.profile.date_reg_egr);
  const decision_create_number = useAppSelector((state) => state.searchProfile.profile.decision_create_number);
  const decision_liquidation_number = useAppSelector(
    (state) => state.searchProfile.profile.decision_liquidation_number,
  );
  const age_full = useAppSelector((state) => state.searchProfile.profile.age_full);

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
        {names?.length === 1 ? (
          <TableLine name={'Полное наименование'} field={names[0].full_name} />
        ) : (
          <TableLineCollapsed
            name={'Полное наименование'}
            fields={
              names
                ?.map((item) => {
                  const date = `(${formatDate(item.from_dttm)})`;
                  return `${item.full_name} ${date}`;
                })
                .filter((full_name) => full_name !== null) as string[]
            }
            isCopyable={true}
            postfix={'предыдущие наименования'}
          />
        )}
        <TableLine
          name={'Статус'}
          field={
            status[0]?.name === 'Действующий'
              ? status[0]?.name
              : `${status[0]?.name} (${formatDate(status[0]?.from_dttm)})`
          }
        />
        <TableLine name={'Дата постановки на учет в ИМНС'} field={dateRegNMS} isDate={true} />
        <TableLine name={'Дата регистрации в ЕГР'} field={dateRegEGR} isDate={true} />
        <TableLine name={'Номер решения о создании'} field={decision_create_number} />
        <TableLine name={'Номер решения о ликвидации'} field={decision_liquidation_number} />
        <TableLine name={'Продолжительность деятельности'} field={age_full} />
      </tbody>
    </S.StyledTable>
  );
};

export default MainInfo;
