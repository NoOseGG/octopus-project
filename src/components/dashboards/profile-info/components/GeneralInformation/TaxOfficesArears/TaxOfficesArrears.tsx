import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { useAppSelector } from '@app/hooks/reduxHooks';
import TableLineTaxOfficesArrears from '@app/components/dashboards/profile-info/components/components/Fields/TableLineTaxOfficesArrears/TableLineTaxOfficesArrears';

const TaxOfficesArrears: React.FC = () => {
  const tax_offices_arrears = useAppSelector((state) => state.searchProfile.profile.tax_offices_arrears);

  return (
    <>
      {Boolean(tax_offices_arrears.length) && (
        <>
          <S.StyledTable>
            <thead>
              <tr>
                <td>
                  <S.Title>Данные о задолженностях ИМНС</S.Title>
                </td>
              </tr>
            </thead>
            <tbody>
              <TableLineTaxOfficesArrears taxOfficesArrears={tax_offices_arrears} />
            </tbody>
          </S.StyledTable>
          <S.MyDivider />
        </>
      )}
    </>
  );
};

export default TaxOfficesArrears;
