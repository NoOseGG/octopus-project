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

  return (
    <S.StyledTable>
      <tbody>
        <TableLine name={'УНП'} field={unn} />
        <TableLine name={'Сокращённое наименование'} field={names[0]?.short_name} />
        <TableLine name={'Полное наименование'} field={names[0]?.full_name} />
        <TableLine name={'Статус'} field={status[0]?.name} />
        <TableLine name={'Дата постановки на учет в ИМНС'} field={dateRegNMS} isDate={true} />
        <TableLine name={'Дата регистрации в ЕГР'} field={dateRegEGR} isDate={true} />
      </tbody>
    </S.StyledTable>
  );
};

export default MainInfo;
