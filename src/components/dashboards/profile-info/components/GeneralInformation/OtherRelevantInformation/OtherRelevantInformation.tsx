import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';
import { useAppSelector } from '@app/hooks/reduxHooks';

const OtherRelevantInformation: React.FC = () => {
  const dateRegNMS = useAppSelector((state) => state.searchProfile.profile.date_reg_mns);
  const decision_create_number = useAppSelector((state) => state.searchProfile.profile.decision_create_number);
  const decision_liquidation_number = useAppSelector(
    (state) => state.searchProfile.profile.decision_liquidation_number,
  );

  return (
    <>
      <S.StyledTable>
        <thead>
          <tr>
            <td>
              <S.Title>Иная значимая информация</S.Title>
            </td>
          </tr>
        </thead>
        <tbody>
          <TableLine name={'Дата постановки на учет в ИМНС'} field={dateRegNMS} isDate={true} />
          <TableLine name={'Номер решения о создании'} field={decision_create_number} />
          <TableLine name={'Номер решения о ликвидации'} field={decision_liquidation_number} />
        </tbody>
      </S.StyledTable>
    </>
  );
};

export default OtherRelevantInformation;
