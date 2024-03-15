import React from 'react';
import TableLineGiasComplaintSubmit from '@app/components/dashboards/profile-info/components/components/Fields/TableLineGiasComplaintSubmit/TableLineGiasComplaintSubmit';
import { useAppSelector } from '@app/hooks/reduxHooks';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';

const GiasComplaintSubmit: React.FC = () => {
  const gias_complaint_submit = useAppSelector((state) => state.searchProfile.profile.gias_complaint_submit);

  return (
    <>
      {Boolean(gias_complaint_submit.length) && (
        <S.StyledTable>
          <thead>
            <tr>
              <td>
                <S.Title>Реестр жалоб которые отправлял субъект</S.Title>
              </td>
            </tr>
          </thead>
          <tbody>
            <TableLineGiasComplaintSubmit gias_complaint_submit={gias_complaint_submit} />
          </tbody>
        </S.StyledTable>
      )}
    </>
  );
};

export default GiasComplaintSubmit;
