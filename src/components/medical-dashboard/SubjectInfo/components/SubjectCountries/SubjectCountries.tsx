import React, { useState } from 'react';
import styled from 'styled-components';
import { Country } from '@app/store/types/Subject';

const Countries = styled.span`
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
  countries: Country[];
};

const SubjectPhones: React.FC<MyComponentProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {props.countries[0] && (
        <div>
          <Countries onClick={handleClick}>Данные о стране регистрации:</Countries> {props.countries[0].name}
        </div>
      )}

      {isExpanded && (
        <Table>
          <TableTitle>
            <TableLine>Код</TableLine>
            <TableLine>Наименование</TableLine>
            <TableLine>Дата начала действия</TableLine>
            <TableLine>Дата окончания действия</TableLine>
          </TableTitle>
          {props.countries.map((country) => (
            <tr>
              <TableLine>{country.code}</TableLine>
              <TableLine>{country.name}</TableLine>
              <TableLine>{country.from_dttm}</TableLine>
              <TableLine>{country.to_dttm}</TableLine>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
};

export default SubjectPhones;
