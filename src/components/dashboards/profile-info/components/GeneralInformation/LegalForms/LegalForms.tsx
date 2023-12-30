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
            <TableLine name={'Код'} field={legal_forms[0]?.form_code} />
            <TableLine name={'Тип'} field={legal_forms[0]?.form_type} />
            <TableLine name={'Наименование'} field={legal_forms[0]?.name} />
            <TableLine name={'Описание'} field={legal_forms[0]?.description} />
            <TableLine name={'Дата исключения из ОКРБ'} field={legal_forms[0]?.exclusion_date} />
            <TableLine name={'Описание исключения'} field={legal_forms[0]?.exception_description} />
            <TableLine name={'Тип субъекта'} field={legal_forms[0]?.entity_type} />
            <TableLine name={'Дата начала действия'} field={legal_forms[0]?.from_dttm} isDate={true} />
            <TableLine name={'Дата окончания действия'} field={legal_forms[0]?.to_dttm} isDate={true} />
          </tbody>
        </S.StyledTable>
      )}
    </>
  );
};

export default LegalForms;
