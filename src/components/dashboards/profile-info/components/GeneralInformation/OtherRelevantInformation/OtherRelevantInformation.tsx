import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';

const OtherRelevantInformation: React.FC = () => {
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
        <tbody></tbody>
      </S.StyledTable>
    </>
  );
};

export default OtherRelevantInformation;
