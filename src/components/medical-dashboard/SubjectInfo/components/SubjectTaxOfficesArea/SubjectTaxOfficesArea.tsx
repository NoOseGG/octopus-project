import React, { useState } from 'react';
import { TaxOfficeArrea, WebSite } from '@app/store/types/Subject';
import styled from 'styled-components';

const TaxOfficesArea = styled.span`
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
  taxOfficesArea: TaxOfficeArrea[];
};

const SubjectWebSites: React.FC<MyComponentProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {props.taxOfficesArea[0] && (
        <div>
          <TaxOfficesArea onClick={handleClick}>Данные о задолженностях ИМНС:</TaxOfficesArea>{' '}
          {props.taxOfficesArea[0].name}
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
          {props.taxOfficesArea.map((webSite) => (
            <tr>
              <TableLine>{webSite.code}</TableLine>
              <TableLine>{webSite.name}</TableLine>
              <TableLine>{webSite.region_code}</TableLine>
              <TableLine>{webSite.region_name}</TableLine>
              <TableLine>{webSite.from_dttm}</TableLine>
              <TableLine>{webSite.to_dttm}</TableLine>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
};

export default SubjectWebSites;
