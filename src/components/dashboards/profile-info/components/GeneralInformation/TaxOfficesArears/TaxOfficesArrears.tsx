import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { useAppSelector } from '@app/hooks/reduxHooks';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';

const TaxOfficesArrears: React.FC = () => {
  const tax_offices_arrears = useAppSelector((state) => state.searchProfile.profile.tax_offices_arrears);

  return (
    <>
      {Boolean(tax_offices_arrears.length) && (
        <S.StyledTable>
          <thead>
            <tr>
              <td>
                <S.Title>Данные о задолженностях ИМНС</S.Title>
              </td>
            </tr>
          </thead>
          <tbody>
            <TableLine name={'Номер лицензии'} field={tax_offices_arrears[0]?.code} />
            <TableLine name={'Наименование'} field={tax_offices_arrears[0]?.name} />
            <TableLine name={'Код региона'} field={tax_offices_arrears[0]?.region_code} />
            <TableLine name={'Название региона'} field={tax_offices_arrears[0]?.region_name} />
            <TableLine name={'Дата начала действия'} field={tax_offices_arrears[0]?.from_dttm} isDate={true} />
            <TableLine name={'Дата окончания действия'} field={tax_offices_arrears[0]?.to_dttm} isDate={true} />
          </tbody>
        </S.StyledTable>
      )}
    </>
  );
};

export default TaxOfficesArrears;
