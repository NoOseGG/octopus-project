import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';

const GiasAccreditedParticipant: React.FC = () => {
  const gias_accredited_participant = useAppSelector(
    (state) => state.searchProfile.profile.gias_accredited_participant,
  );

  return (
    <>
      {Boolean(gias_accredited_participant.length) && (
        <S.StyledTable>
          <thead>
            <tr>
              <td>
                <S.Title>Реестр ГИАС аккредитованных участников</S.Title>
              </td>
            </tr>
          </thead>
          <tbody>
            <TableLine name={'Дата включения в реестр'} field={gias_accredited_participant[0]?.from_dttm} />
            <TableLine name={'Дата исключения из реестра'} field={gias_accredited_participant[0]?.to_dttm} />
          </tbody>
        </S.StyledTable>
      )}
    </>
  );
};

export default GiasAccreditedParticipant;
