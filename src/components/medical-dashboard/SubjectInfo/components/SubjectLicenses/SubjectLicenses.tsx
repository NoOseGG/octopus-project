import React, { useState } from 'react';
import styled from 'styled-components';
import {License, StateBody} from '@app/store/types/Subject';

const Licenses = styled.span`
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
  licenses: License[];
};

const SubjectWebSites: React.FC<MyComponentProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {props.licenses[0] && (
        <div>
          <Licenses onClick={handleClick}>Данные о лицензиях:</Licenses>{' '}
          {props.licenses[0].license_name}
        </div>
      )}

      {isExpanded && (
        <Table>
          <TableTitle>
            <TableLine>Номер лицензии</TableLine>
            <TableLine>Орган выдавший</TableLine>
            <TableLine>Название</TableLine>
            <TableLine>Название статуса</TableLine>
            <TableLine>Код</TableLine>
            <TableLine>Дата начала действия</TableLine>
          </TableTitle>
          {props.licenses.map((license) => (
            <tr>
              <TableLine>{license.license_number}</TableLine>
              <TableLine>{license.state_body_name}</TableLine>
              <TableLine>{license.license_name}</TableLine>
              <TableLine>{license.status_name}</TableLine>
              <TableLine>{license.status_code}</TableLine>
              <TableLine>{license.from_dttm}</TableLine>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
};

export default SubjectWebSites;
