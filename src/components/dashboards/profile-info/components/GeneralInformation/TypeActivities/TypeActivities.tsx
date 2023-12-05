import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { useAppSelector } from '@app/hooks/reduxHooks';
import TableLineCollapsedTypeActivities from '@app/components/dashboards/profile-info/components/components/Fields/TableLineCollapsedTypeActivities/TableLineCollapsedTypeActivities';

const TypeActivities: React.FC = () => {
  const typeActivities = useAppSelector((state) => state.searchProfile.profile.types_activities);

  return (
    <>
      <S.StyledTable>
        <thead>
          <tr>
            <td>
              <S.Title>Виды деятельности</S.Title>
            </td>
          </tr>
        </thead>
        <tbody>
          {Boolean(typeActivities.length) && <TableLineCollapsedTypeActivities typeActivities={typeActivities} />}
        </tbody>
      </S.StyledTable>
    </>
  );
};

export default TypeActivities;
