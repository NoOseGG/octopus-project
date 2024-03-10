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

  const newFullNames = names
    ?.map((item, index) => {
      const date = index !== 0 ? `(${formatDate(item.to_dttm)})` : '';
      return `${item.full_name} ${date}`;
    })
    .filter((full_name) => full_name !== null) as string[];

  return (
    <S.StyledTable>
      <tbody>
        <TableLine name={'УНП'} field={unn} isCopyable={true} />
        <TableLine name={'Сокращённое наименование'} field={names[0]?.short_name} isCopyable={true} />
        <TableLineCollapsed
          name={'Полное наименование'}
          fields={newFullNames}
          isCopyable={true}
          postfix={'предыдущие названия'}
        />
        <TableLine name={'Статус'} field={status[0]?.name} />
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
