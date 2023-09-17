import React, { useState } from 'react';
import { LegalForm } from '@app/store/types/Subject';
import styled from 'styled-components';

const TaxOffice = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const Table = styled.table`
  border: 2px solid #000;
  padding: 5px;
`;

const TableTitle = styled.tr`
  border: 1px solid #000;
  background-color: #d48806;
`;

const TableLine = styled.th`
  padding: 5px;
  border: 1px solid #000c17;
`;

type MyComponentProps = {
  legalForms: LegalForm[];
};

const SubjectWebSites: React.FC<MyComponentProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {props.legalForms[0] && (
        <div>
          <TaxOffice onClick={handleClick}>Данные о орг.правовой форме:</TaxOffice> {props.legalForms[0].name}
        </div>
      )}

      {isExpanded && (
        <Table>
          <TableTitle>
            <TableLine>Код</TableLine>
            <TableLine>Тип </TableLine>
            <TableLine>Наименование</TableLine>
            <TableLine>Описание</TableLine>
            <TableLine>Дата исключения из ОКРБ 019-2013</TableLine>
            <TableLine>Описание исключения</TableLine>
            <TableLine>Тип субъекта</TableLine>
            <TableLine>Дата начала действия</TableLine>
            <TableLine>Дата окончания действия</TableLine>
          </TableTitle>
          {props.legalForms.map((legalForm) => (
            <tr>
              <TableLine>{legalForm.form_code}</TableLine>
              <TableLine>{legalForm.form_type}</TableLine>
              <TableLine>{legalForm.name}</TableLine>
              <TableLine>{legalForm.description}</TableLine>
              <TableLine>{legalForm.exclusion_date}</TableLine>
              <TableLine>{legalForm.exception_description}</TableLine>
              <TableLine>{legalForm.entity_type}</TableLine>
              <TableLine>{legalForm.from_dttm}</TableLine>
              <TableLine>{legalForm.to_dttm}</TableLine>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
};

export default SubjectWebSites;
