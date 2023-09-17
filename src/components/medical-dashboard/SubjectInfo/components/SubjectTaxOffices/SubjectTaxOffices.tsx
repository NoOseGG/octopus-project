import React, { useState } from 'react';
import { TaxOffice } from '@app/store/types/Subject';
import styled from 'styled-components';

const TaxOffices = styled.span`
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
  taxOffices: TaxOffice[];
};

const SubjectWebSites: React.FC<MyComponentProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {props.taxOffices[0] && (
        <div>
          <TaxOffices onClick={handleClick}>Данные о ИМНС:</TaxOffices> {props.taxOffices[0].name}
        </div>
      )}

      {isExpanded && (
        <Table>
          <TableTitle>
            <TableLine>Код</TableLine>
            <TableLine>Наименование </TableLine>
            <TableLine>Код региона</TableLine>
            <TableLine>Название региона</TableLine>
            <TableLine>Дата начала действия</TableLine>
            <TableLine>Дата окончания действия</TableLine>
          </TableTitle>
          {props.taxOffices.map((taxOffice) => (
            <tr>
              <TableLine>{taxOffice.code}</TableLine>
              <TableLine>{taxOffice.name}</TableLine>
              <TableLine>{taxOffice.region_code}</TableLine>
              <TableLine>{taxOffice.region_name}</TableLine>
              <TableLine>{taxOffice.from_dttm}</TableLine>
              <TableLine>{taxOffice.to_dttm}</TableLine>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
};

export default SubjectWebSites;
