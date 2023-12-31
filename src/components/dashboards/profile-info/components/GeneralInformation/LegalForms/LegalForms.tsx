import React from 'react';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import { useAppSelector } from '@app/hooks/reduxHooks';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';

const LegalForms: React.FC = () => {
  const legal_forms = useAppSelector((state) => state.searchProfile.profile.legal_forms);

  return (
    <>
      {Boolean(legal_forms.length) && (
        <S.StyledTable>
          <thead>
            <tr>
              <td>
                <S.Title>Данные о организационно правовой форме</S.Title>
              </td>
            </tr>
          </thead>
          <tbody>
            <TableLine name={'Тип'} field={legal_forms[0]?.form_type} />
            <TableLine name={'Наименование'} field={legal_forms[0]?.name} />
          </tbody>
        </S.StyledTable>
      )}
    </>
  );
};

export default LegalForms;
