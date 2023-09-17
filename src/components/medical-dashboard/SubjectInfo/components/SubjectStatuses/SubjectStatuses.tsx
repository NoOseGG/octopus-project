import React, { useState } from 'react';
import styled from 'styled-components';
import {Status, TypeActivity} from '@app/store/types/Subject';

const Statuses = styled.span`
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
  statuses: Status[];
};

const SubjectPhones: React.FC<MyComponentProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {props.statuses[0] && (
        <div>
          <Statuses onClick={handleClick}>Данные о статусе:</Statuses>{' '}
          {props.statuses[0].name}
        </div>
      )}

      {isExpanded && (
        <Table>
          <TableTitle>
            <TableLine>Код</TableLine>
            <TableLine>Наименование</TableLine>
            <TableLine>Описание</TableLine>
            <TableLine>Дата начала действия</TableLine>
            <TableLine>Дата окончания действия</TableLine>
          </TableTitle>
          {props.statuses.map((status) => (
            <tr>
              <TableLine>{status.code}</TableLine>
              <TableLine>{status.name}</TableLine>
              <TableLine>{status.description}</TableLine>
              <TableLine>{status.from_dttm}</TableLine>
              <TableLine>{status.to_dttm}</TableLine>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
};

export default SubjectPhones;
