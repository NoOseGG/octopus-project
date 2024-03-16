import React from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import * as S from '@app/components/dashboards/profile-info/styles/ProfileInfoStyles';
import TableLine from '@app/components/dashboards/profile-info/components/components/Fields/TableLine/TableLine';

const LegalEntityType: React.FC = () => {
  const legal_entity_type = useAppSelector((state) => state.searchProfile.profile.legal_entity_type);

  return (
    <>
      {Boolean(legal_entity_type.length) && (
        <S.StyledTable>
          <thead>
            <tr>
              <td>
                <S.Title>Сведения о типе субъекта</S.Title>
              </td>
            </tr>
          </thead>
          <tbody>
            <TableLine name={'Полное название типа'} field={legal_entity_type[0]?.entity_type_name} />
            <TableLine name={'Краткое название типа'} field={legal_entity_type[0]?.entity_type_code} />
            <TableLine name={'Дата начала действия'} field={legal_entity_type[0]?.from_dttm} isDate={true} />
          </tbody>
        </S.StyledTable>
      )}
    </>
  );
};

export default LegalEntityType;
