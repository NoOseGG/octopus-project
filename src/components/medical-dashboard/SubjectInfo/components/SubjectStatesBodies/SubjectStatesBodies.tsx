import React, { useState } from 'react';
import styled from 'styled-components';
import { StateBody } from '@app/store/types/Subject';

const StatesBodies = styled.span`
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
  statesBodies: StateBody[];
};

const SubjectWebSites: React.FC<MyComponentProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {props.statesBodies[0] && (
        <div>
          <StatesBodies onClick={handleClick}>Данные о государственных органах:</StatesBodies>{' '}
          {props.statesBodies[0].full_name}
        </div>
      )}

      {isExpanded && (
        <Table>
          <TableTitle>
            <TableLine>Код</TableLine>
            <TableLine>Полное наименование</TableLine>
            <TableLine>
              Код статуса. STATUS может принимать значения LKV - орган принявший решение о ликвидации; CUR - текущий
              орган учета; CRT - орган принявший решение о создании
            </TableLine>
            <TableLine>Дата начала действия</TableLine>
          </TableTitle>
          {props.statesBodies.map((stateBody) => (
            <tr>
              <TableLine>{stateBody.state_body_code}</TableLine>
              <TableLine>{stateBody.full_name}</TableLine>
              <TableLine>{stateBody.status}</TableLine>
              <TableLine>{stateBody.from_dttm}</TableLine>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
};

export default SubjectWebSites;
