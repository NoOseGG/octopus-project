import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLineGiasComplaintReceive from '@app/components/dashboards/profile-info/components/components/Fields/TableLineGiasComplaintReceive/TableLineGiasComplaintReceive';

const GiasComplaintReceive: React.FC = () => {
  const gias_complaint_receive = useAppSelector((state) => state.searchProfile.profile.gias_complaint_receive);

  return (
    <>
      {Boolean(gias_complaint_receive.length) && (
        <>
          <S.StyledTable>
            <thead>
              <tr>
                <td>
                  <S.Title>Реестр жалоб которые получал субъект</S.Title>
                </td>
              </tr>
            </thead>
            <tbody>
              <TableLineGiasComplaintReceive gias_complaint_receive={gias_complaint_receive} />
            </tbody>
          </S.StyledTable>
          <S.MyDivider />
        </>
      )}
    </>
  );
};

export default GiasComplaintReceive;
