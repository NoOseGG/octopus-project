import React, { useState } from 'react';
import { StatusType } from '@app/store/types/Subject';
import styled from 'styled-components';

const StatusesType = styled.span`
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
  statusesType: StatusType[];
};

const SubjectWebSites: React.FC<MyComponentProps> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {props.statusesType[0] && (
        <div>
          <StatusesType onClick={handleClick}>Данные о способах создания/ликвидации:</StatusesType>{' '}
          {props.statusesType[0].name}
        </div>
      )}

      {isExpanded && (
        <Table>
          <TableTitle>
            <TableLine>Код</TableLine>
            <TableLine>Наименование</TableLine>
            <TableLine>Код типа</TableLine>
            <TableLine>Дата начала действия</TableLine>
            <TableLine>Дата окончания действия</TableLine>
          </TableTitle>
          {props.statusesType.map((statusType) => (
            <tr>
              <TableLine>{statusType.status_code}</TableLine>
              <TableLine>{statusType.name}</TableLine>
              <TableLine>{statusType.type_code}</TableLine>
              <TableLine>{statusType.from_dttm}</TableLine>
              <TableLine>{statusType.to_dttm}</TableLine>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
};

export default SubjectWebSites;
