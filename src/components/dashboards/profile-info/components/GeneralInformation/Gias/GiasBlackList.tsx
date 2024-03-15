import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';

const GiasBlackList: React.FC = () => {
  const gias_black_list = useAppSelector((state) => state.searchProfile.profile.gias_black_list);

  return (
    <>
      {Boolean(gias_black_list.length) && (
        <S.StyledTable>
          <thead>
            <tr>
              <td>
                <S.Title>Реестр временно не допускаемых к участию в процедурах государственных закупок</S.Title>
              </td>
            </tr>
          </thead>
          <tbody>
            <TableLine name={'Дата включения в реестр'} field={gias_black_list[0]?.from_dttm} />
            <TableLine name={'Основание включения в список'} field={gias_black_list[0]?.basis_inclusion} />
            <TableLine name={'Дата исключения из реестра'} field={gias_black_list[0]?.to_dttm} />
            <TableLine name={'Основание исключения из списка'} field={gias_black_list[0]?.basis_exclusion} />
          </tbody>
        </S.StyledTable>
      )}
    </>
  );
};

export default GiasBlackList;
