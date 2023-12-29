import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import { useAppSelector } from '@app/hooks/reduxHooks';

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
  const period_activity = useAppSelector((state) => state.searchProfile.profile.period_activity);
  const age_short = useAppSelector((state) => state.searchProfile.profile.age_short);

  return (
    <S.StyledTable>
      <tbody>
        <TableLine name={'УНП'} field={unn} isCopyable={true} />
        <TableLine name={'Сокращённое наименование'} field={names[0]?.short_name} isCopyable={true} />
        <TableLine name={'Полное наименование'} field={names[0]?.full_name} isCopyable={true} />
        <TableLine name={'Статус'} field={status[0]?.name} />
        <TableLine name={'Дата постановки на учет в ИМНС'} field={dateRegNMS} isDate={true} />
        <TableLine name={'Дата регистрации в ЕГР'} field={dateRegEGR} isDate={true} />
        <TableLine name={'Номер решения о создании'} field={decision_create_number} />
        <TableLine name={'Номер решения о ликвидации'} field={decision_liquidation_number} />
        <TableLine name={'Период деятельности'} field={period_activity} />
        <TableLine name={'Количество лет деятельности'} field={age_short} />
      </tbody>
    </S.StyledTable>
  );
};

export default MainInfo;
